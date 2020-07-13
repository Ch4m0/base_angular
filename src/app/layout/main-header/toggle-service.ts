import { MatDrawer } from '@angular/material/sidenav';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private matDrawer: MatDrawer;

  setDrawer(drawer: MatDrawer) {
    this.matDrawer = drawer;
  }

  toggle() {
    this.matDrawer.toggle();
  }
}
