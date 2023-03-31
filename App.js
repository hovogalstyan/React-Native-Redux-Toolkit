import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenName } from "./src/ScreenName/ScreenName";
import TabScreen from "./src/TabSccren/TabScreen";
import ProductAllScreen from "./src/StackScreen/ProductAll/ProductAllScreen";
import Description from "./src/StackScreen/Description/Description";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenName.Tab}>
        <Stack.Screen options={{ headerShown: false }} name={ScreenName.Tab} component={TabScreen} />
        <Stack.Screen name={ScreenName.SearchScreen} options={{
          headerShown: false,
        }} component={ProductAllScreen} />
        <Stack.Screen name={ScreenName.Description} options={{
          headerShown: false,
        }} component={Description} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
