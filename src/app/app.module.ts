import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";

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
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { IntroComponent } from './components/intro/intro.component';
import { SkillComponent } from './components/skill/skill.component';

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
    ExperienceComponent,
    NavigationBarComponent,
    IntroComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
