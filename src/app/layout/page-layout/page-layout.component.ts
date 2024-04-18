import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { BodyComponent } from "../body/body.component";

@Component({
    selector: 'app-page-layout',
    standalone: true,
    templateUrl: './page-layout.component.html',
    styleUrl: './page-layout.component.scss',
    imports: [SidebarComponent, BodyComponent]
})
export default class PageLayoutComponent {

}
