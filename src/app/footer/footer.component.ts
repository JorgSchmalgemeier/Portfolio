import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  /**
   * Scroll to the top of the website
   *
   */
  scrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });
  }
}
