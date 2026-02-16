import { Component } from '@angular/core';
import { Header } from '../header/header';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimary } from '../btn-primary/btn-primary';

@Component({
  selector: 'app-home',
  imports: [Header, NgOptimizedImage, BtnPrimary],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  callWhatsapp() {
    window.location.href = "https://wa.me/555432914810?text=Ol%C3%A1!%20Venho%20do%20site%20e%20gostaria%20de%20saber%20mais...";
  }
}
