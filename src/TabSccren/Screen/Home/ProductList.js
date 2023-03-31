import React, { useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../../../store/Select/Select";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { filterProduct } from "../../../store/features/ProductSlice";

const ProductList = ({clickDescriptionPage,clickCartPage}) => {
  const state = useSelector(productsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterProduct());
  }, [state.filterText]);
  return (
    <View style={styles.container}>
      {
        state.data &&
        state.data.map((item, index) => (
          <View style={styles.item} key={index}>
         <TouchableNativeFeedback onPress={()=>clickDescriptionPage(item)}>
           <Image source={item.images} style={styles.images} />
         </TouchableNativeFeedback>
            <View style={styles.content}>
              <View>
                <Text style={styles.name}>{item.name.substring(0, 13)}...</Text>
                <Text style={styles.price}>$ {item.price}.00</Text>
              </View>
            </View>
          </View>
        ))
      }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  item: {
    width: scale(160),
    marginVertical: verticalScale(10),
  },
  images: {
    width: "100%",
    height: verticalScale(164),
    borderTopRightRadius: moderateScale(7),
    borderTopLeftRadius: moderateScale(7),
  },
  content: {
    width: "100%",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#DDDDDD",
    padding: scale(10),
    borderBottomLeftRadius: moderateScale(7),
    borderBottomRightRadius: moderateScale(7),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: scale(12),
    fontWeight: "400",
    color: "#000",
  },
  price: {
    fontWeight: "600",
    fontSize: scale(13),
    color: "#6139FF",
  },
});
export default ProductList;
