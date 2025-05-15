import { Component, OnInit } from '@angular/core';
import { Memory } from '../../core/memory/memory.model';
import { MemoryService } from '../../core/memory/memory.service';
import { MemoryCardComponent } from '../../shared/memory-card/memory-card.component';
import { NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-gallery',
  imports: [MemoryCardComponent, NgFor, MatGridListModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  memories: Memory[] = [];

  constructor(private memoryService: MemoryService) {}
  ngOnInit(): void {
    this.memoryService.getMemories().subscribe((memories) => {
      this.memories = memories.slice().reverse();
    });
  }

  onDeleteMemory(memory: Memory) {
    this.memoryService.deleteMemory(memory.id);
  }
}
