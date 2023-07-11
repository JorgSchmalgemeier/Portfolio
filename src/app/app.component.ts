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
  //public loading: boolean = true;

  constructor(private router: Router) {}


  ngOnInit(): void {
    this.showLoadingAnimation();

    fetch('https://joerg-schmalgemeier.developerakademie.net/portfolio/')
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Fehler beim Laden der Website-Inhalte');
      }
    })
    .then((data) => {
      // Erfolgreich geladen
      setTimeout(() => {
        this.hideLoadingAnimation(); // Ladevorgang abgeschlossen, Ladeanimation ausblenden
      }, 2000);
    })
    .catch((error) => {
      this.router.navigateByUrl('/loading-default');
    });
  }


  showLoadingAnimation() {
    document.body.classList.add('loading-body');
  }


  hideLoadingAnimation() {
    document.body.classList.remove('loading-body');
    document.getElementById('loader')?.classList.add('d-none');
    //this.loading = false;
  }
}
