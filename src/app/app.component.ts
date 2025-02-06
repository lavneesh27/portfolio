import { Component, OnInit } from '@angular/core';
import { DataService } from './models/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  switch: string = 'projects';
  isDark: boolean = false;
  projects = this.dataService.projects;
  data = this.dataService.data;
  frontEndSkills = this.dataService.frontEndSkills;
  backEndSkills = this.dataService.backEndSkills;
  constructor(private dataService:DataService) {}

  ngOnInit(): void {
  }
  toggleDark() {
    // this.cardHoverStates[index] = !this.cardHoverStates[index];
  }
}
