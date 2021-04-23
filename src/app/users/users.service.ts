import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = environment.baseUrl;
  constructor(private httpclient: HttpClient) { }

  public searchUsers(searchText) : Observable<any> {
    const userToken = JSON.parse(sessionStorage.getItem('token'));
    const url = this.baseUrl + 'user?name=' + searchText;
    const options = new HttpHeaders()
    .set('Authorization', userToken.tokenId)
      // .set('content-type', 'application/json')
      // .set('Access-Control-Allow-Origin', '*')
      // .set('Access-Control-Allow-Headers', '*');
    return this.httpclient.get(url, {headers: options})
  }
}
