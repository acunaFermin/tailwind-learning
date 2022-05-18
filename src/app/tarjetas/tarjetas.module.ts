import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetasComponent } from './tarjetas.component';



@NgModule({
  declarations: [TarjetasComponent],
  exports: [TarjetasComponent],
  imports: [
    CommonModule
  ]
})
export class TarjetasModule { }
