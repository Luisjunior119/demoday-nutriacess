import { createContext, useEffect, useState } from "react";
import funcs from '../../config/funcs';
import {
  getEsp,
  getUser,
} from "../../services/authService/authService";
import {
  IAuthContext,
  IAuthContextProvider,
  TEsp,
  TUser,
} from "./authContext.types";

export const AuthContext = createContext({} as IAuthContext);

export function AuthContextProvider({ children }: IAuthContextProvider) {
  const [ready, setReady] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState<string>('');
  const [user, setUser] = useState({} as TUser);
  const [useresp, setEsp] = useState({} as TEsp);

  function loginUser(user: any, token: string) {
    // Guarda dados no cookie do navegador
    delete user.senha;
    localStorage.setItem("@user", funcs.stringToBase64(JSON.stringify(user)));
    localStorage.setItem("@token", funcs.stringToBase64(JSON.stringify(token)));

    // Seta os dados no contexto
    setUser(user);
    setToken(token);
    setIsLogged(true);
  }

  function logoutUser(user: any, token: string) {
    // Guarda dados no cookie do navegador
    localStorage.removeItem("@user");
    localStorage.removeItem("@token");

    // Seta os dados no contexto
    setUser({ email: '', senha: '', nome_completo: '', nome_social: '', telefone: '' });
    setToken('');
    setIsLogged(false);

    window.location.href = "/"
  }

  function loginEsp(useresp: any, token: string) {
    // Guarda dados no cookie do navegador
    delete useresp.senha;
    localStorage.setItem("@useresp", funcs.stringToBase64(JSON.stringify(useresp)));
    localStorage.setItem("@token", funcs.stringToBase64(JSON.stringify(token)));

    // Seta os dados no contexto
    setUser(useresp);
    setToken(token);
    setIsLogged(true);
  }

  function logoutEsp(useresp: any, token: string) {
    // Guarda dados no cookie do navegador
    localStorage.removeItem("@useresp");
    localStorage.removeItem("@token");

    // Seta os dados no contexto
    setEsp({ email: '', senha: '', nome_completo: '', nome_social: '', telefone: '', crn: '',especialidade: ''});
    setToken('');
    setIsLogged(false);

    window.location.href = "/"
  }

  function signUpUser(userParam: TUser) {
    // signUp(userParam);
    const userResponse = getUser();
    setUser(userResponse);
    setIsLogged(true);
  }

  function signUpEsp(espParam: TEsp) {
    // signIn(espParam);
    const espResponse = getEsp();
    setEsp(espResponse);
    setIsLogged(true);
  }

  function checkData () {
    if (!token) {
      let user  = localStorage.getItem("@user");
      let token = localStorage.getItem("@token");

      if (user && token) {
        setUser(JSON.parse(funcs.base64ToString(user)))
        setToken(funcs.base64ToString(token))
        setIsLogged(true)
        setReady(true)
      } else {
        // Colocar aqui navigate para home
        setReady(true)
      }
    }
  }

  useEffect(() => {
    !ready && checkData()
  }, [ready])

  return (
    <AuthContext.Provider
      value={{ user, token, isLogged, signUpUser, useresp, signUpEsp, loginUser, logoutUser, loginEsp }}
    >
      {ready ? children : <></>}
    </AuthContext.Provider>
  );
}
