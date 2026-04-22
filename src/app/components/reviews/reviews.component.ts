import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  activeIndex = 1;

  reviewers= [
    {
      name: 'Vasif Eyvazov',
      role: 'Şöbə müdiri - Təhsil Nazirliyi',
      image: 'https://i.pravatar.cc/80?img=11',
      quote: 'Zəfər Olimpiadası gənclərimizin elmi potensialının üzə çıxarılması üçün önəmli təşəbbüsdür. Bu layihədə dövlət qurumları ilə əməkdaşlıq etməkdən məmnunuq.'
    },
    {
      name: 'Anar Mehdiyev',
      role: 'Departament direktoru - Dövlət Agentliyi',
      image: 'https://i.pravatar.cc/80?img=52',
      quote: 'Zəfər Olimpiadası gənclərimizin elmi potensialının üzə çıxarılması üçün önəmli təşəbbüsdür. Bu proyektdə dövlət qurumları ilə əməkdaşlıq etməkdən məmnunuq və nəticələrinin uğurlu olacağına inanırıq.'
    },
    {
      name: 'Yusif Axundov',
      role: 'Akademik katib - Milli Elmlər Akademiyası',
      image: 'https://i.pravatar.cc/80?img=33',
      quote: 'Zəfər Olimpiadası gənclərimizin elmi potensialının üzə çıxarılması üçün önəmli təşəbbüsdür. Bu layihəni dəstəkləyirik.'
    },
  ];

  setActive(i: number): void {
    this.activeIndex = i;
  }
}