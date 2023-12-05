import { TestBed } from '@angular/core/testing';

import { RequestResponseHandlingInterceptor } from './request-response-handling.interceptor';

describe('RequestResponseHandlingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RequestResponseHandlingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RequestResponseHandlingInterceptor = TestBed.inject(RequestResponseHandlingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
