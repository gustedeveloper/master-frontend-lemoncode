import { Injectable } from '@angular/core';
import { Memory } from './memory.model';
import { mockMemories } from './memory.mock';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemoryService {
  private memoriesSubject = new BehaviorSubject<Memory[]>(mockMemories);

  constructor() {}

  getMemories(): Observable<Memory[]> {
    return this.memoriesSubject.asObservable();
  }

  addMemory(memory: Memory) {
    const updated = [...this.memoriesSubject.value, memory];
    this.memoriesSubject.next(updated);
  }

  updateMemory(memory: Memory) {
    const updated = this.memoriesSubject.value.map((m) =>
      m.id === memory.id ? memory : m
    );
    this.memoriesSubject.next(updated);
  }

  deleteMemory(id: string) {
    const updated = this.memoriesSubject.value.filter((m) => m.id !== id);
    this.memoriesSubject.next(updated);
  }
}
