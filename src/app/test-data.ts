import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let bookDetails = [
      { id: '1001', name: 'Angular by Rajesh Kumar', category: 'Angular', year: '2015' },
      { id: '1002', name: 'Spring Boot by Rama', category: 'Spring', year: '2016' }
    ];
    return { booksSearch: bookDetails };
  }
} 
