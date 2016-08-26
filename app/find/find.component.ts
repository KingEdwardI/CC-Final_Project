import { Component, Input, OnChanges, SimpleChange } from "@angular/core";
import { FindService } from "./find.service";
import { ListViewService } from "../myList/list-view.service";

@Component({
  selector: "find",
  templateUrl: '../../html/find.html'
})
export class FindComponent {

  @Input() lists: Object;

  constructor(private listViewService: ListViewService) {}
}
