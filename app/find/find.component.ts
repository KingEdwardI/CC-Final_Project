import { Component, Input, OnChanges, SimpleChange } from "@angular/core";
import { FindService } from "./find.service";
import { ListViewService } from "../myList/list-view.service";
import { Observable } from "rxjs/Rx";

@Component({
  selector: "find",
  templateUrl: '../../html/find.html',
  styleUrls: ['app/css/find.css']
})
export class FindComponent {

  constructor( private findService: FindService ) {}

  saveList(index) {
    this.findService
    .saveList(this.findService.lists[index])
    .subscribe(function(res){
      console.log(res);
    }.bind(this));

  }
}
