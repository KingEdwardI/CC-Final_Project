import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ListViewService } from "./list-view.service";


@Component ({
  selector: 'list-item',
  templateUrl: "../../html/list-item.html",
  styleUrls: ["app/css/list-item.css"]

})

export class ListItemComponent {
  
  @Input("item") item;
  @Output() deleteItem = new EventEmitter();

}
