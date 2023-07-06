import { Component, OnInit, Input } from '@angular/core';
import * as AOS from 'aos';

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
    AOS.init();

    document.querySelectorAll('img')
      .forEach((img) =>
        img.addEventListener('load', () =>
          AOS.refresh()
          )
      );

    if (this.project.name == 'El Pollo Loco') {
      this.changeDirection = true;
    }  else {
        this.changeDirection = false;
      }
    }

  }



