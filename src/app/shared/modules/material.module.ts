import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule {}
