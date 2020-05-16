import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-main-header></app-main-header>
    <app-main-content></app-main-content>
    <app-sidebar-content></app-sidebar-content>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
