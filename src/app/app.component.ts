import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DebounchSearchComponent } from "./debounch-search/debounch-search.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, DebounchSearchComponent]
})
export class AppComponent {
  placeholder: string = 'Search';
  searchTerm: string = '';
  update(value: string) {
     alert(value);
  }
}
