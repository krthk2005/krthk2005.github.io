import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  userData: any;
  constructor(private readonly general: GeneralService){}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.general.getUserData$().subscribe((res)=>{
      this.userData = res;
    });
  }


}
