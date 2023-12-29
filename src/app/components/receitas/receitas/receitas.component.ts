import { Component, Input, Output, ViewChild } from '@angular/core';
import { PeriodicElementReceitas } from '../../../interfaces/periodic-elements-receitas';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CadastroReceitasComponent } from '../cadastro-receitas/cadastro-receitas.component';
import { ReceitasService } from '../../../services/receitas.service';
import { Inject } from '@angular/core';
import { MonthsElements } from '../../../interfaces/months-elements';
import { ValoresReceitasComponent } from '../valores-receitas/valores-receitas/valores-receitas.component';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrl: './receitas.component.css',
  providers: [ReceitasService],
})
export class ReceitasComponent {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  dataSource!: PeriodicElementReceitas[];
  displayedColumns: string[] = ['Nome', 'Tipo', 'action'];

  constructor(
    public dialog: MatDialog,
    public receitasService: ReceitasService
  ) {
    this.receitasService
      .getReceitas()
      .subscribe((data: PeriodicElementReceitas[]) => {
        this.dataSource = data;
      });
  }

  abrirTelaCadastro(element: PeriodicElementReceitas | null): void {
    // console.log(element?.id);
    const dialogRef = this.dialog.open(CadastroReceitasComponent, {
      data:
        element === null
          ? {
              id: '',
              descricao: '',
              tipo: '',
            }
          : {
              id: element.id,
              descricao: element.descricao,
              tipo: element.tipo,
            },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
        return result;
      }
      console.log(result);
      this.receitasService.createReceita(result).subscribe(() => {
        this.dataSource.push(result);
        console.log(this.dataSource);
        this.table.renderRows();
      });
    });
  }

  abrirTelaValores(element: MonthsElements) {
    let id = element;
    console.log(id);
    this.receitasService.getReceitasValores(id).subscribe((datas) => {
     
      const dialogRef = this.dialog.open(ValoresReceitasComponent, {
        data:
          element !== null || undefined || ''
            ? {
                id: element,
                jan: datas.find((it) => it.jan)?.jan
                  ? datas.find((it) => it.jan)?.jan
                  : 0,
                fev: datas.find((it) => it.fev)?.fev
                  ? datas.find((it) => it.fev)?.fev
                  : 0,
                mar: datas.find((it) => it.mar)?.mar
                  ? datas.find((it) => it.mar)?.mar
                  : 0,
                abr: datas.find((it) => it.abr)?.abr
                  ? datas.find((it) => it.abr)?.abr
                  : 0,
                mai: datas.find((it) => it.mai)?.mai
                  ? datas.find((it) => it.mai)?.mai
                  : 0,
                jun: datas.find((it) => it.jun)?.jun
                  ? datas.find((it) => it.jun)?.jun
                  : 0,
                jul: datas.find((it) => it.jul)?.jul
                  ? datas.find((it) => it.jul)?.jul
                  : 0,
                ago: datas.find((it) => it.ago)?.ago
                  ? datas.find((it) => it.ago)?.ago
                  : 0,
                sete: datas.find((it) => it.sete)?.sete
                  ? datas.find((it) => it.sete)?.sete
                  : 0,
                outu: datas.find((it) => it.outu)?.outu
                  ? datas.find((it) => it.outu)?.outu
                  : 0,
                nov: datas.find((it) => it.nov)?.nov
                  ? datas.find((it) => it.nov)?.nov
                  : 0,
                dez: datas.find((it) => it.dez)?.dez
                  ? datas.find((it) => it.dez)?.dez
                  : 0,
              }
            : {
                id: element,
                jan: 0,
                fev: 0,
                mar: 0,
                abr: 0,
                mai: 0,
                jun: 0,
                jul: 0,
                ago: 0,
                sete: 0,
                outu: 0,
                nov: 0,
                dez: 0,
              },
      });
      dialogRef.afterClosed().subscribe((data) => {
        if (data === undefined) {
          return data;
        }
        this.receitasService
          .createReceitasValores(data)
          .subscribe((dados: MonthsElements[]) => {
            console.log(data);
          });
      });
    });
  }
}
