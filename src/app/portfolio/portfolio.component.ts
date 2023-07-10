import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public projects = [
    { name: 'Join',
      img: 'join-img2.png',
      tec: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categorys.',
      githubLink: 'https://github.com/JorgSchmalgemeier/Join',
      projectLink: 'https://joerg-schmalgemeier.developerakademie.net/join/login.html'
    },
    {
      name: 'El Pollo Loco',
      img: 'pollo-loco-img.png',
      tec: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the crazy hen.',
      githubLink: 'https://github.com/JorgSchmalgemeier/El-Pollo-Loco',
      projectLink: 'https://joerg-schmalgemeier.developerakademie.net/el_pollo_loco/index.html'
    },
    {
      name: 'Portfolio',
      img: 'join-img2.png',
      tec: 'Angular | TypeScript | HTML | CSS',
      description: 'My personal homepage based on Angular and TypeScript.',
      githubLink: 'https://github.com/JorgSchmalgemeier/Portfolio',
      projectLink: 'https://joerg-schmalgemeier.developerakademie.net/portfolio/'
    }
  ];


  ngOnInit(): void {
  }
}
