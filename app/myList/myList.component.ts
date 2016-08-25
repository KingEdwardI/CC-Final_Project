import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FORM_DIRECTIVES } from  "@angular/common";
import { ListViewComponent } from "./listView.component";
import { ListViewService } from "./list-view.service";

@Component ({
  selector: "mylist",
  directives: [ ...FORM_DIRECTIVES, ListViewComponent ],
  templateUrl: "../../html/mylist.html"
})
export class MyListComponent {

  constructor(private listViewService: ListViewService) {}
  
  list_title = '';

  @Input() newList;

  @Output() onUpdate = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  onDeleteClick() {
    this.onDelete.emit();
  }

  createList() {
    this.listViewService
    .createList(this.list_title)
    .subscribe(function(res){
      console.log(res);
    });
  }

}
