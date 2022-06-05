import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
  import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnteteComponent } from './components/entete/entete.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component'; 
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
//import { LoginComponent } from './components/login/login.component';
import { PanierComponent } from './components/panier/panier.component';
import { FavorissComponent } from './components/favoriss/favoriss.component';
import { AjouterExcursionComponent } from './components/ajouter-excursion/ajouter-excursion.component';
import { CommonModule } from '@angular/common';
import { ConfirmationExcursionComponent } from './components/confirmation-excursion/confirmation-excursion.component';
import { ConsulterExcursionComponent } from './components/consulter-excursion/consulter-excursion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './components/detail/detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ExcursionComponent } from './components/excursion/excursion.component'; // <-- import the module
import { UserAuthService } from './services/user-auth.service';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthInterceptor } from './guard/auth.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeParticipantComponent } from './components/liste-participant/liste-participant.component';
import { UpdateExcursionComponent } from './components/update-excursion/update-excursion.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { DetailParticipantComponent } from './components/detail-participant/detail-participant.component';
import { AjouterbusComponent } from './components/ajouterbus/ajouterbus.component';
import { ListeBusComponent } from './components/liste-bus/liste-bus.component';
import { ListeReservationComponent } from './components/liste-reservation/liste-reservation.component';
import { OrganisateurComponent } from './components/organisateur/organisateur.component';
import { ExcursionAnnuleComponent } from './components/excursion-annule/excursion-annule.component';
import { DerailsAnnuleComponent } from './components/derails-annule/derails-annule.component';
import { ReservationBusComponent } from './components/reservation-bus/reservation-bus.component';
import { ListeExcursionOrgComponent } from './components/liste-excursion-org/liste-excursion-org.component';
import { DetailBusComponent } from './components/detail-bus/detail-bus.component';
import { DetailBusReservComponent } from './components/detail-bus-reserv/detail-bus-reserv.component';
import { ListeExcursionClientComponent } from './components/liste-excursion-client/liste-excursion-client.component';
import { PhotoClientComponent } from './components/photo-client/photo-client.component';
//import { RegisterComponent } from './register/register.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { LouerBusComponent } from './components/louer-bus/louer-bus.component';
@NgModule({
  declarations: [
    BoardModeratorComponent,
    BoardUserComponent,
    ProfileComponent,
    HomeComponent,
    BoardAdminComponent,
    OrganisateurComponent,
    AppComponent,
    ClientComponent,
    EnteteComponent,
    AcceuilComponent,
    ConfirmationComponent,
    LoginComponent,
    PanierComponent,
    InscriptionComponent,
    FavorissComponent,
    AjouterExcursionComponent,
    ConfirmationExcursionComponent,
    ConsulterExcursionComponent,
    DetailComponent,
    ExcursionComponent,
    DashboardComponent,
    ListeParticipantComponent,
    UpdateExcursionComponent,
    ForbiddenComponent,
    DetailParticipantComponent,
    AjouterbusComponent,
    ListeBusComponent,
    ListeReservationComponent,
    ExcursionAnnuleComponent,
    DerailsAnnuleComponent,
    ReservationBusComponent,
    ListeExcursionOrgComponent,
    DetailBusComponent,
    DetailBusReservComponent,
    ListeExcursionClientComponent,
    PhotoClientComponent,
    RegisterComponent,
    LouerBusComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule  ,
    RouterModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserAuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
