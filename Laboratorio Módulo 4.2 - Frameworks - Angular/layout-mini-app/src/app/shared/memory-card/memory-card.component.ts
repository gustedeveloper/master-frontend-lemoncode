import { Component, Input } from '@angular/core';
import { Memory } from '../../core/memory/memory.model';

@Component({
  selector: 'app-memory-card',
  imports: [],
  templateUrl: './memory-card.component.html',
  styleUrl: './memory-card.component.scss',
})
export class MemoryCardComponent {
  @Input() memory!: Memory;
}
