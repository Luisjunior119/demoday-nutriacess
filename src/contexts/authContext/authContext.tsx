import { createContext, useState } from "react";
import { IAuthContext, IAuthContextProvider, TEsp, TUser } from "./authContext.types";
import { getEsp, getUser, signIn, signInUser, signUpUser } from "../../services/authService/authService";

export const AuthContext = createContext({} as IAuthContext);

export function AuthContextProvider({ children }: IAuthContextProvider) {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({} as TUser);
  const [useresp, setEsp] = useState({} as TEsp);

  function SignUpUser(userParam: TUser) {
    signUpUser(userParam);
    const userResponse = getUser();
    setUser(userResponse);
    setIsLogged(true);
  }

  function SignInUser(userParam: any) {
    signInUser(userParam);
    const userResponse = getUser();
    setUser(userResponse);
    setIsLogged(true);
  }

  function signInEsp(espParam: TEsp) {
    signIn(espParam);
    const espResponse = getEsp();
    setEsp(espResponse);
    setIsLogged(true);
  }

  return (
    <AuthContext.Provider value={{ user, isLogged, SignUpUser, SignInUser, useresp, signInEsp }}>
      {children}
    </AuthContext.Provider>
  );
}
