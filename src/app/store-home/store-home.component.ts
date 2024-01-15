import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './store-home.component.html',
  styleUrl: './store-home.component.scss'
})
export class StoreHomeComponent {

  name: string = '';
  email: string = ''; 
  message: string = '';
  isSubmitted = false;


  onSubmit(): void{
    this.isSubmitted = true;
  }
}
