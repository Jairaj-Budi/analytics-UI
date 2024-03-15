import { Component, OnInit } from '@angular/core';
import { FormulaBuilderService } from './formula-builder.service';
import { tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formula-builder',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formula-builder.component.html',
  styleUrl: './formula-builder.component.scss',
})
export class FormulaBuilderComponent implements OnInit {
  inputText!: string;
  response: any;
  isValid!: boolean;

  ngOnInit(): void {
    this.inputText = '';
    this.response = '';
  }
  constructor(private fbService: FormulaBuilderService) {}

  submitText() {
    this.fbService
      .sendText(this.inputText)
      .pipe(
        tap({
          next: (res: any) => {
            this.isValid = res.success
            this.response = res.message;
          },
          error: (error) => {
            console.error('Error:', error);
          },
        })
      )
      .subscribe();
  }
}
