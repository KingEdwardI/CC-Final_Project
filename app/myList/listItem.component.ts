import { Component, Input } from "@angular/core";
import { ListViewService } from "./list-view.service";


@Component ({
  selector: 'list-item',
  templateUrl: "../../html/list-item.html"

})

export class ListItemComponent {
  
  @Input("item") item;

}
