import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageDetailComponent } from '../message-detail/message-detail.component';

@Component({
  selector: 'app-store-home',
  standalone: true,
  imports: [FormsModule, CommonModule, MessageDetailComponent],
  templateUrl: './store-home.component.html',
  styleUrl: './store-home.component.scss'
})
export class StoreHomeComponent {

  name: string = '';
  email: string = ''; 
  message: string = '';
  isSubmitted = false;
  messages: Array<any> = [];

  onSubmit(): void{
    this.isSubmitted = true;
    this.messages.push({
      'name': this.name,
      'email': this.email,
      'message': this.messages
    });
    console.log(this.messages);
    
  }
}
