import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customization',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './customization.component.html',
  styleUrl: './customization.component.css',
})
export class CustomizationComponent {}
