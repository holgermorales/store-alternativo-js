import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseModel} from "../models/response.model";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private httpHeader: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  constructor(private httpClient: HttpClient) {
  }

  public postRequest(url: string, param: any): Observable<ResponseModel> {
    if (param === null || param === '') {
      return this.httpClient.post<ResponseModel>(url, {headers: this.httpHeader});
    } else {
      param = this.encodeParams(param);
      return this.httpClient.post<ResponseModel>(url, param, {headers: this.httpHeader});
    }
  }

  private encodeParams(param: any) {
    return JSON.stringify({
      dato: window.btoa(encodeURIComponent(JSON.stringify(param)))
    });
  }

}
