import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageSmartComponent} from './containers/home-page-smart/home-page-smart.component';
import {BibliographyPageSmartComponent} from './containers/bibliography-page-smart/bibliography-page-smart.component';
import {LoginPageSmartComponent} from './containers/login-page-smart/login-page-smart.component';
import {ChatPageSmartComponent} from './containers/chat-page-smart/chat-page-smart.component';
import {CoursesPageSmartComponent} from './containers/courses-page-smart/courses-page-smart.component';
import {BookPageSmartComponent} from './containers/book-page-smart/book-page-smart.component';
import {CoursePageSmartComponent} from './containers/course-page-smart/course-page-smart.component';
import {QuizPageSmartComponent} from './containers/quiz-page-smart/quiz-page-smart.component';
import {QuizCheckPageSmartComponent} from './containers/quiz-check-page-smart/quiz-check-page-smart.component';
import {SkillsPageSmartComponent} from './containers/skills-page-smart/skills-page-smart.component';
import {RoomReservationSmartComponent} from './containers/room-reservation-smart/room-reservation-smart.component';
// tslint:disable-next-line:max-line-length
import {CreateRoomReservationSmartComponent} from './containers/room-reservation-smart/create-room-reservation-smart/create-room-reservation-smart.component';
// tslint:disable-next-line:max-line-length
import {EditRoomReservationSmartComponent} from './containers/room-reservation-smart/edit-room-reservation-smart/edit-room-reservation-smart.component';
import {LivestreamSmartComponent} from './containers/livestream-smart/livestream-smart.component';
import {LivestreamOnlineSmartComponent} from './containers/livestream-smart/livestream-online-smart/livestream-online-smart.component';
// tslint:disable-next-line:max-line-length
import {DebateTimeSmartComponent} from './containers/livestream-smart/livestream-online-smart/debate-time-smart/debate-time-smart.component';
import {MiniGameSmartComponent} from './containers/livestream-smart/livestream-online-smart/mini-game-smart/mini-game-smart.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginPageSmartComponent},
  // tslint:disable-next-line:max-line-length
  {path: 'home', component: HomePageSmartComponent, data: [{role: 'PROFESSOR'}, {role: 'STUDENT'}, {role: 'GUEST'}] , canActivate : [AuthGuard]},
  {path: 'courses', component: CoursesPageSmartComponent},
  {path: 'chat', component: ChatPageSmartComponent},
  {path: 'course/:name', component: CoursePageSmartComponent},
  {path: 'course/:name/bibliography', component: BibliographyPageSmartComponent},
  {path: 'book/:title', component: BookPageSmartComponent},
  {path: 'course/:name/quiz', component: QuizPageSmartComponent},
  {path: 'quiz-check', component: QuizCheckPageSmartComponent},
  {path: 'skills/hard', component: SkillsPageSmartComponent},
  {path: 'room-reservation', component: RoomReservationSmartComponent, data: {role: 'PROFESSOR'}, canActivate : [AuthGuard]},
  {path: 'room-reservation/create', component: CreateRoomReservationSmartComponent, data: {role: 'PROFESSOR'}, canActivate : [AuthGuard]},
  {path: 'room-reservation/:id', component: EditRoomReservationSmartComponent, data: {role: 'PROFESSOR'}, canActivate : [AuthGuard]},
  {path: 'livestream', component: LivestreamSmartComponent },
  {path: 'livestream/on', component: LivestreamOnlineSmartComponent, canActivate : [AuthGuard]},
  {path: 'livestream/on/debate', component: DebateTimeSmartComponent, canActivate : [AuthGuard]},
  {path: 'livestream/on/mini-game', component: MiniGameSmartComponent, data: {role: 'PROFESSOR'}, canActivate : [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
