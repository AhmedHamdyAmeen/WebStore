import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input('selectTitle') selectTitle: string = '';
  @Input('selectData') selectData: string[] = [];

  @Output() selected = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  detectSelected(e: Event) {
    this.selected.emit(e);
  }
}
