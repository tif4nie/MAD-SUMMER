import React from 'react';
import SignIn from './src/pages/Home';

const App = () => {
  return <SignIn />;
};

export default App;

// import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import SplashScreen from './src/pages/SplashScreen/index';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <SplashScreen />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';

// //Komponen adalah fungsi yang mengembalikan JSX
// const App = () => {
//   return (
//     //JSX
//     <ScrollView>
//       <View>
//         <View style={style.container}>
//           <Text style={style.text}>Basic React Native</Text>
//         </View>
//         <Image
//           style={style.img1}
//           source={require('./assets/Blossom-pic.webp')}
//         />
//         <Image
//           style={style.img1}
//           source={{
//             uri: 'https://static.wikia.nocookie.net/powerpuff_girls/images/1/1e/Bubbles_Image.png/revision/latest/scale-to-width-down/1000?cb=20200506132111&path-prefix=id',
//           }}
//         />
//         <Image
//           style={style.img1}
//           source={{
//             uri: 'data:image/png;bases64, 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',
//           }}
//         />
//         <TextInput style={style.input} placeholder="Masukkan nama anda" />
//       </View>
//       <TouchableOpacity style={style.button} activeOpacity={0.5} />
//     </ScrollView>
//   );
// };

// export default App; //untuk mengexport komponen

// const style = StyleSheet.create({
//   container: {
//     backgroundColor: 'pink',
//   },
//   text: {
//     fontSize: 30,
//     textAlign: 'center',
//     color: 'white',
//   },
//   img1: {
//     height: 170,
//     width: 120,
//   },
//   input: {
//     borderWidth: 2,
//     borderColor: '#000000',
//     paddingVertical: 20,
//     fontSize: 15,
//     margin: 20,
//     padding: 20,
//     borderRadius: 10,
//   },
//   button: {
//     backgroundColor: '#FFFF',
//   },
//   bottonText: {
//     color: '#FFFF',
//     textAlign: 'center',
//     fontSize: 25,
//   },
// });
