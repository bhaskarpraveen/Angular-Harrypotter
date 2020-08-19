import { Component, OnInit } from '@angular/core';

import { HarryServiceService } from './harry-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Harry-potter';

  characters;
  columnsToDisplay = ['name','role','house','school','bloodStatus','species'];
  constructor(private myService:HarryServiceService){}

  ngOnInit(){
   this.myService.getCharacter().subscribe(ch=>{
     console.log(ch)
     this.characters=ch})
  }
  
}
