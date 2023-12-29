import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { ReceitasComponent } from './receitas.component';
import { CadastroReceitasComponent } from '../cadastro-receitas/cadastro-receitas.component';
import { ValoresReceitasComponent } from '../valores-receitas/valores-receitas/valores-receitas.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from '../../../app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ReceitasComponent,
    CadastroReceitasComponent,
    ValoresReceitasComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CurrencyMaskModule,
  ],
  exports: [ReceitasComponent],
  providers: [provideClientHydration()],
})
export class ReceitasModule {}
