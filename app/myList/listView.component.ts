import { Component, Input } from "@angular/core";
import { ListItemComponent } from "./listItem.component";
import { ListViewService } from "./list-view.service";

@Component ({
  selector: 'list-view',
  templateUrl: "../../html/list-view.html",
  styleUrls: ["app/css/list-view.css"]
})

export class ListViewComponent {

  filteredList = [];

  constructor(private listViewService: ListViewService) {}

  @Input() list;

  deleteList(){
    this.listViewService
    .deleteList(this.list._id).subscribe(function(res){
    });
  }

  new_list_item = '';

  addToList() {
    this.listViewService
    .addToList(this.list._id, this.new_list_item)
    .subscribe(function(res){
      console.log(res);
    });
  }

  filter() {
    if (this.new_list_item !== "") {
      this.filteredList = this.listViewService.artists.filter(function(el){
        return el.indexOf(this.new_list_item) > -1;
      }.bind(this));
    } else {
        this.filteredList = [];
    }
  }
  select(item){
    this.new_list_item = item;
    this.filteredList = [];
  }

}
