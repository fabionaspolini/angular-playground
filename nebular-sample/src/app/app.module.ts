import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule, NbMenuModule, NbCardModule, NbInputModule, NbButtonGroupModule, NbToggleModule, NbSelectModule, NbCheckboxModule, NbRadioModule, NbDatepicker, NbDatepickerModule, NbTimepickerModule, NbTagModule, NbContextMenuModule, NbDialogModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './pages/home/home.component';
import { NbDateFnsDateModule } from '@nebular/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbButtonGroupModule,
    NbEvaIconsModule,
    NbIconModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbInputModule,
    NbToggleModule,
    NbCheckboxModule,
    NbSelectModule,
    NbRadioModule,
    NbDatepickerModule.forRoot(),
    NbDateFnsDateModule.forRoot({
      format: "dd/MM/yyyy",
      parseOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
      formatOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
    }),
    NbTimepickerModule.forRoot(),
    NbTagModule,
    NbContextMenuModule,
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
