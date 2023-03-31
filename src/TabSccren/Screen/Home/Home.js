import React, { useCallback } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Header from "./Header";
import SearchProducts from "./SearchProducts";
import NewProductsSlider from "./NewProductsSlider";
import { ScreenName } from "../../../ScreenName/ScreenName";
import Categories from "./Categories";
import ProductList from "./ProductList";
import { useDispatch } from "react-redux";

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const clickProductPage = useCallback(() => {
    navigation.navigate(ScreenName.SearchScreen);
  }, []);
  const clickDescriptionPage = useCallback((item) => {
    navigation.navigate(ScreenName.Description, item);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <SearchProducts />
        <NewProductsSlider clickProductPage={clickProductPage} clickDescriptionPage={clickDescriptionPage} />
        <Categories />
        <ProductList clickDescriptionPage={clickDescriptionPage} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: moderateScale(20),
  },
});
export default Home;
