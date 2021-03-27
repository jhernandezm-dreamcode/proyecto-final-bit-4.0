import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { GuardsGuard } from "./guards/guards.guard";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [GuardsGuard],
  },
  {
    path: 'user-detail',
    component: UserDetailComponent,
    pathMatch: 'full',
    canActivate: [GuardsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
