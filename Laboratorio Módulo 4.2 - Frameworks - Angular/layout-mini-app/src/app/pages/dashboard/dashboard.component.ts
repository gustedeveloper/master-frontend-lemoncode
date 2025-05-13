import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { Memory } from '../../core/memory/memory.model';
import { MemoryService } from '../../core/memory/memory.service';
import { MemoryCardComponent } from '../../shared/memory-card/memory-card.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MemoryCardComponent, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  username: string = '';
  memories: Memory[] = [];
  constructor(
    private authService: AuthService,
    private router: Router,
    private memoryService: MemoryService
  ) {}

  ngOnInit(): void {
    this.username = this.authService.getUsername();
    this.memoryService.getMemories().subscribe((memories) => {
      this.memories = memories.slice(-3);
    });
  }
}
