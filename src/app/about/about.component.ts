import { Component, OnInit } from '@angular/core';
import { IsVisibleForScrollDirective } from '../commons/directives/is-visible-for-scroll.directive';
import { listenToMenuItemForAnimation } from '../commons/utils/animations/animate';
import { MenuItemService } from '../commons/services/menu-item.service';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [IsVisibleForScrollDirective],
})
export class AboutComponent implements OnInit {
  constructor(private menuItemService: MenuItemService) {}

  ngOnInit(): void {
    listenToMenuItemForAnimation('about', this.menuItemService);
  }
}
