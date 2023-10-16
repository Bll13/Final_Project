export type Maps = {
  coordinates: number[];
  content:string
};

export type State = { maps: Maps[]; errMaps: string| undefined };
