type WindSpeedData = {
  min: number;
  max: number;
  description: string;
};

const windSpeedData: WindSpeedData[] = [
  {
    min: 0,
    max: 5,
    description: "Calm",
  },
  {
    min: 6,
    max: 10,
    description: "Light Breeze",
  },
  {
    min: 11,
    max: 15,
    description: "Gentle Breeze",
  },
  {
    min: 16,
    max: 20,
    description: "Moderate Breeze",
  },
  {
    min: 21,
    max: 25,
    description: "Fresh Breeze",
  },
  {
    min: 26,
    max: 31,
    description: "Strong Breeze",
  },
  {
    min: 32,
    max: 38,
    description: "Near Gale",
  },
  {
    min: 39,
    max: 46,
    description: "Gale",
  },
  {
    min: 47,
    max: 54,
    description: "Severe Gale",
  },
  {
    min: 55,
    max: Infinity,
    description: "Storm",
  },
];

export const getWindSpeedData = (speed: number) => {
  return (
    windSpeedData.find(({ min, max }) => {
      return speed >= min && speed <= max;
    }) ?? {
      min: -1,
      max: -1,
      description: "unknown",
    }
  );
};

export const getAddressCityState = (name: string) => {
  const splittedName = name.split(", ");

  const city = splittedName[0] ?? "Unknown";
  const state = splittedName[1] ?? "Unknown";
  const country = splittedName[2] ?? "";

  return {
    city,
    stateCountry: state + (country ? ", " + country : ""),
  };
};
