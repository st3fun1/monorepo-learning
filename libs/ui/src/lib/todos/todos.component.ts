import { Component, Input } from '@angular/core';
import { Todo } from '@monorepo-learning/data';

@Component({
  selector: 'monorepo-learning-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  @Input() todos: Todo[] = [];

}
