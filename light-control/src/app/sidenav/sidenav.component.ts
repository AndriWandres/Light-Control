import { Component, ViewChild, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map, takeUntil } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnDestroy {
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  private readonly destroy$ = new Subject<void>();
  private readonly isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    takeUntil(this.destroy$),
    map((result: BreakpointState) => result.matches)
  );

  constructor(private readonly breakpointObserver: BreakpointObserver) { }

  toggle(): void {
    this.sidenav.toggle();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
