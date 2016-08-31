import { Component, Input } from "@angular/core";
import { ListItemComponent } from "./listItem.component";
import { ListViewService } from "./list-view.service";

@Component ({
  selector: 'list-view',
  templateUrl: "../../html/list-view.html",
  styleUrls: ["app/css/list-view.css"]
})

export class ListViewComponent {


  constructor(private listViewService: ListViewService) {}

  @Input() list;

  new_list_item = '';
  @Input() newListItem;

  addToList() {
    this.listViewService
    .addToList(this.list._id, this.new_list_item)
    .subscribe(function(res){
      console.log(res);
    });
    
  }
}
