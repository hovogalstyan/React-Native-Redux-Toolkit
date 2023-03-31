import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Header from "./Header";
import Ratings from "./Ratings";
import { useDispatch } from "react-redux";
import { addToCartItem } from "../../store/features/CartSlice";
import { ScreenName } from "../../ScreenName/ScreenName";
import DescriptionText from "./DescriptionText";
const Description = ({ route, navigation }) => {
  const item = route.params;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [activeColor, setActiveColor] = useState(0);
  const [itemColor, setItemColor] = useState(item.color[0]  );
  const [slidImages, setSlidImages] = useState(item.images);
  const [numReview, setNumReview] = useState(item.review);
  const [itemId, setItemId] = useState(null)
  useEffect(()=>{
    if(item.imgList){
      setItemId(item.imgList[0].id)
    }else {
      setItemId(item.id)
    }
  },[item])
  const getColorNewCart = useCallback(({ item, index }) => {
    setActiveColor(index);
    setItemColor(item)
  }, [activeColor]);
  const editSliderImage = useCallback((item) => {
    setSlidImages(item.imag);
    setItemId(item.id)
  }, [slidImages]);
  const increaseQuantity = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);
  const decreaseQuantity = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }, [quantity]);
  const addToCart = useCallback(() => {
    const cartItem = {
      name:item.name,
      id:itemId,
      quantity,
      color:itemColor,
      images:slidImages,
      price: item.price
    }
    dispatch(addToCartItem(cartItem));
    navigation.navigate(ScreenName.Cart);
  }, [quantity,itemColor,slidImages,itemId]);
  return (
    item &&
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header backHomePage={navigation} />
        <TouchableOpacity style={styles.images_block}>
          <Image source={slidImages} style={styles.slidImage} />
        </TouchableOpacity>
        <View style={styles.slider_item}>
          <ScrollView style={styles.slider} showsHorizontalScrollIndicator={false} horizontal>
            {
              item.imgList &&
              item.imgList.map((item, index) => (
                <TouchableOpacity key={index} style={styles.items} onPress={() => editSliderImage(item)}>
                  <Image source={item.imag} style={styles.item_images} />
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.ratings_block}>
          <Ratings numReview={numReview} setNumReview={setNumReview} />
          <Text style={{ color: "#000" }}> Review({numReview})</Text>
        </View>
        <DescriptionText text={item.description}/>
        <Text style={styles.price_text}>${item.price}.00</Text>
        <View style={styles.color_block}>
          <Text style={styles.title}>Color</Text>
          <View style={styles.color_item}>
            {
              item.color.map((item, index) => (
                <View key={index} style={{
                  width: scale(23),
                  height: verticalScale(23),
                  marginRight: moderateScale(6),
                  alignItems: "center",
                }}>
                  <TouchableOpacity
                    onPress={() => getColorNewCart({ item, index })}
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: item,
                      borderRadius: 5,
                    }}></TouchableOpacity>
                  {activeColor === index ? <View style={{
                    width: "80%",
                    height: 2,
                    backgroundColor: item,
                    marginVertical: verticalScale(4),
                  }}></View> : null}
                </View>
              ))
            }
          </View>
        </View>
        <View style={styles.quantity_block}>
          <TouchableOpacity style={styles.btn} onPress={decreaseQuantity}>
            <Text style={{ color: "#000", fontSize: scale(20) }}>-</Text>
          </TouchableOpacity>
          <Text style={styles.text_number}>{quantity}</Text>
          <TouchableOpacity style={styles.btn} onPress={increaseQuantity}>
            <Text style={{ color: "#000", fontSize: scale(16) }}>+</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.add_to_cart}>
          <Text style={styles.price}>Total : ${item.price * quantity}.00</Text>
          <TouchableOpacity style={styles.cart_btn} onPress={addToCart}>
            <Image source={require("./icon/cart.png")} />
            <Text style={styles.text}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(12),
    paddingTop: verticalScale(18),
  },
  images_block: {
    width: "100%",
    height: verticalScale(334),
    marginVertical: verticalScale(12),
  },
  slider_item: {
    width: "100%",
    alignItems: "center",
  },
  slidImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  items: {
    width: scale(60),
    height: verticalScale(60),
    marginHorizontal: scale(6),
  },
  item_images: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  name: {
    fontWeight: "600",
    fontSize: scale(14),
    marginTop:verticalScale(10),
    color: "#000",
  },
  ratings_block: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: verticalScale(5),
  },
  color_block: {
    width: "100%",
  },
  price_text: {
    fontSize: scale(20),
    fontWeight: "600",
    color: "#6139FF",
  },
  title: {
    fontSize: scale(14),
    fontWeight: "500",
    color: "#535353",
  },
  color_item: {
    width: "100%",
    flexDirection: "row",
    marginVertical: verticalScale(5),
  },
  quantity_block: {
    flexDirection: "row",
    marginVertical: verticalScale(8),
  },
  btn: {
    width: scale(30),
    height: moderateScale(30),
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  text_number: {
    fontSize: scale(20),
    color: "#000",
    marginHorizontal: scale(8),
  },
  add_to_cart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: scale(30),


  },
  price: {
    color: "#535353",
    fontSize: scale(14),
    fontWeight: "500",

  },
  cart_btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(17),
    backgroundColor: "#6139FF",
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: scale(13),
    marginLeft: scale(7.34),
  },
});
export default Description;
