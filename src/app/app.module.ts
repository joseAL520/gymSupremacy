import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SedeComponent } from './componets/sede/sede.component';
import { ProductoComponent } from './componets/producto/producto.component';
import { ClaseComponent } from './componets/clase/clase.component';
import { EntrenadoresComponent } from './componets/entrenadores/entrenadores.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SedeComponent,
    ProductoComponent,
    ClaseComponent,
    EntrenadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
