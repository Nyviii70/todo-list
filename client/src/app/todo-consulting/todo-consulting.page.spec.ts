import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoConsultingPage } from './todo-consulting.page';

describe('TodoConsultingPage', () => {
  let component: TodoConsultingPage;
  let fixture: ComponentFixture<TodoConsultingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TodoConsultingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
