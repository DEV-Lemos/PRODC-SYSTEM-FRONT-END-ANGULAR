import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CustosDespesasAccessComponent } from '../home-components/components-access/custos-despesas-access/custos-despesas-access/custos-despesas-access.component';
import { ReceitasAccessComponent } from '../home-components/components-access/receitas-access/receitas-access.component';
import { AppRoutingModule } from '../../app-routing.module';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    HomeComponent,
    CustosDespesasAccessComponent,
    ReceitasAccessComponent,
  ],
  imports: [AppRoutingModule, MatCardModule],
  exports: [HomeComponent],
})
export class HomeModule {}
