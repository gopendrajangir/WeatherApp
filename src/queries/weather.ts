import WeatherAPI from "@/apis/WeatherAPI";
import { useQuery } from "@tanstack/react-query";

export const useGetWeatherDataQuery = (search?: string, enabled?: boolean) => {
  const queryFn = async () => {
    const response = await WeatherAPI.fetchWeatherData({
      search: search ?? "",
    });
    return response;
  };
  return useQuery({
    queryKey: ["get-weathert-data", search],
    enabled,
    queryFn,
  });
};
