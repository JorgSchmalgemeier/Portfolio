import { Component, OnInit, Input } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project: any;
  changeDirection = false;


  ngOnInit(): void {
    AOS.init();
    this.changeCSSDirection();

    document
      .querySelectorAll('img')
      .forEach((img) => img.addEventListener('load', () => AOS.refresh()));
  }


  /**
   * Change the direction (position) of the shown project "El Pollo Loco"
   *
   */
  changeCSSDirection() {
    if (this.project.name == 'El Pollo Loco' || this.project.name == 'Simple CRM') {
      this.changeDirection = true;
    } else {
      this.changeDirection = false;
    }
  }
}
