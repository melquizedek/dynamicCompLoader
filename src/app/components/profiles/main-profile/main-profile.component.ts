import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})
export class MainProfileComponent implements OnInit {

  data: any = null;
  
  constructor() { }

  ngOnInit() {
      console.log('MainProfile:data -> ', this.data);
  }

}
