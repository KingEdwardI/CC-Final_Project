import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";

@Injectable()
export class ListViewService {
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

  createList(list_title) {
    return this.apiService.post("/create", JSON.stringify({
      list: {
        title: list_title,
        items: []
      }
    })).do(function(res) {
      this.lists.push(res);
    }.bind(this));
  }

  addToList(i, list_item) {
    return this.apiService.post("/update", JSON.stringify({
      id: i,
      item: list_item
    })).do(function(res) {
      this.overwrite(this.lists[i], res);
    }.bind(this));
  }

  overwrite(orig, newValues) {
    for ( let i in newValues ) {
      if (newValues.hasOwnProperty(i)) {
        orig[i] = newValues[i];
      }
    }
  }

}
