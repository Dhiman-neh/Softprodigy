import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterModule } from 'src/app/includes/footer/footer.module';
import { HeaderModule } from 'src/app/includes/header/header.module';
import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';

@NgModule({
  declarations: [BasicComponent],
  imports: [
    CommonModule,
    BasicRoutingModule,
    FormsModule,
    HeaderModule,
    FooterModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class BasicModule {}
