import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentLang = 'AZ';
  langs = ['AZ', 'RU', 'EN'];

  navLinks = [
    { label: 'Ana səhifə', path: '/', active: false },
    { label: 'Haqqımızda', path: '/services', active: false },
    { label: 'Zəfər Olimpiadası', path: '/events', active: false },
    { label: 'Media', path: '/news', active: false },
    { label: 'Layihələr', path: '/projects', active: false },
    { label: 'Komissiya və Ekspert üzv', path: '/reviews', active: false },
    { label: 'Kitabxana', path: '/', active: false },
    { label: 'Təlim mərkəzi', path: '/', active: false },
  ];

  menuOpen = false;

toggleMenu() { this.menuOpen = !this.menuOpen; }
setLang(lang: string) { this.currentLang = lang; }

  setActive(index: number): void {
    this.navLinks.forEach((link, i) => {
      link.active = i === index;
    });
  }
}