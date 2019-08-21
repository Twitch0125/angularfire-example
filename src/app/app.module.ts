import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatToolbarModule, MatCardModule } from "@angular/material";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
@NgModule({
  declarations: [AppComponent, CompanyEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
