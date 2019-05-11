import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialModule } from '../shared/material.module';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@NgModule({
  declarations: [HeaderComponent, InfoDialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HeaderComponent],
  entryComponents: [InfoDialogComponent]
})
export class HeaderModule { }
