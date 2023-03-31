import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { moderateScale, verticalScale ,scale} from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { getFilterText } from "../../../store/features/ProductSlice";

const categoriesArr = ["Chairs", "Tables", "Sofas", "Lamps", "Pendants"];
const Categories = () => {
  const [active, setActive] = useState(0)
  const dispatch = useDispatch()
  const getCategoriesValue = useCallback(({ item,index })=>{
     setActive(index)
    dispatch(getFilterText(item))
  },[])
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          categoriesArr.map((item, index) => (
            <View key={index}>
              <Text style={styles.text} onPress={()=> getCategoriesValue({ item, index })}>{item}</Text>
              {
                index === active ? <View style={styles.active_line}></View> :null
              }
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft:moderateScale(18),
    marginVertical:verticalScale(19)
  },
  text: {
    color: "#000",
    marginRight: moderateScale(26),
    fontWeight: "600",
    fontSize: 16,
  },
  active_line:{
    width: scale(30),
    height:verticalScale(2),
    backgroundColor:'blue',
    marginTop:verticalScale(4),
    marginLeft:moderateScale(2)
  }
});
export default Categories;
