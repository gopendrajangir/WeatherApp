import React, { useState } from "react";

import { ws } from "@/utils/size";
import Box from "../ui/Box";
import SearchButton from "./SearchButton";
import SearchBar from "./SearchBar";
import {
  useHeaderSearchContext,
  useHeaderSearchSetterContext,
} from "@/contexts";

const Header = () => {
  const [active, setActive] = useState(false);

  const search = useHeaderSearchContext();
  const setSearch = useHeaderSearchSetterContext();

  return (
    <Box flexDirection="row" position="relative" px={ws(16)}>
      {!active && (
        <SearchButton
          ml="auto"
          onPress={() => {
            setActive(true);
          }}
        />
      )}
      {active && (
        <SearchBar
          onBackPress={() => setActive(false)}
          onSearch={(value) => {
            setSearch(value);
          }}
          defaultValue={search}
        />
      )}
    </Box>
  );
};

export default Header;
