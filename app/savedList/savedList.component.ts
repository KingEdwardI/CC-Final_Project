import { Component } from "@angular/core";
import { SavedListService } from "./savedList.service";

@Component ({
  selector: "saved",
  templateUrl: "../../html/savedlist.html",
  styleUrls: ["app/css/saved.css"]
})
export class SavedListComponent {

  constructor(private savedListService: SavedListService){}

}

