import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @ViewChild('draggable') private draggableElement: ElementRef;
  @ViewChild('matHeader') private matHeader : ElementRef;
  public innerWidth: number;
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(window.innerWidth);
  }
  // onResize(event) {
    
  //   if(event.target.innerWidth < 1024){
      
  //     this.draggableElement.nativeElement.style.display='none';
      
  //   }
  //   else{
  //     this.draggableElement.nativeElement.style.display ='block';
  //   }
  // }
  // 

}
