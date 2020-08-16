import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import {DataService} from '../../services/data.service';
import data from '../../dataFile/data.json';
import { Subscription } from 'rxjs';
data.primaryMain
   
@Component({
  selector: 'app-body-container',
  templateUrl: './body-container.component.html',
  styleUrls: ['./body-container.component.css']
})
export class BodyContainerComponent implements OnInit {
  popupValueTitle = "";
  newArray = [];
  inputData = "";
  inputNewCampText = "";
  private subscriptions = new Subscription();

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
   this.subscriptions.add(this.dataService.getDataValue.subscribe(dataArray=>{
     
    this.newArray = dataArray;
   }))
  } 
  nameClickFunc(data){
    this.clear();
    this.popupValueTitle = data;

  }
  
  clear(){
    this.inputData = "";
  }
  createNewFunc(){
    document.getElementById("inputNewCampButton").click();
  }

  saveButtonFunc(){
    document.getElementById("inputModalOpen").click();
    this.clearCampFunc();
  }

  AddNewCampFunc(){
    var newData = {"name" : this.inputNewCampText};
    this.newArray.push(newData);
    this.inputNewCampText = "";
  }

  clearCampFunc(){
    this.inputNewCampText = "";
  }
}
