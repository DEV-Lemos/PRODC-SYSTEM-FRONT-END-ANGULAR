import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PeriodicElementReceitas } from '../../../interfaces/periodic-elements-receitas';
import { Tipos } from '../../../interfaces/types-elements';

@Component({
  selector: 'app-cadastro-receitas',
  templateUrl: './cadastro-receitas.component.html',
  styleUrl: './cadastro-receitas.component.css',
})
export class CadastroReceitasComponent {
  element!: PeriodicElementReceitas;
  tipos: Tipos[] = [
    { value: 'leite', viewValue: 'Leite' },
    { value: 'berrezas', viewValue: 'Bezerras' },
    { value: 'novilhas', viewValue: 'Novilhas' },
    { value: 'vacas', viewValue: 'Vacas' },
    { value: 'outros', viewValue: 'Outros' },
    { value: 'maquinasEquipamentos', viewValue: 'Maquinas e Equipamentos' },
    { value: 'servicosTerceiros', viewValue: 'Serviços para Terceiros' },
    { value: 'outrasReceitas', viewValue: 'Outras receitas' },
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: PeriodicElementReceitas,
    public dialogRef: MatDialogRef<CadastroReceitasComponent>
  ) {}

  cancelando() {
    this.dialogRef.close();
  }
}
