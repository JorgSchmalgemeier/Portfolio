import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() projects:any;
  title = 'portfolio';
  loaded = [0];
  //@ViewChild('loader') loader!: ElementRef;
  loading!: boolean;

  constructor(private router: Router) {}


  ngOnInit(): void {
    this.loadLoadingAmounts();
    console.log(this.loaded[0]);
    if (this.loaded[0] == 0) {
      this.loading = true;
    } else {
      this.loading = false;
    }
    console.log(this.loading);


    if (this.loaded[0] == 0 && this.loading) {
      this.showLoadingAnimation();
      this.loadWebsite();
    }
    this.countLoading();
    //this.hideLoadingAnimation();
  }


  /**
   * This function count the loading acts of the user and save the amount in the session storage (loading animation should showd just once)
   *
   */
  countLoading() {
    this.loaded[0]++;
    let loadingsAsText = JSON.stringify(this.loaded);
    sessionStorage.setItem('loadingActs', loadingsAsText);
  }


  /**
   * This function loads the amount of the loading acts from the session storage
   *
   */
  loadLoadingAmounts() {
    let loadingsAsText = sessionStorage.getItem('loadingActs');
    if (loadingsAsText) {
      this.loaded = JSON.parse(loadingsAsText);
    }
  }


  /**
   * Load the website, show the loading animation. In case of loading default show the loading default site with a message for the user
   *
   */
  loadWebsite() {
    fetch('http://localhost:4200/')
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
    //this.loader.nativeElement.style.display = 'none';
    //this.loader?.nativeElement.classList.add('d-none');
    this.loading = false;
    console.log(this.loading);
    console.log('test');
  }
}
