import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from './theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, AsyncPipe],
})
export class AppComponent {
  isDarkTheme$ = this.themeService.isDarkTheme$;

  constructor(private themeService: ThemeService) {}
}
