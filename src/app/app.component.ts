import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() projects:any;
  title = 'portfolio';

  constructor(private router: Router) {}


  ngOnInit(): void {
    this.showLoadingAnimation();
    this.loadWebsite();
  }


  /**
   * Load the website, show the loading animation. In case of loading default show the loading default site with a message for the user
   *
   */
  loadWebsite() {
    fetch('http://joerg-schmalgemeier.com/')
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Fehler beim Laden der Website-Inhalte');
      }
    })
    .then((data) => {
      // loading successfully
      setTimeout(() => {
        this.hideLoadingAnimation(); // finished loading, hide loading animation
      }, 2000);
    })
    .catch((error) => {
      this.router.navigateByUrl('/loading-default'); //show loading-default site
    });
  }


  /**
   * Change the CSS properties for the body for the loading animation
   *
   */
  showLoadingAnimation() {
    document.body.classList.add('loading-body');
  }


  /**
   * Remove the CSS properties from the body and hide the loading animation
   *
   */
  hideLoadingAnimation() {
    document.body.classList.remove('loading-body');
    document.getElementById('loader')?.classList.add('d-none');
  }
}
