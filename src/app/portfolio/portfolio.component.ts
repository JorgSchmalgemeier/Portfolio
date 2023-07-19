import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent {
  public projects = [
    { name: 'Join',
      img: 'join-img2.png',
      tec: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categorys.',
      githubLink: 'https://github.com/JorgSchmalgemeier/Join',
      projectLink: 'https://join.joerg-schmalgemeier.com/'
    },
    {
      name: 'El Pollo Loco',
      img: 'pollo-loco-img.png',
      tec: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the crazy hen.',
      githubLink: 'https://github.com/JorgSchmalgemeier/El-Pollo-Loco',
      projectLink: 'https://el-pollo-loco.joerg-schmalgemeier.com/'
    },
    {
      name: 'Portfolio',
      img: 'portfolio-img1.png',
      tec: 'Angular | TypeScript | HTML | CSS',
      description: 'My personal homepage based on Angular and TypeScript.',
      githubLink: 'https://github.com/JorgSchmalgemeier/Portfolio',
      projectLink: 'https://joerg-schmalgemeier.com/'
    }
  ];
}
