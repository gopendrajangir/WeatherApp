import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WeatherDataResponse } from "@/types/responses";
import WeatherInfoLoader from "../WeatherInfoLoader";
import WeatherData from "../WeatherData";
import Box from "@/components/ui/Box";
import AppText from "@/components/ui/AppText";
import { ws } from "@/utils/size";

const OfflineWeatherData = () => {
  const [offlineData, setOfflineData] = useState<WeatherDataResponse | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    AsyncStorage.getItem("last-search-weather-data")
      .then((data) => {
        if (data) {
          const weatherData: WeatherDataResponse = JSON.parse(data);
          setOfflineData(weatherData);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <WeatherInfoLoader message="Fetching offline Data" />;
  }

  if (offlineData) {
    return <WeatherData data={offlineData} />;
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <AppText color="#fff" fontSize={ws(18)}>
        No offline data found
      </AppText>
    </Box>
  );
};

export default OfflineWeatherData;
