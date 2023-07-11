import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  constructor(private router: Router) {}

  test() {
    this.router.navigateByUrl('/loading-default');
  }
}
