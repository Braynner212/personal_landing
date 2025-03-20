import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFixedTextAreaHeightByMessagesErrors]',
  standalone: true,
})
export class FixedTextAreaHeightByMessagesErrorsDirective implements AfterViewInit, OnDestroy {
  private observer!: MutationObserver;
  private textareaBaseHeight = 180;

  constructor( private element: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (!(mutation.target as HTMLElement).matches('.contact__wrapper-input, .contact__wrapper-textarea')) return;

        if(mutation.addedNodes.length !== 0){
          this.fixedHeight('removeHeight');
        };
        if(mutation.removedNodes.length !== 0){
          this.fixedHeight('addHeight');
        };
      });
    });
    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  fixedHeight( operation: 'addHeight' | 'removeHeight') {
    const textarea = this.element.nativeElement as HTMLTextAreaElement;
    const elementErrorMessages = Array.from(document.querySelectorAll('p.contact__message--error'));
    let height = 0;
    if(operation === 'addHeight') {
      height = textarea.clientHeight + 15;
    }
    if(operation === 'removeHeight') {
      const totalErrorHeight = elementErrorMessages.reduce((sum, p) => sum + p.clientHeight, 0);
      height = this.textareaBaseHeight - totalErrorHeight;
    }

    this.renderer.setStyle(textarea, 'height', `${height}px`);

  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

}
