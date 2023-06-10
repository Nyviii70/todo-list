import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateNewListPage } from './create-new-list.page';

describe('CreateNewListPage', () => {
  let component: CreateNewListPage;
  let fixture: ComponentFixture<CreateNewListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateNewListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
