import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  screenWidth = signal<number>(window.innerWidth);
  isTabletMode = signal<boolean>(false);
}
