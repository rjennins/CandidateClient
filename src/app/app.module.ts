import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { CandidateServiceService } from './service/candidate-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    CandidateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CandidateServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }