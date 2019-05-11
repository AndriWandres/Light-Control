import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menuClick = new EventEmitter<void>(true);

  constructor(private readonly dialog: MatDialog) {}

  openInfoDialog(): void {
    this.dialog.open(InfoDialogComponent, {
      minWidth: '30%'
    });
  }
}
