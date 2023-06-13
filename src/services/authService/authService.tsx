import { api } from "../../config/api";
import { LUser, TEsp, TUser } from "../../contexts/authContext/authContext.types";

export function signUpUser(user: TUser): void {
  localStorage.setItem("@user", JSON.stringify(user));
}

export function signInUser(user: LUser): void {
  api.post('login', {mail: user.mail, password: user.password})
  .then(async resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})
}

export function getUser() {
  const user = localStorage.getItem("@user") as string;
  return JSON.parse(user);
}

export function signIn(useresp: TEsp): void {
  localStorage.setItem("@esp", JSON.stringify(useresp));
}

export function getEsp() {
  const esp = localStorage.getItem("@esp") as string;
  return JSON.parse(esp);
}