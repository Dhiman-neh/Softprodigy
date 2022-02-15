import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderOnlyRoutingModule } from './header-only-routing.module';
import { HeaderOnlyComponent } from './header-only.component';

@NgModule({
  declarations: [HeaderOnlyComponent],
  imports: [
    CommonModule,
    HeaderOnlyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HeaderOnlyModule {}
