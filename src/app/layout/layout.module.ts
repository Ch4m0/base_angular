import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LayoutComponent,
    MainHeaderComponent,
    MainContentComponent,
    SidebarContentComponent
  ],
  imports: [CommonModule, LayoutRoutingModule, MaterialModule]
})
export class LayoutModule {}
