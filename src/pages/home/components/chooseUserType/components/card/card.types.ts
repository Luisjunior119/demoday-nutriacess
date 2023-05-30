import { ReactNode } from "react";

export interface ICard {
  icon: ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}
