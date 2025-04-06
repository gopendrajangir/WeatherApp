import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

const headerSearchContext = createContext("");
const headerSearchSetterContext = createContext<
  Dispatch<SetStateAction<string>>
>(() => {});

const HeaderSearchContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [search, setSearch] = useState("");

  return (
    <headerSearchSetterContext.Provider value={setSearch}>
      <headerSearchContext.Provider value={search}>
        {children}
      </headerSearchContext.Provider>
    </headerSearchSetterContext.Provider>
  );
};

const useHeaderSearchContext = () => {
  return useContext(headerSearchContext);
};

const useHeaderSearchSetterContext = () => {
  return useContext(headerSearchSetterContext);
};

export {
  HeaderSearchContextProvider,
  useHeaderSearchContext,
  useHeaderSearchSetterContext,
};
