import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import Ionicons from "react-native-vector-icons/AntDesign";
import BackIcons from "react-native-vector-icons/Ionicons";
const Header = ({ backHomePage }) => {
  const [activeIcon, setActiveIcon] = useState(false);
  return (
    <View style={styles.header}>
      <TouchableOpacity  onPress={() => backHomePage.goBack()}>
        <BackIcons name={'chevron-back-circle-sharp'} color={'#000'} size={30}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveIcon(!activeIcon)}>
        <Ionicons name={activeIcon ? "heart" : "hearto"} color={activeIcon ? "red" : "#000"} size={30} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default Header;
