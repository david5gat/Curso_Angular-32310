import { TestBed } from '@angular/core/testing';

import { EscuelaService } from './escuela_curso.service';

describe('EscuelaserviceService', () => {
  let service: EscuelaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscuelaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
