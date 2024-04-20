import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FlexModule} from "@angular/flex-layout";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageComponent, NavbarComponent, FlexModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ice Cream Store';
}
