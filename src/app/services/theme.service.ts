import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkMode = signal<boolean>(true);
  
  changeTheme(){
    this.darkMode.set(!this.darkMode());
    document.documentElement.setAttribute('data-theme', this.darkMode() ? "dark" : "light");
  }
}
