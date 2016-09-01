import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";

@Injectable()
export class SavedListService {

  savedList = [];

  constructor(private apiService: ApiService) {
    this.getSavedLists().subscribe();
  }

  loadSavedLists() {
    this.getSavedLists().subscribe();
  }

  getSavedLists() {
    return this.apiService.get("/saved")
    .do(function(res) {
      for(let i = 0; i < res.savedList.length; i++){
        this.savedList.push(res.savedList[i]);
      }
      console.log(res.savedList);
    }.bind(this));
  }

}
