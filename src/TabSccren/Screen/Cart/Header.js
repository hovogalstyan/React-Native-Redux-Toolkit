import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Header = ({ itemSize,nav }) => {
  return (
    <View style={styles.header}>
     <TouchableOpacity onPress={()=> nav.goBack()}>
       <Image source={require('./icon/Back.png')} style={styles.icon}/>
     </TouchableOpacity>
      <Text style={styles.text}>{itemSize} Items</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#535353",
    fontWeight: "580",
    fontSize: scale(15),
    marginVertical:verticalScale(15)
  },
  icon:{
    width:scale(15),
    height:verticalScale(15),
    resizeMode:'cover'
  }
});
export default Header;
