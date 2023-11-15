import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ENTITY_METADATA_TOKEN, PLURAL_NAMES_TOKEN } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './users.effects';
import { userReducer } from './reducers/users.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([UsersEffects]),
    StoreModule.forFeature('users', userReducer),
  ],
  providers: [
    {
      provide: ENTITY_METADATA_TOKEN,
      multi: true,
      useValue: {
        Users: {},
      },
    },
    {
      provide: PLURAL_NAMES_TOKEN,
      multi: true,
      useValue: {
        Users: 'Users',
      },
    },
  ],
  exports: [],
})
export class UsersModule {}
