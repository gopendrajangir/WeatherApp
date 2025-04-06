import React from "react";

import Box from "@/components/ui/Box";
import { ws } from "@/utils/size";
import useThemeColors from "@/hooks/useThemeColors";
import hexToRgba from "@/utils/hexToRgba";
import MiniCard from "./MiniCard";
import { WeatherDataResponse } from "@/types/responses";

interface MinorDetailsProps {
  data: WeatherDataResponse;
}

const MinorDetails: React.FC<MinorDetailsProps> = ({ data }) => {
  const colors = useThemeColors();

  const {
    currentConditions: { feelslike, windspeed, humidity, precip },
  } = data;

  return (
    <Box
      p={ws(16)}
      px={ws(24)}
      bg={hexToRgba(colors.neutral100, 0.2)}
      borderRadius={ws(12)}
      mt={ws(20)}
    >
      <Box flexDirection="row" justifyContent="space-between">
        <MiniCard
          id="feels-like"
          title="Feels Like"
          value={feelslike.toString()}
        />
        <MiniCard id="wind" title="Wind" value={`${windspeed} mi/h`} />
      </Box>
      <Box flexDirection="row" justifyContent="space-between" mt={ws(16)}>
        <MiniCard
          id="precipitation"
          title="Precipitation"
          value={precip ? precip.toString() : "0"}
        />
        <MiniCard id="humidity" title="Humidity" value={`${humidity}%`} />
      </Box>
    </Box>
  );
};

export default MinorDetails;
