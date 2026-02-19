import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage, FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
    year = new Date().getFullYear();

    faInstagram = faInstagram;
    faLinkedin = faLinkedin;
    faWhatsapp = faWhatsapp;
}
