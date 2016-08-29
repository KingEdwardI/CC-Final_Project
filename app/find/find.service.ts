import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";

@Injectable()
export class FindService {
  lists = [];
  saved = [];

  constructor(private apiService: ApiService) {
    this.getAllLists().subscribe();
  }

  save() {
    return this.apiService.post("/saved", JSON.stringify({
      saved: this.lists
    })).do(function(res) {
      this.saved.push(res);
    }.bind(this));
  }

  getAllLists() {
    return this.apiService.get("/all")
    .do(function(res) {
      this.lists = res;
    }.bind(this));
  }


}
