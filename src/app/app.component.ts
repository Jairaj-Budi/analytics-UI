import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(public route: Router) {}
  ngOnInit(): void {
    this.route.navigate(['/formulae-builder'])
  }
  title = 'analytics_UI';
}
