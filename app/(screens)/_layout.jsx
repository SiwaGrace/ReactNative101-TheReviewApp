import { View, Text, Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

const getTitleFromRoute = (routeName) => {
  const titleMap = {
    index: "Review App",
    about: "About Us",
    // contact: "Contact Us",
    // profile: "Your Profile",
    // Add more here as needed
  };

  return titleMap[routeName] || routeName; // fallback to raw route
};

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "red" }}>
      <Drawer
        screenOptions={({ route }) => ({
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            fontFamily: "nunito-bold",
          },
          headerStyle: {
            // backgroundColor: "blue",
          },
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/heart_logo.png")}
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 22 }}>
                {getTitleFromRoute(route.name)}
              </Text>
            </View>
          ),
          headerBackground: () => (
            <Image
              source={require("../../assets/game_bg.png")}
              style={{
                width: "100%",
                height: "100%",
              }}
              resizeMode="cover"
            />
          ),
        })}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Review App",
          }}
        />
        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: "About Us",
            title: "About Us",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
