import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private httpHeader: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  constructor(private httpClient: HttpClient) {
  }

  public postRequest(url: string, param: any): Observable<Response> {
    if (param === null || param === '') {
      return this.httpClient.post<Response>(url, {headers: this.httpHeader});
    } else {
      param = this.encodeParams(param);
      return this.httpClient.post<Response>(url, param, {headers: this.httpHeader});
    }
  }

  private encodeParams(param) {
    return JSON.stringify({
      dato: window.btoa(encodeURIComponent(JSON.stringify(param)))
    });
  }

}
