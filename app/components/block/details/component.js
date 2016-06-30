import { Component } from '@angular/core';
import FormatDatePipe from '../../../pipes/format-date'
import template from './block-details.html';

@Component({
  selector: 'block-details',
  pipes: [FormatDatePipe],
  template
})
export default class BlockDetailsComponent {
  ngOnInit() {
    this.rows = [
      { id: 1, name: 'user',      created: new Date(1437142998061) },
      { id: 2, name: 'admin',     created: new Date(1460152988061) },
      { id: 3, name: 'moderator', created: new Date(1463182978061) }
    ];
  }
}
