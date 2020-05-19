import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-main-header></app-main-header>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
