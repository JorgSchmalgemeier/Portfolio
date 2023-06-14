import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  //skills = ['Angular'];
  skills = [
    {img: 'angular-icon.png', name: 'Angular'},
    {img: 'typescript-icon.png', name: 'TypeScript'},
    {img: 'javascript-icon.png', name: 'JavaScript'},
    {img: 'html-icon.png', name: 'HTML'},
    {img: 'firebase-icon.png', name: 'Firebase'},
    {img: 'git-icon.png', name: 'GIT'},
    {img: 'css-icon.png', name: 'CSS'},
    {img: 'api-icon.png', name: 'Rest-Api'},
    {img: 'scrum-icon.png', name: 'Scrum'},
    {img: 'material-icon.png', name: 'Material design'}
  ];
}
