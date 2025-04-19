export interface Event {
  id: string;
  name: string;
  date: string;
  image: string;
  location: string;
  locationurl: string;
  pricesrange: string ;
  headliners?: string[];
  performers?: string[];
  category_id: string;
  description: string;
}
