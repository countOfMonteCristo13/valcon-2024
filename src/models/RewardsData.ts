import { ActivationStatus, Country } from "./PropsData";

export type RandomReward = {
  imageReference: string;
  link: string;
  name: string;
  id: number;
};

export type Reward = {
  id: number;
  name: string;
  description: string;
  imageReference: string;
  link: string;
  points: number;
  country: Country;
  status: ActivationStatus;
  creationTime: Date;
};