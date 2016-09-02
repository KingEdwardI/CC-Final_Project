import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";

@Injectable()
export class ListViewService {
  userList = [];
  artists = [];

  constructor(private apiService: ApiService) {
    this.autoComplete().subscribe();
  }

  loadUserLists() {
    console.log("workde:")
    this.getUserList().subscribe();
  }

  createList(list_title) {
    return this.apiService.post("/create", JSON.stringify({
      list: {
        title: list_title,
        items: []
      }
    })).do(function(res) {
      this.userList.push(res);
    }.bind(this));
  }

  addToList(id, new_list_item) {
    return this.apiService.post("/update", JSON.stringify({
      id: id,
      item: new_list_item
    })).do(function(res) {
      this.pushToList(id, this.userList, res.items[res.items.length - 1]);
    }.bind(this));
  }

  getUserList() {
    return this.apiService.get("/all_my_lists")
    .do(function(res) {
      this.userList = res;
    }.bind(this));
  }

  pushToList(id, orig, new_song) {
    for (let i in orig) {
      if (orig[i]._id === id ) {
          orig[i].items.push(new_song);
      }
    }
  }


    deleteList(list_id){
      return this.apiService.post("/delete_list", JSON.stringify({
        id: list_id
      })).do(function(res) {
        // this.userList.splice(i, 1);
      }.bind(this)); 
    }
 
    autoComplete() {
      return this.apiService.get("/artist_array").do(function(res) {
        this.artists = res;
      }.bind(this));
    }

 /* 
 *   deleteItem(list, index) {
 *     return this.apiService.post("/delete_list", JSON.stringify({
 *       id: i
 *     })).do(function(res) {
 *       this.userList.items = res;
 *     }.bind(this));
 *   }
 */

}
