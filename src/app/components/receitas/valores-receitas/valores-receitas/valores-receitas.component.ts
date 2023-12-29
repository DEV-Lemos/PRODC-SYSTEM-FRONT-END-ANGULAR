import { Component } from '@angular/core';
import { MonthsElements } from '../../../../interfaces/months-elements';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-valores-receitas',
  templateUrl: './valores-receitas.component.html',
  styleUrl: './valores-receitas.component.css',
})
export class ValoresReceitasComponent {
  data!: MonthsElements;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dataValores: MonthsElements,
    public dialogRef: MatDialogRef<ValoresReceitasComponent>
  ) {}

  cancelando() {
    this.dialogRef.close();
  }
}
