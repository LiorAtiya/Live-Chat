import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
  imports: [FormsModule],
  exports: [RegisterComponent],
})
export class AuthModule {}
