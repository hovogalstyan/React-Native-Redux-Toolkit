import React, { useCallback, useEffect, useState } from "react";
import { TouchableOpacity, View, StyleSheet, Easing } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { verticalScale } from "react-native-size-matters";

const Ratings = ({ numReview,setNumReview }) => {
  const [activeStarNum, setActiveStarNum] = useState(1);
  const starArr = [];
  const ratingsClick = useCallback((index) => {
    if(index === 5 ){
      setNumReview(numReview +1)
    }
    if (index === 1){
      setNumReview(numReview - 1)
    }
    setActiveStarNum(index);
  }, [activeStarNum,starArr]);

  for (let i = 1; i < 6; i++) {
    starArr.push(
      <TouchableOpacity key={i} onPress={() => ratingsClick(i)}>
        <View>
          <Star filled={i <= activeStarNum ? true : false} />
        </View>
      </TouchableOpacity>,
    );
  }
  ;
  return (
    <View style={styles.container}>
      {starArr}
    </View>
  );
};
const Star = ({ filled }) => {
  return (
    <FontAwesome name={filled === true ? "star" : "star-o"}
                 color={"blue"} size={24}
                 style={{ marginHorizontal: verticalScale(2) }}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

  },
});
export default Ratings;
