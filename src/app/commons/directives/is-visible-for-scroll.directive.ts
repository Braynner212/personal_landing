import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';
import { MenuItemService } from '../services/menu-item.service';

@Directive({
  selector: '[appIsVisibleForScroll]',
  standalone: true,
})
export class IsVisibleForScrollDirective implements OnDestroy, AfterViewInit {
  public observer!: IntersectionObserver;
  constructor(
    private element: ElementRef,
    private menuItemService: MenuItemService,
  ) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            this.menuItemService.currentMenuItemSubject.next({
              id: this.element.nativeElement.id,
              elementRef: this.element.nativeElement,
            });
          }
        });
      },
      { threshold: 0.6 },
    );

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
