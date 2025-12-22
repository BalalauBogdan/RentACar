import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Car {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  seats: number;
  transmission: string;
  fuel: string;
  features: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  featuredCars: Car[] = [
    {
      id: 1,
      name: 'Tesla Model 3',
      category: 'Electric',
      image:
        'https://media.drivingelectric.com/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1698686429/drivingelectric/2023-10/Tesla%20Model%203%20facelift%201_awovfc.jpg',
      price: 89,
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Electric',
      features: ['Autopilot', 'Premium Sound', 'GPS'],
    },
    {
      id: 2,
      name: 'BMW X5',
      category: 'SUV',
      image:
        'https://frankfurt.apollo.olxcdn.com/v1/files/xt69261oz8mg1-RO/image;s=1600x832',
      price: 120,
      seats: 7,
      transmission: 'Automatic',
      fuel: 'Diesel',
      features: ['4WD', 'Leather Seats', 'Panoramic Roof'],
    },
    {
      id: 3,
      name: 'Mercedes-Benz C-Class',
      category: 'Luxury',
      image:
        'https://static.automarket.ro/v5/img/auto_resized/db/model/006/341/900050-1000x637-b-ea5374a0.jpg',
      price: 95,
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Petrol',
      features: ['Premium Interior', 'Advanced Safety', 'Bluetooth'],
    },
    {
      id: 4,
      name: 'Toyota Camry',
      category: 'Sedan',
      image:
        'https://di-uploads-pod25.dealerinspire.com/edmarktoyota/uploads/2023/09/2024-toyota-camry-1.jpg',
      price: 65,
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Hybrid',
      features: ['Fuel Efficient', 'Spacious', 'Reliable'],
    },
    {
      id: 5,
      name: 'Audi A4',
      category: 'Luxury',
      image:
        'https://media.drive.com.au/obj/tx_q:70,rs:auto:1920:1080:1/caradvice/private/fe905ab05f2ec68b0c5e1201903d9bd0',
      price: 85,
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Petrol',
      features: ['Virtual Cockpit', 'LED Lights', 'Premium Sound'],
    },
    {
      id: 6,
      name: 'Ford Mustang',
      category: 'Sports',
      image:
        'https://cdn.motor1.com/images/mgl/LRAQQ/s1/2019-ford-mustang-shelby-gt350.webp',
      price: 110,
      seats: 4,
      transmission: 'Manual',
      fuel: 'Petrol',
      features: ['V8 Engine', 'Sport Mode', 'Performance Tires'],
    },
  ];
}
