import { Component, Inject } from '@angular/core';
import { PeriodicElement } from '../../../../interfaces/periodic-element';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro-custos-despesas',
  templateUrl: './cadastro-custos-despesas.component.html',
  styleUrl: './cadastro-custos-despesas.component.css',
})
export class CadastroCustosDespesasComponent {
  element!: PeriodicElement;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: PeriodicElement,
    public dialogRef: MatDialogRef<CadastroCustosDespesasComponent>
  ) {}

  cancelando() {
    this.dialogRef.close();
  }
}
