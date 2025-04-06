import React from "react";

import Box from "./ui/Box";
import AppText from "./ui/AppText";
import { ws } from "@/utils/size";

const OfflineIndicator = () => {
  return (
    <Box bg="#c0392b" alignItems="center" p={ws(6)}>
      <AppText color="#fff">You're offline.</AppText>
    </Box>
  );
};

export default OfflineIndicator;
