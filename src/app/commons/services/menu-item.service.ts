import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  public currentMenuItem$ = new BehaviorSubject<string>('home');
  public currentMenuItem = this.currentMenuItem$.asObservable();

  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);

    if(element) {
      element.scrollTo({
        behavior: 'smooth'
      })
      console.log('Scrolling to:', elementId);
      this.currentMenuItem$.next(elementId);
    }
  }
}
