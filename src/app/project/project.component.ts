import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})



export class ProjectComponent implements OnInit {
  @Input() project:any;
  changeDirection = false;



  constructor() {

  }

  ngOnInit(): void {
    if (this.project.name == 'El Pollo Loco') {
      this.changeDirection = true;
    }  else {
        this.changeDirection = false;
      }
    }

  }



