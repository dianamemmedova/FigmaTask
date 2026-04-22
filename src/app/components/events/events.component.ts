
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events = [
    { day: '31', month: 'OKTYABR', title: 'Uniserdə "TEKNOFEST"in Azərbaycandakı rəsmi nümayəndəliyinin dəstəyi ilə bu il baş tutacaq..' },
    { day: '12', month: 'OKTYABR', title: '"Almaniyada təqaüdlü təhsil" mövzusunda keçirilən seminarda mövzular müzakirə olundu...' },
    { day: '10', month: 'OKTYABR', title: 'Uniserdə "TEKNOFEST"in Azərbaycandakı rəsmi nümayəndəliyinin dəstəyi ilə bu il baş tutacaq..' },
    { day: '05', month: 'OKTYABR', title: 'Müəllimlər Gününə həsr olunan tədbir keçirilən tədbirə həm tələbələr, həm müəllimlər çıxış et..' },
  ];

  conferences = [
    {
      image: '/photo/event1.png',
      title: '"Mütərəqqi texnologiyalar və innovasiyalar" mövzusunda X Respublika elmi-texniki konfransı',
      large: true
    },
    {
      image: '/photo/event2.png',
      title: '"Mütərəqqi texnologiyalar və innovasiyalar" mövzusunda X...',
      large: false
    },
    {
      image: '/photo/event3.png',
      title: '"Mütərəqqi texnologiyalar və innovasiyalar" mövzusunda X...',
      large: false
    },
  ];
}
