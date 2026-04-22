import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  partners = [
  { name: 'Food City Agrocomplex',           image: '/photo/terefdas1.png' },
  { name: 'ADY Azərbaycan Dəmir Yolları',    image: '/photo/terefdas2.png' },
  { name: 'Azərbaycan Respublikası Təhsil',  image: '/photo/terefdas3.png' },
  { name: 'Partner 4',                        image: '/photo/terefdas4.png' },
];

  quickLinks1 = ['Haqqımızda', 'Zəfər Olimpiadası', 'Media', 'Layihələr'];
  quickLinks2 = ['Komissiya və Ekspert üzv', 'Kitabxana', 'Təlim mərkəzi'];
}
