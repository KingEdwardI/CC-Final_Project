import { Component } from "@angular/core";
import { SavedListService } from "./savedList.service";

@Component ({
  selector: "saved",
  templateUrl: "../../html/savedlist.html"
})
export class SavedListComponent {

  constructor(private savedListService: SavedListService){}

}
