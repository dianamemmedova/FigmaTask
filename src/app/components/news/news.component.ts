import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NewsItem {
  date: string;
  category?: string;
  title: string;
  excerpt?: string;
  image?: string;
  featured?: boolean;
}

interface Announcement {
  date: string;
  title: string;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  featuredNews: NewsItem = {
    date: '16 Fevral',
    category: 'Universitet xəbərləri',
    title: 'Uniser və AzTU arasında "Gələcəyin Mühəndislik Texnologiyaları" mövzusunda yeni memorandum imzalandı',
    excerpt: 'Mərkəzimiz AzTU ilə əməkdaşlıq çərçivəsində tələbələrin istehsalat təcrübəsini artırmaq məqsədilə innovativ laboratoriya dərslərinə...',
    image: '/assets/images/news-featured.jpg',
    featured: true
  };

  sideNews: NewsItem[] = [
    { date: '16 Fevral', title: '"Sənayedə Yaşıl Enerji keçidi" – Uniser-də..', image: '/photo/news1.png' },
    { date: '12 Fevral', title: 'Uniser Telim Mərkəzinin nümayən..', image: '/photo/news2.png' },
    { date: '1 Fevral',  title: 'Türkiyənin qabaqcıl texnoparkları ilə..', image: '/photo/news3.png' },
    { date: '18 Yanvar', title: '"Sənayedə Yaşıl Enerji keçidi" – Uniser-də', image: '/photo/news4.png'},
  ];

  announcements: Announcement[] = [
    { date: '14 Fevral', title: 'Leyla Həsənovanın "İnformasiya təhlük..' },
    { date: '12 Fevral', title: 'Rauf Əliyevin "Maşınqaytımada avtoma..' },
    { date: '10 Fevral', title: 'Aygün Rəsulovanın rəhbərliyi ilə "Data..' },
    { date: '18 Yanvar', title: 'Leyla Həsənovanın "İnformasiya təhlük..' },
    { date: '14 Yanvar', title: 'Rauf Əliyevin "Maşınqaytımada avtoma..' },
    { date: '10 Yanvar', title: 'Aygün Rəsulovanın rəhbərliyi ilə "Data..' },
  ];
}