import { Component } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLinear = false;
  isClosed =false;
  constructor() {}
  panelOpenState = false;
  transofrmStyle = "rotate(0deg)";
  floatValue="right";
  title = 'test-project';

  ngOnInit() {

  }


}
