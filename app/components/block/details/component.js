import { Component } from '@angular/core';
import FormatDatePipe from '../../../pipes/format-date';
import BlockService from '../../../services/block';
import template from './block-details.html';

@Component({
  selector: 'block-details',
  pipes: [FormatDatePipe],
  providers: [BlockService],
  template
})
export default class BlockDetailsComponent {
  constructor(blockService: BlockService) {
    this.blockService = blockService;

    this.rows = [];
  }

  ngOnInit() {
    this.blockService.getDetails()
      .subscribe(rows => this.rows = rows);
  }
}
