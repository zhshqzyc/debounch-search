import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-debounch-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './debounch-search.component.html',
  styleUrl: './debounch-search.component.scss'
})
export class DebounchSearchComponent {
  @Input() public searchTerm = '';
  @Input() public placeholder = 'Search';
  @Output() public searchUpdate = new EventEmitter<string>();
  private searchUpdate$ = new Subject<string>();

  constructor() {
    this.searchUpdate$.pipe(
      debounceTime(250),
      distinctUntilChanged(),
    ).subscribe(value => {
      this.searchUpdate.emit(value);
    });
  }

  public updateSearchTerm(term: string): void {
    this.searchUpdate$.next(term);
  }
}
