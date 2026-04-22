import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      image: '/photo/prj1.png',
      title: 'Sabah qrupları layihələrinə yenidən..',
      desc: 'Niyə SABAH? Sürətlə inkişaf edən iqtisadiy..'
    },
    {
      image: '/photo/prj2.png',
      title: '"Erasmus" mübadilə proqramı ilə..',
      desc: 'Erasmus Nədir? Erasmus təhsil, təlim və g..'
    },
    {
      image: '/photo/prj3.png',
      title: 'Sabah qrupları layihəsi',
      desc: 'Niyə SABAH? Sürətlə inkişaf edən iqtisadiy..'
    },
    {
      image: '/photo/prj4.png',
      title: '"Erasmus" mübadilə proqramı ilə..',
      desc: 'Erasmus Nədir? Erasmus təhsil, təlim və g..'
    },
  ];
}