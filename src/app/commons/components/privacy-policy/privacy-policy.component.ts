import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
    @Output() closeEvent = new EventEmitter<void>();

    closePrivacyPolicy() {
      this.closeEvent.emit();
    } 
}
