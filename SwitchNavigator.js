// import {View, Text, Button} from 'react-native'
// import {createAppContainer, createSwitchNavigator} from 'react-navigation'
// import React from 'react'

// class ScreenComponent1 extends React.Component{
//   render()  {
//     return  (
//       <View
//         style = {{
//           flex:1,
//           alignItems:'center',
//           justifyContent: 'center',
//           borderWidth:22,
//           borderColor: 'blue',
//         }}
//       >
//         <Text> Page 1</Text>

//         <Button 
//           title= "Go to screen 2" 
//           onPress = {() => this.props.navigation.navigate("RouteNameTwo")}
//         />
//       </View>
//     )
//   }
// }

// class ScreenComponent2 extends React.Component{
//   render()  {
//     return  (
//       <View
//         style = {{
//           flex:1,
//           alignItems:'center',
//           justifyContent: 'center',
//           borderWidth:22,
//           borderColor: 'red',
//         }}
//       >
//         <Text> Page 2</Text>

//         <Button 
//           title= "Go to screen 1" 
//           onPress = {() => this.props.navigation.navigate('RouteNameOne')} 
//         />
//       </View>
//     )
//   }
// }

// const SamipNavigator = createSwitchNavigator(
//   {
//     "RouteNameOne": ScreenComponent1,
//     "RouteNameTwo": ScreenComponent2,
//   },
//   {
//     initialRouteName: ScreenComponent1,
//   }
// )

// const AppContainer = createAppContainer(SamipNavigator)

  
// export default class Example extends React.Component  {
//   render()  {
//     return  (
//       <AppContainer />
//     )
//   }
// }


