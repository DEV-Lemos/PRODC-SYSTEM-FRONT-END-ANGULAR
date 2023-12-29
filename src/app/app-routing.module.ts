import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CustosDespesasComponent } from './components/custos-despesas/custos-despesas/custos-despesas.component';
import { ReceitasComponent } from './components/receitas/receitas/receitas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'custos-despesas', component: CustosDespesasComponent },
  { path: 'receitas', component: ReceitasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
