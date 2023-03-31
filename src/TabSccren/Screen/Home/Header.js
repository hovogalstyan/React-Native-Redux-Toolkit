import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { UserData } from "../../../store/Select/Select";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const Header = () => {
  const state = useSelector(UserData);
  return (
    <View style={styles.header}>
      <View style={styles.users}>
        <Image source={state.images} style={styles.user_img} />
        <View style={{ paddingRight: moderateScale(8) }}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.name_user}>{state.name} {state.surName}</Text>
        </View>
      </View>
    <TouchableOpacity>
      <Image source={require('./icon/Vector.png')} />
    </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(16),
  },
  users: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  user_img: {
    width: scale(40),
    height: verticalScale(40),
    marginRight: moderateScale(8),
  },
  title: {
    fontWeight: "700",
    fontSize: scale(11),
    lineHeight: moderateScale(12.36),
    color: "#8F8F8F",
  },
  name_user: {
    fontWeight: "600",
    fontSize: scale(18),
    lineHeight: moderateScale(22),
    color: "#535353",
  },
});
export default Header;
