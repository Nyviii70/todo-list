import { TestBed } from '@angular/core/testing';

import { ListItemsServices } from './todo-consulting.service';

describe('ListItemsServices', () => {
  let service: ListItemsServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListItemsServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
