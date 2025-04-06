import React, { useEffect } from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ExploreWeather from "./ExploreWeather";
import WeatherData from "./WeatherData";
import { useGetWeatherDataQuery } from "@/queries/weather";
import WeatherInfoError from "./WeatherInfoError";
import WeatherInfoLoader from "./WeatherInfoLoader";
import OfflineWeatherData from "./OfflineWeatherData";

interface WeatherInfoProps {
  search: string;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ search }) => {
  const { isConnected } = useNetInfo();

  const { data, isLoading, error, isRefetching, refetch } =
    useGetWeatherDataQuery(search, !!search || (isConnected ?? false));

  useEffect(() => {
    if (data) {
      AsyncStorage.setItem("last-search-weather-data", JSON.stringify(data));
    }
  }, [data]);

  if (!isConnected) {
    return <OfflineWeatherData />;
  }

  if (!search) {
    return <ExploreWeather />;
  }

  if (isLoading) {
    return <WeatherInfoLoader />;
  }

  if (error || !data) {
    return <WeatherInfoError error={error} search={search} />;
  }

  return (
    <WeatherData data={data} isRefetching={isRefetching} refetch={refetch} />
  );
};

export default WeatherInfo;
