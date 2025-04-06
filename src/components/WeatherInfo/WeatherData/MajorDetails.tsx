import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";

import AppText from "@/components/ui/AppText";
import Box from "@/components/ui/Box";
import useThemeColors from "@/hooks/useThemeColors";
import { getAddressCityState } from "@/utils";
import { ws } from "@/utils/size";
import { WeatherDataResponse } from "@/types/responses";

interface MajorDetailsProps {
  data: WeatherDataResponse;
}

const MajorDetails: React.FC<MajorDetailsProps> = ({ data }) => {
  const colors = useThemeColors();

  const name = data.resolvedAddress;

  const { city, stateCountry } = getAddressCityState(name);

  const {currentConditions} = data;

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <Box>
        <Image
          source={require("@/assets/images/weather.png")}
          style={styles.image}
        />
        <AppText
          fontSize={ws(24)}
          fontWeight="500"
          color={colors.heading}
          mt={ws(8)}
        >
          {city}
        </AppText>
        <AppText fontSize={ws(18)} fontWeight="500" color={colors.heading}>
          {stateCountry}
        </AppText>
      </Box>
      <Box alignItems="center">
        <Box flexDirection="row" alignSelf="flex-end">
          <AppText fontSize={ws(60)} fontWeight="500" color={colors.heading}>
            {currentConditions.temp}
          </AppText>
          <Box flexDirection="row" mt={ws(6)}>
            <FontAwesome name="circle-o" size={ws(10)} color={colors.heading} />
            <AppText fontSize={ws(24)} fontWeight="500" color={colors.heading}>
              C
            </AppText>
          </Box>
        </Box>
        <AppText fontSize={ws(24)} fontWeight="500" color={colors.heading}>
          {currentConditions.conditions}
        </AppText>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    height: ws(60),
    width: ws(60),
  },
});

export default MajorDetails;
