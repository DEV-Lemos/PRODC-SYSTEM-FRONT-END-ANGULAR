import { NgModule } from '@angular/core';
//Material Tema Imports
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from '../../../app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { DecimalPipe } from '@angular/common';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { CustosDespesasComponent } from './custos-despesas.component';
import { CadastroCustosDespesasComponent } from '../cadastro-custos-despesas/cadastro-custos-despesas/cadastro-custos-despesas.component';
import { ValoresCustosDespesasComponent } from '../valores-custos-despesas/valores-custos-despesas.component';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CustosDespesasComponent,
    CadastroCustosDespesasComponent,
    ValoresCustosDespesasComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    DecimalPipe,
    CurrencyMaskModule,
  ],
  exports: [CustosDespesasComponent],
  providers: [provideClientHydration()],
})
export class CustosDespesasModule {}
