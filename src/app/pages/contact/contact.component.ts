import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactInfo = [
    {
      title: 'Visit Us',
      details: ['Brasovului 7', 'Targu Mures, Mures', 'Romania'],
    },
    {
      title: 'Call Us',
      details: [
        '+40 747 011 754',
        '+40 747 011 755',
        'Mon - Sun: 08:00 - 16:00',
      ],
    },
    {
      title: 'Email Us',
      details: [
        'info@rentacar.ro',
        'support@rentacar.ro',
        'booking@rentacar.ro',
      ],
    },
  ];
}
