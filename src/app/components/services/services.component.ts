import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { icon: '📖', label: 'Kitabxana' },
    { icon: '💼', label: 'Karyera və məşğulluq' },
    { icon: '🖥️', label: 'Onlayn imtahan' },
    { icon: '💬', label: 'Onlayn appellyasiya' },
    { icon: '👥', label: 'Elmi - Metodiki Şura' },
    { icon: '🤝', label: 'Könüllü' },
  ];
}