import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './profile/about/about.component';
import { ContactComponent } from './profile/contact/contact.component';
import { EducationComponent } from './profile/education/education.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { FooterComponent } from './profile/footer/footer.component';
import { HeaderComponent } from './profile/header/header.component';
import { IntroComponent } from './profile/intro/intro.component';
import { PortfolioComponent } from './profile/portfolio/portfolio.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { ReferenceComponent } from './profile/reference/reference.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    IntroComponent,
    PortfolioComponent,
    ProjectsComponent,
    SkillsComponent,
    ReferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
