import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsDetailComponent } from './albums-detail.component';

describe('AlbumsDetailComponent', () => {
  let component: AlbumsDetailComponent;
  let fixture: ComponentFixture<AlbumsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
