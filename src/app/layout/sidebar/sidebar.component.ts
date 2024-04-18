import { Component, HostListener, inject, signal } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  responsiveService = inject(ResponsiveService);
  
  isOpen = signal<boolean>(true);

  constructor(){
    if(this.responsiveService.screenWidth()<= 849){
      this.responsiveService.isTabletMode.set(true);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.responsiveService.screenWidth.set(window.innerWidth);

    if(this.responsiveService.screenWidth() <= 849 ){
      this.responsiveService.isTabletMode.set(true);
    }
    else{
      this.responsiveService.isTabletMode.set(false);
    }
  }

  resizeNavbar(){
    this.isOpen.set(!this.isOpen());
  }
}
