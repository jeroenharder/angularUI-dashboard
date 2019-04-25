import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailsComponent } from './details/details.component';
import { TreeComponent } from './tree/tree.component';
import { ChatComponent } from './chat/chat.component';
import { TasksComponent } from './tasks/tasks.component';
import { ScrumboardComponent } from './scrumboard/scrumboard.component';
import { DocumentsComponent } from './documents/documents.component';
import { ModalsComponent } from './modals/modals.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    DetailsComponent,
    TreeComponent,
    ChatComponent,
    TasksComponent,
    ScrumboardComponent,
    DocumentsComponent,
    ModalsComponent,
    LoginComponent,
    TeamComponent,
    MainDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
