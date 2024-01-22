import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-detail',
  standalone: true,
  imports: [],
  templateUrl: './message-detail.component.html',
  styleUrl: './message-detail.component.scss'
})
export class MessageDetailComponent {
  @Input()
  message: any = {};
}
