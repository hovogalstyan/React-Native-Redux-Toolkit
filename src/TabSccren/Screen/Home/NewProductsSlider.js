import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TouchableNativeFeedback } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import { newProducts } from "../../../store/Select/Select";

const NewProductsSlider = ({ clickProductPage ,clickDescriptionPage}) => {
  const state = useSelector(newProducts);
  const sliceState = state.slice(0, 6);
  return (
    <View style={styles.container}>
      <View style={styles.title_block}>
        <Text style={styles.title}>New Items</Text>
        <TouchableOpacity onPress={() => clickProductPage()}>
          <Text style={styles.title_view}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.slider}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          {
            sliceState.map((item) => (
              <View key={item.id} style={styles.item}>
               <TouchableNativeFeedback onPress={()=>clickDescriptionPage(item)}>
                 <Image source={item.images} style={styles.images} />
               </TouchableNativeFeedback>
              </View>
            ))
          }
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft:moderateScale(16)
  },
  title_block: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight:moderateScale(16)
  },
  title: {
    fontSize: scale(16),
    fontWeight: "600",
    lineHeight: scale(14.6),
    color: "#535353",
  },
  title_view: {
    fontWeight: "500",
    fontSize: scale(14),
    color: "blue",
  },
  slider: {
    width: "100%",
    marginVertical: verticalScale(12),
  },
  item: {
    width: scale(120),
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: scale(5),
    paddingVertical: verticalScale(5),
    marginRight: scale(12),
  },
  images: {
    width: "100%",
    height:verticalScale(120)
  },
});
export default NewProductsSlider;
