import {Injectable} from "@angular/core";
import {RequestService} from "./request.service";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({providedIn: 'root'})
export class ProductoService {
  private apiUrl = `${environment.API_URL}/store/rest/api/producto`;


  constructor(private requestService: RequestService) {
  }

  /**
   * Get all productos without category.
   * @param param Json {dato:"base64encoded"}
   */
  getAll(param): Observable<Response> {
    return this.requestService.postRequest(`${this.apiUrl}/todos`, param);
  }
}
