import { Injectable } from "@angular/core";
import firebase from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import User = firebase.User;
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  public user?: User;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        this.setUser(user);
        localStorage.setItem("user", JSON.stringify(this.user));
      } else {
        localStorage.setItem("user", null);
      }
    });
  }

  async signUp(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async signIn(email: string, password: string): Promise<any> {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signOut(): Promise<any> {
    if (this.isLoggedIn) {
      return await this.afAuth
        .signOut()
        .then(() => {
          this.router.navigate(["/"]);
        })
        .catch((error) => console.log("error logout", error));
    } else {
      this.router.navigate(["/"]);
    }
  }

  setUser(user: User | undefined): void {
    this.user = user;
  }

  get isLoggedIn(): boolean {
    if (this.user !== undefined) {
      return true;
    }
    return false;
  }
}
