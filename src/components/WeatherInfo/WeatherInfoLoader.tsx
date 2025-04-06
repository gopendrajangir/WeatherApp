import { ws } from "@/utils/size";
import React from "react";
import { ActivityIndicator } from "react-native";
import Box from "../ui/Box";
import AppText from "../ui/AppText";
import useThemeColors from "@/hooks/useThemeColors";

interface WeatherInfoLoaderProps {
  message?: string;
}

const WeatherInfoLoader: React.FC<WeatherInfoLoaderProps> = ({ message }) => {
  const colors = useThemeColors();
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <ActivityIndicator color={colors.text} />
      <AppText color={colors.text} mt={ws(16)} fontSize={ws(18)}>
        {message ?? "Wait, we are fetching weather data"}
      </AppText>
    </Box>
  );
};

export default WeatherInfoLoader;
