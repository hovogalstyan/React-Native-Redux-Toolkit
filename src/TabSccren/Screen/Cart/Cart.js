import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { cartData } from "../../../store/Select/Select";
import Header from "./Header";
import ItemList from "./ItemList";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const Cart = ({ navigation }) => {
  const state = useSelector(cartData);
  const [priceTotal, setPrice] = useState()
  let totalCartPrice = 0;
useEffect(()=>{
  state.cart.map((item)=>{
   totalCartPrice += item.price * item.quantity
    setPrice(totalCartPrice)
  })
},[state.cart,totalCartPrice])


  return (
    <SafeAreaView style={styles.container}>
      <Header itemSize={state.cart.length} nav={navigation} />
      <Text style={styles.title}>Shopping Cart</Text>
      <FlatList data={state.cart} renderItem={({ item }) => <ItemList item={item} totalCartPrice={totalCartPrice}/>} />
      <View style={styles.top_block}>
        <Text style={styles.totalPrice}>Total:${priceTotal}</Text>
         <TouchableOpacity style={styles.btn}>
           <Text style={styles.text}>CHECKOUT</Text>
         </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:scale(12),
    paddingTop:moderateScale(20)
  },
  title:{
    color:'#535353',
    fontWeight:'600',
    fontSize:scale(28)
  },
  top_block:{
    width:'100%',
    paddingVertical:verticalScale(10),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  btn:{
    paddingVertical:verticalScale(8),
    paddingHorizontal:scale(16),
    backgroundColor:'blue',
  },
  text:{
    fontWeight:'600',
    fontSize:scale(14),
    color:'#fff'
  },
  totalPrice:{
    color:'blue',
    fontSize:scale(17)
  }
});
export default Cart;
