import { Component, Input, Output, EventEmitter } from '@angular/core';
import template from './form-input.component.html';

@Component({
  selector: 'form-input',
  template
})
export default class FormInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter();

  constructor() {
    this.inputId = 'input-' + generateId();
  }

  change(value) {
    this.value = value;
    this.valueChange.emit(value);
  }
}

function generateId() {
  return ++generateId.id;
}
generateId.id = 0;
