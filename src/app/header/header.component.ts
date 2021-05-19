import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() headerSelection = new EventEmitter<string>();
  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  onRecipesClick(){
    this.headerSelection.emit("Recipe");
  }

  onShoppingListClick(){
    this.headerSelection.emit("ShoppingList");
  }

}
