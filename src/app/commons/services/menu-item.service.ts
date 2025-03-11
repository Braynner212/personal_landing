import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuItemService {
  public currentMenuItemSubject = new Subject<{
    id: string;
    elementRef: HTMLElement;
  }>();
  public currentMenuItem$ = this.currentMenuItemSubject.asObservable();

  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
      this.currentMenuItemSubject.next({ id: elementId, elementRef: element });
      console.log({ id: elementId, elementRef: element });
    }
  }
}
