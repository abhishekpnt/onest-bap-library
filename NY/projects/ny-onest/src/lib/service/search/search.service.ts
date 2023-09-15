import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//not used
export class SearchService {
  baseUrl = "https://staging.sunbirded.org/api/content/v1/search?orgdetails=orgName,email";
  // baseUrl = "https://sandbox-bap-client.becknprotocol.io/search";
  default_headers = {
    'Accept': 'application/json',
    'X-Source': 'web',
    'ts': '',
    'X-msgid': '_uuid',
    'X-Request-ID': '_uuid',
    'X-App-Version': '6.0.0',
    'X-Session-ID': 'DataService.sessionId',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };
  constructor(private http: HttpClient) { }
  post(requestParam: any): Observable<any> {
    const httpOptions: any = {
      headers: this.default_headers,
    };
    return this.http.post(this.baseUrl, requestParam, httpOptions);
  }
}
