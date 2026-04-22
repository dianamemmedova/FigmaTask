import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  stats = [
    { value: '1250+', label: 'İştirak edən\nmüəllimlərin sayı' },
    { value: '5',     label: 'Keçirilmiş\nolimpiadalar' },
    { value: '60+',   label: 'Əhatə olunan\nregionlar (rayon/şəhər)' },
    { value: '120',   label: 'Qaliblər\nvə mükafatçılar' },
  ];
}
