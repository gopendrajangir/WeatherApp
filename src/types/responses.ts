export interface WeatherDataResponse {
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  days: {
    datetime: string; // "2025-04-03"
    datetimeEpoch: number; // 1743618600
    tempmax: number; // 97.8
    tempmin: number; // 71.7;
    temp: number; // 85.2;
    feelslikemax: number; // 92.7;
    feelslikemin: number; // 71.7;
    feelslike: number; // 82.8;
    dew: number; // 33.9;
    humidity: number; // 16.8;
    precip?: number | null; // 0.02;
    precipprob: number; // 0;
    precipcover: number; // 12.5;
    preciptype: string[]; // ["rain"];
    snow: number; // 0;
    snowdepth: number; // 0;
    windgust: number; // 21.9;
    windspeed: number; // 18.1;
    winddir: number; // 99.3;
    pressure: number; // 1011.2;
    cloudcover: number; // 41.4;
    visibility: number; // 9.8;
    solarradiation: number; // 277;
    solarenergy: number; // 24;
    uvindex: number; // 10;
    severerisk: number; // 10;
    sunrise: string; // "06:15:26";
    sunriseEpoch: number; // 1743641126;
    sunset: string; // "18:45:07";
    sunsetEpoch: number; // 1743686107;
    moonphase: number; // 0.17;
    conditions: string; // "Partially cloudy";
    description: string; // "Partly cloudy throughout the day.";
    icon: string; // "partly-cloudy-day";
    stations: string[]; // ["VIJP", "remote"];
    source: string; // "comb";
  }[];
  currentConditions: {
    datetime: string; // "23:00:00";
    datetimeEpoch: number; // 1743701400;
    temp: number; // 76.6;
    feelslike: number; // 76.6;
    humidity: number; // 27.69;
    dew: number; // 40.7;
    precip?: number | null; // 0;
    precipprob: number; // 0;
    snow: number; // 0;
    snowdepth: number; // 0;
    preciptype: null;
    windgust: number; // 9.4;
    windspeed: number; // 7.4;
    winddir: number; // 53;
    pressure: number; // 1012;
    visibility: number; // 15;
    cloudcover: number; // 0.6;
    solarradiation: number; // 0;
    solarenergy: number; // 0;
    uvindex: number; // 0;
    severerisk: number; // 10;
    conditions: string; // "Clear";
    icon: string; // "clear-night";
    stations: null;
    source: string; // "fcst";
    sunrise: string; // "06:15:26";
    sunriseEpoch: number; // 1743641126;
    sunset: string; // "18:45:07";
    sunsetEpoch: number; // 1743686107;
    moonphase: number; // 0.17;
  };
}
