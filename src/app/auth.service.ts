import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticate: boolean = false;

  constructor() { }

  isAuthenticated(): boolean {
    return this.isAuthenticated();
  }

  login(email: string, password:string): boolean {
    
    if(email === 'pedrotadeo@live.com.mx' && password === 'queso123'){
      this.isAuthenticate = true;
      return true;
    } else{
      this.isAuthenticate = false;
      return false;
    }
  
  }

  logout() {
    this.isAuthenticate = false;
  }
}
