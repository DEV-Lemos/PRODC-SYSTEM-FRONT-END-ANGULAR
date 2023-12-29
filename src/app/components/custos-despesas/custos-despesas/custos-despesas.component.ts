import { Component, Pipe, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../../../interfaces/periodic-element';
import { CadastroCustosDespesasComponent } from '../cadastro-custos-despesas/cadastro-custos-despesas/cadastro-custos-despesas.component';
import { ValoresCustosDespesasComponent } from '../valores-custos-despesas/valores-custos-despesas.component';
import { MatDialog } from '@angular/material/dialog';
import { MonthsElements } from '../../../interfaces/months-elements';
import { CustosDespesasService } from '../../../services/custos-despesas.service';

@Component({
  selector: 'app-custos-despesas',
  templateUrl: './custos-despesas.component.html',
  styleUrl: './custos-despesas.component.css',
  providers: [CustosDespesasService],
})
export class CustosDespesasComponent {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  dataSource!: PeriodicElement[];
  displayedColumns: string[] = ['Numero', 'Nome', 'action'];

  dataValores!: MonthsElements['id'];

  constructor(
    public dialog: MatDialog,
    public custosDespesasService: CustosDespesasService
  ) {
    this.custosDespesasService
      .getCustosDespesas()
      .subscribe((data: PeriodicElement[]) => {
        this.dataSource = data;
      });
  }

  abrirTelaCadastro(element: PeriodicElement | null): void {
    const dialogRef = this.dialog.open(CadastroCustosDespesasComponent, {
      data:
        element === null
          ? {
              id: '',
              numero: '',
              nome: '',
            }
          : {
              id: element.id,
              numero: element.numero,
              nome: element.nome,
            },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
        return result;
      }
      console.log(result);
      this.custosDespesasService
        .createCustoDespesa(result)
        .subscribe((data: PeriodicElement[]) => {
          this.dataSource.push(result);
          this.table.renderRows();
        });
    });
  }

  abrirTelaValores(element: MonthsElements) {
    let id = element;
    console.log(id);
    this.custosDespesasService
      .getCustosDespesasValores(id)
      .subscribe((datas: MonthsElements[]) => {
        const dialogRef = this.dialog.open(ValoresCustosDespesasComponent, {
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
        dialogRef.afterClosed().subscribe((data: MonthsElements) => {
          if (data === undefined) {
            return data;
          }
          this.custosDespesasService
            .createCustosDespesasValores(data)
            .subscribe((dados: MonthsElements[]) => {});
        });
      });
  }
}
