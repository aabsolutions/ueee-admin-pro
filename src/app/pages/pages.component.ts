import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  imports: [ BreadcrumbsComponent, SidebarComponent, HeaderComponent, RouterOutlet ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

}
