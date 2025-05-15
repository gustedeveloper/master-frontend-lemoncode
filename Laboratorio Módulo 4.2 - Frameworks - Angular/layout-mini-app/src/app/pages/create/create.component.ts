import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MemoryService } from '../../core/memory/memory.service';
import { generateId } from '../../core/utils/id-generator.util';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgFor } from '@angular/common';
import { EMOJIS } from '../../core/utils/emoji.util';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { formatDateToString } from '../../core/utils/date-format.util';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgFor,
    MatSelectModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  EMOJIS = EMOJIS;
  imagePreview: string | null = null;

  constructor(private fb: FormBuilder, private memoryService: MemoryService) {
    this.createForm = this.fb.group({
      title: ['', [Validators.required]],
      date: [null, [Validators.required]],
      description: ['', [Validators.required]],
      emoji: [[], [Validators.required]],
      imageUrl: [''],
    });
  }

  ngOnInit(): void {}

  onEmojiChange(event: MatSelectChange): void {
    const selected = event.value;
    if (selected.length > 3) {
      selected.pop();
      this.createForm.get('emoji')?.setValue(selected);
    }
  }

  onImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        this.createForm.get('imageUrl')?.setValue(this.imagePreview);
      };

      reader.readAsDataURL(file);
    }
  }

  onSubmit(formDirective: FormGroupDirective) {
    if (this.createForm.valid) {
      const { title, date, description, emoji, imageUrl } =
        this.createForm.value;

      const newMemory = {
        id: generateId(),
        title,
        date: formatDateToString(date),
        description,
        emoji: Array.isArray(emoji) ? emoji.join(' ') : emoji,
        imageUrl,
      };
      this.memoryService.addMemory(newMemory);
      formDirective.resetForm();
      this.createForm.reset();
      this.imagePreview = null;
    }
  }
}
