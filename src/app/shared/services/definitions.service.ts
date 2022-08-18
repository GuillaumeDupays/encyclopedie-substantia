import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { Observable } from 'rxjs';
import { Definition } from '../models/def.model';
import * as dataMock from '../services/MOCK_DATA.json';

@Injectable()
export class DefinitionsService {
  constructor() {}

  getDefinitions(): Observable<Definition[]> {
    return of(dataMock).pipe(tap((data) => data));
  }
}
