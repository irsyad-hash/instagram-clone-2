import * as SplashScreen from "expo-splash-screen";
import { config } from "@tamagui/config/v3";
import { useFonts } from "expo-font";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createTamagui, ScrollView, TamaguiProvider } from "tamagui";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header/Header";
import Stories from "./src/components/Stories/Stories";
import Feeds from "./src/components/Feeds";

SplashScreen.preventAutoHideAsync();

const tamaguiConfig = createTamagui(config);
const App = () => {
  // @ts-ignore
  const [fontsLoaded, fontsError] = useFonts({
    // @ts-ignore
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    // @ts-ignore
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    // @ts-ignore
    "StyleScript-Regular": require("./assets/fonts/ttf/StyleScript-Regular.ttf"),
  });

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onLayoutRootView = async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  const ContentComponent = () => {
    return (
      <>
        <Header />
        <Stories />
        <Feeds />
      </>
    );
  };

  const onRefresh = () => {
    console.log(" App: onRefresh");
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  if (!fontsLoaded) {
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TamaguiProvider config={tamaguiConfig}>
        <StatusBar style="light" backgroundColor="black" />
        <FlatList
          data={[{}]}
          renderItem={ContentComponent}
          contentContainerStyle={{
            justifyContent: "flex-start",
            // flex: 1,
            backgroundColor: "white",
          }}
          onLayout={onLayoutRootView}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }
        />
      </TamaguiProvider>
    </SafeAreaView>
  );
};

export default App;
