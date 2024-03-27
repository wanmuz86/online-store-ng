import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , pipe, tap} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://fakestoreapi.com/auth';
  token = ''
  constructor(private httpClient:HttpClient) { }


  login(username:string,password:string): Observable<string>{
    // <string> => data type received from the server
    return this.httpClient.post<string>(`${this.baseUrl}/login`,
    {
      username:username,
      password:password
    }  ).pipe(
      tap( token => {
        this.token = token;
        window.localStorage.setItem("token",JSON.stringify(token))
      })
    )
  }

  logout(){
    this.token = '';
    window.localStorage.removeItem("token");
  }

  get isLoggedIn(){
    // true if it is not equal to empty is string => user is logged in
    // false if it is equal to empty string => user is not logged in
    return this.token !== '';
  }
}
