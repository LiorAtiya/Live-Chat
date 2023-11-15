import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RegisterComponent } from './components/register/register.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { CreateMessageComponent } from './components/create-message/create-message.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { UsersModule } from './users/users.module';
import { entityConfig } from './entity-metadata';
import { HttpClientModule } from '@angular/common/http';
import { DefaultDataServiceConfig } from '@ngrx/data';
import { MessagesModule } from './messages/messages.module';

// import { AuthModule } from '@lior/auth';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ChatListComponent,
    CreateMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    UsersModule,
    HttpClientModule,
    MessagesModule,
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: {
        root: 'http://localhost:3000/',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
