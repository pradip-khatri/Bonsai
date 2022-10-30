// // import React, { useEffect, useState } from "react";
// // import { Button, Text, View, StyleSheet, TextInput, ScrollView } from "react-native";
// // import { db, firebase } from "./firebase-config";
// // import { onValue, push, remove, ref } from "firebase/database";
// // import Bonsai from './Bonsai';

// // const dbRef = ref(db, '/bonsais');
// // const image = "https://jpeg.org/images/jpeg-home.jpg";
// // const App = () => {
// //  const [bonsais, setBonsais] = useState({});
// //   const [currentBonsai, setCurrentBonsai] = useState(
// //     { 
// //       imageUrl:"",
// //       name:'',

// //       description:'',
// //       period: 3000,
// //       image:image,
// //       thirsty: true
// //     });
// //   const bonsaisKeys = Object.keys(bonsais);


// //   useEffect(
// //     () => {
// //       return onValue(dbRef, querySnapshot => {
// //         let data = querySnapshot.val() || {};
// //         let bonsais = {...data};
// //         console.log('bonsais', bonsais);
// //         setBonsais(bonsais);
// //       });
// //     }, []);

// //   const addNewBonsai = () => {
// //     console.log('currentBonsai', currentBonsai);
// //     push(dbRef, {
// //       imageUrl:currentBonsai.imageUrl,
// //       thirsty: currentBonsai.thirsty,
// //       period: currentBonsai.period,
// //       name: currentBonsai.name,
// //       description: currentBonsai.description
// //     });
// //     setCurrentBonsai({
// //       imageUrl:"",
// //       image:image,
// //       name: '',
// //       description: '',
// //       period: 3000,
// //       thirsty: true
// //     });
// //   }

// //   const clearBonsais = () => {
// //     remove(dbRef);
// //   }

//   return(
//     <ScrollView
//       styles={styles.container}
//       contentContainerStyle={styles.contentContainerStyle}>
//       <View>
//         {bonsaisKeys.length > 0 ? (
//           bonsaisKeys.map(key => (
//             <Bonsai
//               key={key}
//               id={key}
//               bonsai={bonsais[key]}
//             />
//           ))
//         ) : (
//           <Text>No bonsai</Text>
//         )}
//       </View>
//       <TextInput
//         placeholder="Set water time"
//         value={currentBonsai.period}
//         style={styles.textInput}
//         onChangeText={
//           text=>{
//             setCurrentBonsai({...currentBonsai, period:parseFloat(text)});
//           }
//         }
//         onSubmitEditing={addNewBonsai}/>

//       <TextInput
//         placeholder="New Bonsai Name"
//         value={currentBonsai.name}
//         style={styles.textInput}
//         onChangeText={
//           text=>{
//             setCurrentBonsai({...currentBonsai, name:text});
//           }
//         }
//         onSubmitEditing={addNewBonsai}/>

//       <TextInput
//         placeholder="New Bonsai Description"
//         value={currentBonsai.description}
//         style={styles.textInput}
//         onChangeText={
//           text=>{
//             setCurrentBonsai({...currentBonsai, description:text});
//           }
//         }
//         onSubmitEditing={addNewBonsai}/>

//       <View>
//         <View style={{marginTop:20}}>
//           <Button
//             title="Add new bonsai"
//             onPress={addNewBonsai}
//             color="green"
//             disabled={
//               currentBonsai.name=='' ||
//               currentBonsai.description =='' || 
//               currentBonsai.period  ==''
//             }/>
//         </View>
//         <View style={{marginTop:20}}>
//           <Button
//             title="Clear bonsais list"
//             onPress={clearBonsais}
//             color="red"
//             style={{marginTop:20}}/>
//         </View>
//       </View>

//     </ScrollView>
//     )
// //}


// // // React Native Styles
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     paddingTop: 12
// //   },
// //   contentContainerStyle: {
// //     padding: 24
// //   },
// //   textInput: {
// //     borderWidth: 1,
// //     borderColor: '#afafaf',
// //     borderRadius: 5,
// //     paddingHorizontal: 10,
// //     marginVertical: 20,
// //     fontSize: 20,
// //   },
// //   bonsaiItem: {
// //     flexDirection: 'row',
// //     marginVertical: 10,
// //     alignItems: 'center'
// //   },
// //   bonsaiText: {
// //     paddingHorizontal: 5,
// //     fontSize: 16
// //   },
// // });

// // export default App;






   