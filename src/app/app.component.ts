import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentToDisplay: string;
  title = 'project';

  onHeaderEvent(headerSelection: string){
    this.componentToDisplay = headerSelection;
  }
}
