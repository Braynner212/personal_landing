import { ApplicationRef, ComponentRef, createComponent, Injectable, Injector } from '@angular/core';
import { PrivacyPolicyComponent } from '../components/privacy-policy/privacy-policy.component';

@Injectable({
  providedIn: 'root'
})
export class PrivacyPolicyService {
  private modalRef?: ComponentRef<PrivacyPolicyComponent>;

  constructor(private injector: Injector, private appRef: ApplicationRef) {}

  open() {
    if (this.modalRef) return;

    this.modalRef = createComponent(PrivacyPolicyComponent, {
      environmentInjector: this.appRef.injector,
      elementInjector: this.injector,
    });

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
