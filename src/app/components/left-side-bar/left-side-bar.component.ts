import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  Directive,
  HostBinding,
  HostListener } from '@angular/core';


@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})

export class LeftSideBarComponent implements OnInit {
  isLinear = false;
  isClosed =false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  height10 : Number = 340;
  constructor() {}
  panelOpenState = false;
  transofrmStyle = "rotate(0deg)";
  floatValue="right";
  // @Directive({
  //   selector: '[appRainbow]'
  // })

  // @HostBinding('height') height: string;
  ngOnInit() {

  }
  funcClick(){
    this.isClosed = ! this.isClosed;
    console.log(this.isClosed);
    if(this.isClosed == true){
      this.height10=0;
      console.log(this.isClosed);
      this.transofrmStyle ="180";
    }
    else {
      this.height10=340;
      console.log(this.isClosed);
      this.transofrmStyle ="0";
    }
  }

  // widthFunc(){
  //   this.panelOpenState ? true : false ;
  //   this.otherFunc();
  // }
  // otherFunc(){
  //  if(this.panelOpenState == false){
  //   this.height = '10px';
  //  }
  // }


}
