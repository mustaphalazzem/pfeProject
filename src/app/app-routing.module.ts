import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExcursionAnnuleComponent } from './components/excursion-annule/excursion-annule.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { PanierComponent } from './components/panier/panier.component';
import { FavorissComponent } from "./components/favoriss/favoriss.component";
//import { LoginComponent } from './components/login/login.component';
import {ConfirmationComponent} from './components/confirmation/confirmation.component'
import { ClientComponent } from './components/client/client.component';
import { AjouterExcursionComponent } from './components/ajouter-excursion/ajouter-excursion.component';
import { ConfirmationExcursionComponent } from './components/confirmation-excursion/confirmation-excursion.component';
import { ConsulterExcursionComponent } from './components/consulter-excursion/consulter-excursion.component';
import { DetailComponent } from './components/detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeParticipantComponent } from './components/liste-participant/liste-participant.component';
import { UpdateExcursionComponent } from './components/update-excursion/update-excursion.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { AuthGuard } from './guard/auth.guard';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { DetailParticipantComponent } from './components/detail-participant/detail-participant.component';
import { AjouterbusComponent } from './components/ajouterbus/ajouterbus.component';
import { ListeBusComponent } from './components/liste-bus/liste-bus.component';
import { OrganisateurComponent } from './components/organisateur/organisateur.component';
import { DerailsAnnuleComponent } from './components/derails-annule/derails-annule.component';
import { ListeExcursionOrgComponent } from './components/liste-excursion-org/liste-excursion-org.component';
import { DetailBusReservComponent } from './components/detail-bus-reserv/detail-bus-reserv.component';
import { ReservationBusComponent } from './components/reservation-bus/reservation-bus.component';
import { DetailBusComponent } from './components/detail-bus/detail-bus.component';
import { ListeExcursionClientComponent } from './components/liste-excursion-client/liste-excursion-client.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { LouerBusComponent } from './components/louer-bus/louer-bus.component';
const routes: Routes = [
  {path:"liste_exc_client/:_id",component:ListeExcursionClientComponent},
  {path:'acceuil' , component : AcceuilComponent} ,
  {path:'liste_excursion/:_id' , component: ListeExcursionOrgComponent } ,
  {path:'' , component : AcceuilComponent} ,
  {path:'louerbus/:_id' , component : LouerBusComponent} ,
  {path:'#' , component : AcceuilComponent} ,
  {path:'favoris', component: FavorissComponent} ,
  {path: 'confirmation', component : ConfirmationComponent} ,
  {path:'login', component: LoginComponent},
  {path:'inscrire', component: ClientComponent},
  {path: 'panier/:_id', component: PanierComponent },
  {path: 'ajouter_excursion' , component: AjouterExcursionComponent,canActivate:[AuthGuard],data:{role:['client']}},
  {path:'confirmation_excursion' ,component:ConfirmationExcursionComponent},
  {path:'liste_excursion',component:ConsulterExcursionComponent}, 
  {path:'detail_excursion/:_id',component:DetailComponent},
  {path:'login',component:LoginComponent},
  //{path:'excursion_annule',component:LoginComponent},
  
  
  {path:'detail_excursion-annule/:_id',component:DerailsAnnuleComponent},
  {path:'dashboard',component:DashboardComponent},
  {path : 'liste_participant/:_id',component :ListeParticipantComponent ,},
  //{path:'update',component:UpdateExcursionComponent},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'detail_participant/:_id',component:DetailParticipantComponent},
  {path:'ajouter_bus',component:AjouterbusComponent},
  {path:'liste_bus',component:ListeBusComponent},
  {path:"organisateur",component:OrganisateurComponent},
  {path:'update/:id',component:UpdateExcursionComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'listebusrese/:_id',component:ReservationBusComponent},
  {path:'detailbusreserve/:_id',component:DetailBusReservComponent},
  {path:'detailbus/:_id',component:DetailBusComponent},
  {path: 'liste_excursion_annule', component: ExcursionAnnuleComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
