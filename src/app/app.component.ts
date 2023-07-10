import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() projects:any;
  title = 'portfolio';
  //public loading: boolean = true;


  ngOnInit(): void {
    this.showLoadingAnimation();

    fetch('http://localhost:4200')
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
      // Fehler beim Laden

      // Behandle den Fehler
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
