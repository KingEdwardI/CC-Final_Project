import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";

@Injectable()
export class FindService {
  lists = [];
  constructor(private apiService: ApiService) {
    this.getAllLists().subscribe();
  }

  getAllLists() {
    return this.apiService.get("/all")
    .do(function(res) {
      this.lists = res;
    }.bind(this));
  }


}
