import { Component } from '@angular/core';
import { BtnPrimary } from '../btn-primary/btn-primary';

@Component({
  selector: 'app-cta-section',
  imports: [BtnPrimary],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.scss',
})
export class CtaSection {
  callWhatsapp() {
    window.location.href = "https://wa.me/555432914810?text=Ol%C3%A1!%20Venho%20do%20site%20e%20gostaria%20de%20saber%20mais...";
  }
}
