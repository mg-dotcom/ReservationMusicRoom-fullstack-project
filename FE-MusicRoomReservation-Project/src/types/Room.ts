interface Room {
  roomId: string;
  name: string;
  building: string;
  instruments: string[];
  capacity: {
    min: number;
    max: number;
  };
  features: string[];
}