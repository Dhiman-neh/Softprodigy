import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('../../blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'company',
        loadChildren: () =>
          import('../../company/company.module').then((m) => m.CompanyModule),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('../../contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'portfolio',
        loadChildren: () =>
          import('../../portfolio/portfolio.module').then(
            (m) => m.PortfolioModule
          ),
      },
      {
        path: 'service',
        loadChildren: () =>
          import('../../service/service.module').then((m) => m.ServiceModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicRoutingModule {}
