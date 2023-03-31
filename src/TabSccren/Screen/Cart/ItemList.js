import React, { useCallback, useMemo } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import { increaseQuantity, removeItem,decreaseQuantity } from "../../../store/features/CartSlice";
const ItemList = ({ item,totalCartPrice }) => {
  totalCartPrice += item.price
  const dispatch = useDispatch()
  const deleteItem = useCallback((id)=>{
      dispatch(removeItem(id))
  },[item]);
  const  increaseItemQuantity = useCallback((id)=>{
    dispatch(increaseQuantity(id))
  },[item]);
  const  decreaseItemQuantity = useCallback((id)=>{
     dispatch(decreaseQuantity(id))
  },[item]);
  const totalPrice = useMemo(()=>{
    return item.price * item.quantity
  },[item]);
  return (
    <View style={styles.item}>
      <Image source={item.images} style={styles.images} />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name.substring(0, 25)}..</Text>
        <View style={styles.color_block}>
          <Text style={styles.color_title}>Color:</Text>
          <View style={[styles.color, { backgroundColor: item.color }]}></View>
        </View>
        <View style={styles.top_block}>
          <Text style={styles.price}>${totalPrice}.00</Text>
          <View style={styles.btn_block}>
            <TouchableOpacity style={styles.btn} onPress={()=> decreaseItemQuantity(item.id)}>
              <Text style={{color:'#000'}}>-</Text>
            </TouchableOpacity>
            <Text style={{color:'#000',fontSize:scale(16)}}>{item.quantity}</Text>
            <TouchableOpacity style={styles.btn} onPress={()=>increaseItemQuantity(item.id)}>
              <Text style={{color:'#000'}}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=> deleteItem(item.id)}>
              <MaterialIcons name={'delete'} color={'red'} size={16}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: "row",
    marginTop: scale(15),
  },
  images: {
    width: scale(120),
    height: verticalScale(120),
  },
  content: {
    paddingLeft: scale(13),
    paddingVertical: verticalScale(16),
  },
  name: {
    color: "#000",
    fontSize: scale(14),
    fontWeight: "500",
  },
  color_block: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  color_title: {
    color: "#000",
    fontSize: scale(16),
    fontWeight: "600",
  },
  color: {
    width: scale(30),
    height: verticalScale(10),
    marginTop: verticalScale(3),
    marginRight: scale(2),
  },
  price:{
    color:'blue',
    fontWeight:'600',
    fontSize:scale(16)
  },
  top_block: {
    flexDirection: "row",
    justifyContent:'space-between',
    marginTop: verticalScale(12),
  },
  btn_block:{
   flexDirection:'row',
    justifyContent:'space-around'
  },
  btn:{
    width:scale(20),
    height:verticalScale(20),
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:scale(4)
  }
});
export default ItemList;
