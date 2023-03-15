import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LinkIconComponent } from './components/link-icon/link-icon.component';
import { ExternalLinksComponent } from './components/external-links/external-links.component';
import { ResumeComponent } from './components/resume/resume.component';
import { EducationComponent } from './components/education/education.component';
import { ContentComponent } from './components/content/content.component';
import { GamesComponent } from './components/games/games.component';
import { ExperienceComponent } from './components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinkIconComponent,
    ExternalLinksComponent,
    ResumeComponent,
    EducationComponent,
    ContentComponent,
    GamesComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
