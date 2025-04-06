import React, { useEffect, useState } from "react";
import { StyleSheet, Image, useColorScheme } from "react-native";
import { isAxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";

import Box from "../ui/Box";
import AppText from "../ui/AppText";
import AppPressable from "../ui/AppPressable";

import useThemeColors from "@/hooks/useThemeColors";
import { ws } from "@/utils/size";

interface WeatherInfoErrorProps {
  error: Error | null;
  search: string;
}

const WeatherInfoError: React.FC<WeatherInfoErrorProps> = ({
  error,
  search,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isAxiosError(error)) {
      if (error.status === 400) {
        setErrorMessage(`Weather data not found for ${search}`);
      }
    }
  }, [error]);

  const colors = useThemeColors();

  const queryClient = useQueryClient();

  const colorScheme = useColorScheme();

  return (
    <Box flex={1} justifyContent="center" alignItems="center" px={ws(24)}>
      <Image
        source={
          colorScheme === "dark"
            ? require("@/assets/images/cloud-error-dark.png")
            : require("@/assets/images/cloud-error-light.png")
        }
        style={styles.image}
      />
      <AppText
        color={colors.text}
        fontSize={ws(16)}
        mt={ws(16)}
        textAlign="center"
      >
        {errorMessage ? errorMessage : "Unknown Error"}!
      </AppText>
      <AppPressable
        style={styles.button}
        p={ws(10)}
        mt={ws(16)}
        bg={colors.text}
        borderRadius={ws(4)}
        onPress={() => {
          queryClient.invalidateQueries({
            queryKey: ["get-weathert-data", search],
          });
        }}
      >
        <AppText>Try Again</AppText>
      </AppPressable>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    height: ws(80),
    width: ws(80),
  },
  button: {
    padding: ws(10),
  },
});

export default WeatherInfoError;
