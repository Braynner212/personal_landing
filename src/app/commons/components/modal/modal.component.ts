import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() message!: string;
  @Input() type: 'success' | 'error' | 'loading' = 'success';
  @Output() closeEvent = new EventEmitter<void>();

  icons: { success: string; error: string } = {
    success: './assets/icons/modal-icons/success-modal.png',
    error: './assets/icons/modal-icons/error-modal.png',
  };


  closeModal() {
    this.closeEvent.emit();
  }


}
