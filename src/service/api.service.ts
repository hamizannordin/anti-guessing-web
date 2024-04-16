import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  options = this.standardOptions();
  responsePayload: any;

  private standardOptions() {
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    };
  }

  async apiGet(url: string): Promise<any> {
    return new Promise(resolve => {
      this.httpClient.get(url, this.options).subscribe(
        (response: any) => {
          resolve(response);
          //console.log(response);
        }
      );
    })
  }

  async apiPost(url: string, payload: any): Promise<any> {
    return new Promise(resolve => {
      this.httpClient.post(url, payload, this.options).subscribe(
        (response: any) => {
          resolve(response);
          //console.log(response);
        }
      );
    })
  }

  async apiPut(url: string, payload: any): Promise<any> {
    return new Promise(resolve => {
      this.httpClient.put(url, payload, this.options).subscribe(
        (response: any) => {
          resolve(response);
          //console.log(response);
        }
      );
    })
  }

  async apiDelete(url: string): Promise<any> {
    return new Promise(resolve => {
      this.httpClient.delete(url, this.options).subscribe(
        (response: any) => {
          resolve(response);
          //console.log(response);
        }
      );
    })
  }
}
