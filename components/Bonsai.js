import { update, ref, remove } from "firebase/database";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker"
import {firebase,db} from "../firebase-config";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Image
} from 'react-native';
import { ActivityIndicator, Stack } from "@react-native-material/core";
import { async } from "@firebase/util";
import { getDownloadURL } from "firebase/storage";

const Bonsai = ({bonsai: {imageUrl,name, image, description, thirsty, period}, id}) => {
  const [isThirsty, setIsThirsty] = useState(thirsty);
  const [waterTime, setWaterTime] = useState(3000);
  const [images,setImages] = useState(null);
  const [uploading, setUploading] = useState(false);
   image = "https://jpeg.org/images/jpeg-home.jpg";

  const pickImage = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect: [4,3],
      quality:1
    });
    console.log('result from image picker',result);
    if(!result.cancelled){
      setImages(result.uri);
    }
  };

  const uploadImage=async()=>{
    const blob =await new Promise((resolve,reject)=>{
      const xhr  =   new XMLHttpRequest();
      xhr.onload = function(){
        resolve(xhr.response);
      };
      xhr.onerror=function(){
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType='blob';
      xhr.open('GET',images,true);
      xhr.send(null);
    });
    const refs  = firebase.storage().ref().child(`Pictures/Image`)
    const snapshot = refs.put(blob);
    snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED,
      ()=>{
        setUploading(true)
      },
      (error)=>{
        setUploading(false);
        console.log(error);
        blob.close();
        return;
      },
      ()=>{
        snapshot.snapshot.ref.getDownloadURL().then((url)=>{
          setUploading(false)
          console.log("Download url: ",url)
          setImages(url)
          blob.close()
          let updates = {};
          imageUrl=url
          updates['/bonsais/'+id]={
            imageUrl:url,
            description,
            name,
            period,
            thirsty:true
          }
          update(ref(db), updates)
          .then(()=>{
            console.log("update of bonsai imageUrl successful");
          
          })
          .catch((error)=>{
            console.log("error: ",error);
          });

          return url
        })

      }

      )


  }

  return (
    <View style={styles.bonsaiItem}>
              {images &&<Image source={{uri:images}} style={{width:150,height:150}}/>}

      <Stack spacing={2} m={4}>
      <Text style={[styles.bonsaiItem, {opacity: isThirsty ? 0.2 : 1}]}>
        I'm {name}, I'm {isThirsty ? "thirsty" : "full"}!
      </Text>
      <Image
      source={{uri:image}}
      style={styles.img}

      />
       <TextInput
        style = {{height: 40}}
        placeholder = ' set Time '
        onChangeText = { inputValue => setWaterTime(parseFloat(inputValue)) }
        defaultValue = { period }
      />
      <Button
      title="remove"
      onPress={()=>{
          remove(ref(db, `/bonsais/${id}`))
         
          .then(()=>{
            console.log("delete of bonsai"+id+"successful");
          
          })
          .catch((error)=>{
            console.log("error: ",error);
          });
            }}
      />
      <Button
        onPress={() => {
          setIsThirsty(false);
          console.log('london ',imageUrl);
          let updates = {};
          updates['/bonsais/'+id]={
            imageUrl,
            description,
            name,
            period,
            thirsty:false
          }
          update(ref(db), updates)
          .then(()=>{
            console.log("update of imageurl"+id+"successful");
          
          })
          .catch((error)=>{
            console.log("error: ",error);
          });
          
          
          setTimeout(
            () => {
               setIsThirsty(true);
              let updates = {};
              updates['/bonsais/'+id]={
                imageUrl,
                description,
                name,
                period,
                thirsty:true
              }
              update(ref(db), updates)
              .then(()=>{
                console.log("update of bonsai"+id+"successful");
              
              })
              .catch((error)=>{
                console.log("error: ",error);
              });
              
            }, waterTime
          );
        }}
        disabled={!isThirsty}
        title={isThirsty ? "Feed water!" : "Thank you!"}
      />
      <View style={styles.bonsaiItem}>
        <Button title='select Image' onPress={pickImage}/>
        {!uploading ? <Button title="upload Image" onPress={uploadImage}/>:<ActivityIndicator size={'small'} color='blue'/>}
      </View>
     </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  bonsaiItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  bonsaiText: {
    paddingHorizontal: 5,
    fontSize: 16
  },
  img:{
width: 30,
height: 30

  }
})

export default Bonsai; 