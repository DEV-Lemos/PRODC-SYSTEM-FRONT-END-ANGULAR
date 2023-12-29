import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CdkTableModule, DataSource } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';

import { CustosDespesasModule } from './components/custos-despesas/custos-despesas/custo-despesa.module';
import { HomeModule } from './views/home/home.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReceitasModule } from './components/receitas/receitas/receitas.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustosDespesasModule,
    ReceitasModule,
    HomeModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    CdkTableModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
