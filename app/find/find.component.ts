import { Component, Input, OnChanges, SimpleChange } from "@angular/core";
import { FindService } from "./find.service";
import { ListViewService } from "../myList/list-view.service";

@Component({
  selector: "find",
  templateUrl: '../../html/find.html'
})
export class FindComponent {

  @Input('item') obj;

  constructor(private listViewService: ListViewService,
              private findService: FindService
             ) {}

  saveList() {
    this.findService
    .saveList(this.listViewService.lists[0])
    .subscribe(function(res){
      console.log(res);
    }.bind(this));

  }
}
