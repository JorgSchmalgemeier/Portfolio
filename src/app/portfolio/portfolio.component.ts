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
      link: 'https://github.com/JorgSchmalgemeier/Join'
    },
    {
      name: 'El Pollo Loco',
      img: 'pollo-loco-img.png',
      tec: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the crazy hen.',
      link: 'https://github.com/JorgSchmalgemeier/El-Pollo-Loco'
    },
    {
      name: 'Portfolio',
      img: 'join-img2.png',
      tec: 'Angular | TypeScript | HTML | CSS',
      description: 'My personal homepage based on Angular and TypeScript.',
      link: 'https://github.com/JorgSchmalgemeier/Portfolio'
    }
  ];


  ngOnInit(): void {
  }
}
