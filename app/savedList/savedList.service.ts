import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";

@Injectable()
export class SavedListService {

constructor(private apiService: ApiService) {
  this.getSavedLists().subscribe();
}

saved;

  getSavedLists() {
    return this.apiService.get("/saved")
    .do(function(res) {
      this.saved = res.savedList;
    }.bind(this));
  }

}
