import { ReactNode } from "react";

export type TUser = {
  email: string;
  senha: string;
  nome_completo: string;
  nome_social: string;
};

export type LoginUser = {
  email: string;
  senha: string;
}

export type TEsp = {
  crn: string;
  senha: string;
};

export type RegisterEsp = {
  crn: string;
  email: string;
  senha: string;
  nome_completo: string;
  nome_social: string;
};

export interface IAuthContext {
  user: TUser;
  useresp: TEsp;
  isLogged: boolean;
  signInEsp: (useresp: TEsp) => void;
  signUpUser: (user: TUser) => void;
}

export interface IAuthContextProvider {
  children: ReactNode;
}
