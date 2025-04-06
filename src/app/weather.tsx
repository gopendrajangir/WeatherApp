import { StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import Box from "@/components/ui/Box";
import Header from "@/components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useThemeColors from "@/hooks/useThemeColors";
import {
  HeaderSearchContextProvider,
  useHeaderSearchContext,
} from "@/contexts";
import WeatherInfo from "@/components/WeatherInfo";
import { ws } from "@/utils/size";
import { useNetInfo } from "@react-native-community/netinfo";
import OfflineIndicator from "@/components/OfflineIndicator";

const WeatherMain = () => {
  const { top, bottom } = useSafeAreaInsets();

  const colors = useThemeColors();

  const search = useHeaderSearchContext();

  const {isConnected} = useNetInfo();

  return (
    <Box flex={1} position="relative">
      <LinearGradient
        colors={[colors.bgGradient1, colors.bgGradient2]}
        style={styles.background}
      />
      <Box flex={1} pt={top} pb={bottom}>
        <Header />
        <Box flex={1} mt={ws(12)}>
          <WeatherInfo search={search} />
        </Box>
        {!isConnected && <OfflineIndicator />}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    position: "absolute",
  },
});

const Weather = () => {
  return (
    <HeaderSearchContextProvider>
      <WeatherMain />
    </HeaderSearchContextProvider>
  );
};

export default Weather;
