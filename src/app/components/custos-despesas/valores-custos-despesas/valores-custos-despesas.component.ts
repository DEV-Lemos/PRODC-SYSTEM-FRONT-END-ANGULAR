import { Component, Inject } from '@angular/core';
import { MonthsElements } from '../../../interfaces/months-elements';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-valores-custos-despesas',
  templateUrl: './valores-custos-despesas.component.html',
  styleUrl: './valores-custos-despesas.component.css',
})
export class ValoresCustosDespesasComponent {
  data!: MonthsElements;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dataValores: MonthsElements,
    public dialogRef: MatDialogRef<ValoresCustosDespesasComponent>
  ) {}

  cancelando() {
    this.dialogRef.close();
  }
}
