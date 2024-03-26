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


  login(): Observable<string>{
    // <string> => data type received from the server
    return this.httpClient.post<string>(`${this.baseUrl}/login`,
    {
      username:'david_r',
      password:'3478*#54'
    }  ).pipe(
      tap( token => this.token = token)
    )

  }
}
