import { Component, Input, OnInit } from '@angular/core';
import { Memory } from '../../core/memory/memory.model';

@Component({
  selector: 'app-memory-card',
  imports: [],
  templateUrl: './memory-card.component.html',
  styleUrl: './memory-card.component.scss',
})
export class MemoryCardComponent implements OnInit {
  @Input() memory!: Memory;
  @Input() truncateDescription: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
