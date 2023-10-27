import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { project } from './models/project.model';
import { data } from './models/data.model';
import { skill } from './models/skill.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  switch: string = 'projects';
  isDark: boolean = false;
  projects: project[] = [
    {
      title: 'E-Commerce Platform',
      desc: 'Full stack application using webapi',
      link: 'https://gitlab.codetrade.io/trainingtasks/lavneesh-rajput-training-tasks/-/tree/e-commerce-webapi?ref_type=heads',
    },
    {
      title: 'Scholarship Portal',
      desc: 'MEAN stack application',
      link: 'https://github.com/lavneesh27/scholarship-portal',
    },
  ];
  data: data = {
    "name": "Lavneesh Rajput",
    "designation": "Full Stack Developer",
    "work": 9,
    "project": 10,
    "certificate": 8,
    "whatsappNo": "8949254840",
    "email": "lavirajput376@gmail.com",
    "linkedIn": "https://www.linkedin.com/in/lavneesh-rajput-59165b1aa/",
    "github": "https://github.com/lavneesh27",
    "instagram": "#"
  };
  frontEndSkills: skill[] = [
    {
      "name": "Angular",
      "type": "FrontEnd",
      "proficiency": "Excellent"
    },
    {
      "name": "ReactJS",
      "type": "FrontEnd",
      "proficiency": "Intermediate"
    },
    {
      "name": "CSS",
      "type": "FrontEnd",
      "proficiency": "Intermediate"
    },
    {
      "name": "Bootstrap",
      "type": "FrontEnd",
      "proficiency": "Intermediate"
    },
    {
      "name": "Javascript",
      "type": "FrontEnd",
      "proficiency": "Intermediate"
    },
    {
      "name": "Tailwind",
      "type": "FrontEnd",
      "proficiency": "Intermediate"
    }
  ];
  backEndSkills: skill[] = [
    {
      "name": "NodeJS",
      "type": "BackEnd",
      "proficiency": "Intermediate"
    },
    {
      "name": "MongoDB",
      "type": "BackEnd",
      "proficiency": "Intermediate"
    },
    {
      "name": "ExpressJS",
      "type": "BackEnd",
      "proficiency": "Intermediate"
    },
    {
      "name": "ASP .NET Core",
      "type": "BackEnd",
      "proficiency": "Intermediate"
    },
    {
      "name": "MySQL",
      "type": "BackEnd",
      "proficiency": "Intermediate"
    },
    {
      "name": "Data Structures",
      "type": "BackEnd",
      "proficiency": "Intermediate"
    }
  ];
  constructor() {}

  ngOnInit(): void {
  }
  toggleDark() {
    this.isDark = !this.isDark;
  }
}
