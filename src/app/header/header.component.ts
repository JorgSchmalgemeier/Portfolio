import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private elementRef:ElementRef) {}

  @ViewChild('menu_checkbox') menu_checkbox:any;
  mobileMenu = false;


  showMobileMenu() {
    if (this.mobileMenu) {
      this.mobileMenu = false;
      document.body.style.overflowY = 'unset';
    }
    else if (!this.mobileMenu) {
      this.mobileMenu = true;
      document.body.style.overflowY = 'hidden';
    }
  }


  closeMobileMenu() {
    this.mobileMenu = false;
    document.body.style.overflowY = 'unset';
  }
}
