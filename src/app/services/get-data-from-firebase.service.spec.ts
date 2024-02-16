import { TestBed } from '@angular/core/testing';

import { GetDataFromFirebaseService } from './get-data-from-firebase.service';

describe('GetDataFromFirebaseService', () => {
  let service: GetDataFromFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataFromFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
