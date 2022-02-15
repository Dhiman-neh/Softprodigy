import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
