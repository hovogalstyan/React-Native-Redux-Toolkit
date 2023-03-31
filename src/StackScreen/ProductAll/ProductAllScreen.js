import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Text,
  TouchableNativeFeedback,
} from "react-native";
import { useSelector } from "react-redux";
import { newProducts } from "../../store/Select/Select";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { ScreenName } from "../../ScreenName/ScreenName";

const ProductAllScreen = ({navigation}) => {
  const clickDescriptionPage = useCallback((item)=>{
    navigation.navigate(ScreenName.Description,item)
  },[])
  const product = useSelector(newProducts);
  const [searchText, setSearchText] = useState("");
  const changeText = useCallback((text) => {
    setSearchText(text);
  }, [searchText]);
  const filterData = product.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search_block}>
        <View style={styles.icons_block}>
          <Image source={require("../../TabSccren/Screen/Home/icon/search.png")} />
        </View>
        <TextInput style={styles.inputs}
                   placeholderTextColor={"#000"}
                   placeholder={"Search..."}
                   defaultValue={searchText}
                   onChangeText={changeText}
        />
      </View>
      <View style={styles.product_block}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            filterData.map((item, index) => (
              <View style={styles.item} key={index}>
                <Image source={item.images} style={styles.images} />
                <View style={styles.content}>
                  <Text onPress={()=> clickDescriptionPage(item)} style={styles.name}>{item.name.substring(0,30)}...</Text>
                  <Text style={styles.description}>{item.description.substring(0, 60)}...</Text>
                </View>
              </View>
            ))
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  )
    ;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingVertical: verticalScale(25),
    paddingHorizontal: moderateScale(10),
  },
  search_block: {
    width: "100%",
    height: verticalScale(30),
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons_block: {
    width: scale(35),
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    color: "#000",
  },
  inputs: {
    width: "100%",
    height: verticalScale(60),
    color: "#000",
    fontSize: 16,
  },
  product_block: {
    paddingVertical: verticalScale(10),
  },
  item: {
    width: "100%",
    backgroundColor: "#fff",
    marginVertical: verticalScale(5),
    flexDirection: "row",
    alignItems: "flex-start",
  },
  images: {
    width: scale(100),
    height: verticalScale(80),
  },
  content: {
    width: "70%",
    height: "100%",
    borderLeftWidth: 1,
    borderColor: "#000",
    paddingLeft: moderateScale(3),
  },
  name: {
    color: "blue",
    fontSize: 16,
    fontWeight: "400",
    marginVertical: verticalScale(3),
  },
  description: {
    color: "#000",
  },
});
export default ProductAllScreen;
