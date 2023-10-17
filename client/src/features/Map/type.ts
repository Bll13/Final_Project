export type MapsEntity = {
  id: number;
  coordinates: number[];
  content: string;
};
export type MapsCardBuy = {
  id: number;
  coordinates: number[];
  content: string;
};
export type Post = {
  adresCod: number[];
  adres: string;
  price: number;
};

export type State = { enti: MapsEntity[]; card: MapsCardBuy[]; errMaps: string | undefined };
