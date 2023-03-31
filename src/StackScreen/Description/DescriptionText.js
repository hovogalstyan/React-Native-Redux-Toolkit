import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { scale } from "react-native-size-matters";

const DescriptionText = ({ text }) => {
  const [more, setMore] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{more ? text.substring(0, 60) :
        text} <Text onPress={() => setMore(!more)}
        style={styles.moreText}> {more ? "more" : "les"}</Text></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  text: {
    color: "#000",
  },
  moreText: {
    color: "blue",
    fontSize: scale(15),
    fontWeight: "700",
  },
});
export default DescriptionText;
