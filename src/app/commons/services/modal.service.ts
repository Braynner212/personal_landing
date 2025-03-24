import { ApplicationRef, ComponentRef, createComponent, Injectable, Injector } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalRef?: ComponentRef<ModalComponent>;

  constructor(private injector: Injector, private appRef: ApplicationRef) {}

  open(config: { message: string; type?: 'success' | 'error' | 'loading' }) {
    if (this.modalRef) return;

    this.modalRef = createComponent(ModalComponent, {
      environmentInjector: this.appRef.injector,
      elementInjector: this.injector,
    });

    this.modalRef.instance.message = config.message;
    this.modalRef.instance.type = config.type || 'success';
    this.modalRef.instance.closeEvent.subscribe(() => this.close());

    document.body.appendChild(this.modalRef.location.nativeElement);
    this.appRef.attachView(this.modalRef.hostView);
  }

  close() {
    if (this.modalRef) {
      this.appRef.detachView(this.modalRef.hostView);
      this.modalRef.destroy();
      this.modalRef = undefined;
    }
  }
}
