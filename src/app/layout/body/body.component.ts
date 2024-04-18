import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ContentComponent } from "../content/content.component";

@Component({
    selector: 'app-body',
    standalone: true,
    templateUrl: './body.component.html',
    styleUrl: './body.component.scss',
    imports: [NavbarComponent, ContentComponent]
})
export class BodyComponent {

}
