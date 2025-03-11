import { Component, OnInit } from '@angular/core';
import { enterElementAnimation } from '../../utils/animations/animate';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss',
})
export class ChatbotComponent implements OnInit {
  ngOnInit(): void {
    enterElementAnimation('chatbot', 'chatbot_visible');
  }
}
