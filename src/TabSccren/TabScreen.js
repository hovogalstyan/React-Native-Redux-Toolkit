import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenName } from "../ScreenName/ScreenName";
import Ionicons from "react-native-vector-icons/Ionicons";
import FeatherIcons from "react-native-vector-icons/Feather";
import Home from "./Screen/Home/Home";
import Cart from "./Screen/Cart/Cart";
import User from "./Screen/User";
import { StyleSheet } from "react-native";
const Tab = createBottomTabNavigator();
const TabScreen = () => {
  return (
     <Tab.Navigator
       initialRouteName={ScreenName.Home}
       screenOptions={({route})=>({
         headerShown:false,
         tabBarShowLabel:false,
         tabBarStyle: styles.tabBar,
         tabBarIcon: ({focused,color, size}) =>{
           let iconName;
           let rn = route.name
           if(rn === ScreenName.Home){
             iconName = focused ? 'home' : 'home-outline'
           }else if(rn === ScreenName.Cart){
             iconName = focused ? 'cart' : 'cart-outline'
           }else if(rn === ScreenName.User){
             return <FeatherIcons name={'log-out'} color={color} size={size}/>
           }
           return <Ionicons name={iconName} color={color} size={size}/>
         }
       })}
     >
      <Tab.Screen name={ScreenName.Home} component={Home}/>
       <Tab.Screen name={ScreenName.Cart} component={Cart}/>
       <Tab.Screen name={ScreenName.User} component={User}/>
     </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
   tabBar:{
     backgroundColor: "#000",
      borderTopStartRadius:25,
     borderTopRightRadius:25
   }
})
export default TabScreen;
