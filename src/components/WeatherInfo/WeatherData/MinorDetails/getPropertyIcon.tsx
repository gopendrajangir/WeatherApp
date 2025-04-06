import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { WeatherPropertyId } from "./types";
import { ws } from "@/utils/size";
import React from "react";

const getPropertyIcon = (
  property: WeatherPropertyId,
  size: number = ws(24)
) => {
  switch (property) {
    case "feels-like":
      return <FontAwesome name="thermometer" size={size} />;
    case "wind":
      return <Feather name="wind" size={size} />;
    case "humidity":
      return (
        <SimpleLineIcons
          name="drop"
          size={size}
        />
      );
    case "precipitation":
      return <Feather name="cloud-rain" size={size} />;
  }
};

export default getPropertyIcon;
