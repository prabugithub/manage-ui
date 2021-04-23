import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  public login(username: string, password: string): Observable<any> {
    const url = environment.baseUrl + environment.login;
    const headers = new HttpHeaders()
   //.set('content-type', 'application/json')
   //.set('Access-Control-Allow-Origin', '*')
   //.set('Access-Control-Allow-Origin', 'http://localhost:8080'); 
    return this.httpClient.post(url, {
      username: username,
      password: password
    },
    {'headers': headers});
  }
}
