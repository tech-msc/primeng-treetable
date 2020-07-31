import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DataJsonService } from './home/home.service';
import { TreeTableModule } from 'primeng/treetable';
import { TreeTable } from 'primeng/treetable';
import { TableprimeComponent } from './tableprime/tableprime.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableprimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TreeTableModule,

  ],
  providers: [DataJsonService],
  // bootstrap: [AppComponent]
  bootstrap: [HomeComponent]
})
export class AppModule { }
