import { Component, Input } from "@angular/core";
import { ListViewService } from "./list-view.service";
  
@Component ({
  selector: 'list-view',
  templateUrl: "../../html/list-view.html"

})

export class ListViewComponent {



  @Input("newList") listTitle;


}
