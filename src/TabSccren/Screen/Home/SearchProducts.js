import React from "react";
import { View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { moderateScale, verticalScale, scale } from "react-native-size-matters";

const SearchProducts = () => {
  return (
    <View style={styles.search}>
      <View style={styles.from_block}>
        <TextInput style={styles.input} placeholder={"Search here..."} placeholderTextColor={"#8F8F8F"} />
        <TouchableOpacity>
          <Image source={require("./icon/search.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    width: "100%",
    marginVertical: verticalScale(20),
    paddingHorizontal: moderateScale(16),
  },
  from_block: {
    width: "100%",
    height: verticalScale(40),
    backgroundColor: "#EFEBFF",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(14),
  },
  input: {
    width: "78%",
    height: "100%",
  },

});
export default SearchProducts;
