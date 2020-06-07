import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@hotel-app/data';

@Component({
  selector: 'hotel-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/').subscribe(t => (this.todos = t));
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}
