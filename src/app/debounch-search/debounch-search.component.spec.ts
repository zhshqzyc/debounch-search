import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounchSearchComponent } from './debounch-search.component';

describe('DebounchSearchComponent', () => {
  let component: DebounchSearchComponent;
  let fixture: ComponentFixture<DebounchSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebounchSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebounchSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
