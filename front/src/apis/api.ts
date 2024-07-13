import {useQuery} from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_APP_OPEN_API_ENCODING_KEY;
const apis = {
  fetchRaceOutline: useQuery({
    queryKey: ["raceOutline"],
    queryFn: async () => {},
  }),
};
