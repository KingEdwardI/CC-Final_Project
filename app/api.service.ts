import { Http, Headers, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import "rxjs/add/observable/throw";

@Injectable()
export class ApiService {
  
  postHeaders: Headers = new Headers ({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  getHeaders: Headers = new Headers ({
    "Accept": "application/json"
  });

  url: string = "http://localhost:3500";

  constructor(private http: Http) {
  
  }

  private getJSON(response: Response) {
    return response.json();
  }

  private checkForError(response: Response) {
    if (response.status <= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error['response'] = response;
      throw error;
    }
  }

  get(path: string): Observable<any> {
    return this.http.get(
      this.url + path,
      {
       headers: this.getHeaders,
       withCredentials: true
      }
    )
    .map(this.checkForError)
    .catch(err => Observable.throw(err))
    .map(this.getJSON);
  }

  post(path: string, body: string): Observable<any> {
    return this.http.post(
      this.url + path,
      body,
      {
       headers: this.postHeaders,
       withCredentials: true
      }
    )
    .map(this.checkForError)
    .catch(err => Observable.throw(err))
    .map(this.getJSON);
  }

}
