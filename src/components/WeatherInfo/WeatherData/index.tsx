import { RefreshControl, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { ws } from "@/utils/size";
import MajorDetails from "./MajorDetails";
import MinorDetails from "./MinorDetails";
import { WeatherDataResponse } from "@/types/responses";

interface WeatherDataProps {
  data: WeatherDataResponse;
  isRefetching?: boolean;
  refetch?: () => void;
}

const WeatherData: React.FC<WeatherDataProps> = ({
  data,
  isRefetching,
  refetch,
}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        refetch ? (
          <RefreshControl
            refreshing={isRefetching ?? false}
            onRefresh={refetch}
          />
        ) : undefined
      }
    >
      <MajorDetails data={data} />
      <MinorDetails data={data} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: ws(16),
  },
});

export default WeatherData;
