import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';
import { AsideMenuComponent } from './aside-menu.component';


@NgModule({
  declarations: [AsideMenuComponent],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [AsideMenuComponent]
})
export class AsideMenuModule { }
