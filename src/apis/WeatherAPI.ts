import { WeatherDataResponse } from "@/types/responses";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://weather.visualcrossing.com",
});

class WeatherAPI {
  static async fetchWeatherData({ search }: FetchWeatherDataPayload) {
    const response = await axiosInstance.get<WeatherDataResponse>(
      `VisualCrossingWebServices/rest/services/timeline/${search}`,
      {
        params: {
          unitGroup: "uk",
          key: "823ACHD67Y4MTFKDXLKCFBEE2",
          contentType: "json",
          include: "current",
          iconSet: "icons2",
        },
      }
    );

    return response.data;
  }
}

export default WeatherAPI;
