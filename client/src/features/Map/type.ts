export type MapsEntity = {
  id: number;
  coordinates: number[];
  content: string;
  name: string;
  price: number;
  inn: number;
  ogrn:number;
  adres:string;
  adresCod:number[];
  url:string;
  description:string;
};
export type MapsCardBuy = {
  id: number;
  coordinates: number[];
  content: string;
  name: string;
  price:number;
};
export type Post = {
  adresCod: number[];
  adres: string;
  price: number;
};

export type State = { enti: MapsEntity[]; card: MapsCardBuy[]; errMaps: string | undefined };
