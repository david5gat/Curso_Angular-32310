import { TestBed } from '@angular/core/testing';

import { EscuelaLoginService } from './escuela-login.service';

describe('EscuelaLoginService', () => {
  let service: EscuelaLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscuelaLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
