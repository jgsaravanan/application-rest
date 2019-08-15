import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import {AppComponent} from './app.component';
import {
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {RestComponent} from './rest/rest.component';
import {PostMethodComponent} from './post-method/post-method.component';
import {GetMethodComponent} from './get-method/get-method.component';
import {PutMethodComponent} from './put-method/put-method.component';
import {DeleteMethodComponent} from './delete-method/delete-method.component';
import {NavigationComponent} from './navigation/navigation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: 'REST', component: RestComponent},
  {path: 'POST', component: PostMethodComponent},
  {path: 'GET', component: GetMethodComponent},
  {path: 'PUT', component: PutMethodComponent},
  {path: 'DELETE', component: DeleteMethodComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RestComponent,
    PostMethodComponent,
    GetMethodComponent,
    PutMethodComponent,
    DeleteMethodComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    MatSelectModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
