import { FlatList, StyleSheet, Image } from "react-native";
import React from "react";

import Box from "../../ui/Box";
import PlaceCard from "./PlaceCard";

import { ws } from "@/utils/size";
import AppText from "@/components/ui/AppText";
import useThemeColors from "@/hooks/useThemeColors";

const ExploreWeather = () => {
  const places = [
    {
      name: "Jaipur, Rajasthan, India",
      image: require("@/assets/images/cities/jaipur.jpg"),
    },
    {
      name: "Patiala, Punjab, India",
      image: require("@/assets/images/cities/patiala.jpg"),
    },
    {
      name: "New Delhi, India",
      image: require("@/assets/images/cities/new-delhi.jpg"),
    },
    {
      name: "Mumbai, Maharashtra, India",
      image: require("@/assets/images/cities/mumbai.jpg"),
    },
    {
      name: "Bengaluru, Karnataka, India",
      image: require("@/assets/images/cities/bengaluru.jpg"),
    },
    {
      name: "Pune, Maharashtra, India",
      image: require("@/assets/images/cities/pune.jpg"),
    },
  ];

  const colors = useThemeColors();

  return (
    <Box flex={1}>
      <Box flexDirection="row" alignItems="center" px={ws(16)}>
        <AppText
          fontSize={ws(24)}
          pt={ws(4)}
          fontWeight="600"
          color={colors.heading}
        >
          Explore Weather
        </AppText>
        <Image
          source={require("@/assets/images/weather.png")}
          style={styles.cloudImage}
        />
      </Box>

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        data={places}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Box height={ws(16)} />}
        renderItem={({ item }) => {
          return <PlaceCard data={item} />;
        }}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: ws(24),
    paddingHorizontal: ws(16),
    paddingBottom: ws(12),
  },
  cloudImage: {
    height: ws(28),
    width: ws(28),
    marginLeft: ws(12),
  },
});

export default ExploreWeather;
