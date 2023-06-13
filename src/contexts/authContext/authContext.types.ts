import { ReactNode } from "react";

export type TUser = {
  email: string;
  password: string;
  name: string;
  socialName: string;
};

export type LUser = {
  mail: string;
  password: string;
};

export type TEsp = {
  crn: string;
  password: string;
};

export interface IAuthContext {
  user: TUser;
  useresp: TEsp;
  isLogged: boolean;
  signInEsp: (useresp: TEsp) => void;
  SignInUser: (user: LUser) => void;
  SignUpUser: (user: TUser) => void;
}

export interface IAuthContextProvider {
  children: ReactNode;
}
