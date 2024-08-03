import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.service';
import { DepartmentComponent } from './department/department.component';
import { CoursesComponent } from './courses/courses.component';
import { SubjectComponent } from './subject/subject.component';
import { TeachersComponent } from './teachers/teachers.component';
import { audit } from 'rxjs';
import { StudentsComponent } from './students/students.component';
import { AssignSubToStaffComponent } from './assign-sub-to-staff/assign-sub-to-staff.component';
import { MarksComponent } from './marks/marks.component';
import { BranchComponent } from './branch/branch.component';
import { ManageDepartmentComponent } from './manage-department/manage-department.component';
import { ManageBranchComponent } from './manage-branch/manage-branch.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { ManageSubjectComponent } from './manage-subject/manage-subject.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { ManageTeacherComponent } from './manage-teacher/manage-teacher.component';
import { ManageMarksComponent } from './manage-marks/manage-marks.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { ManageAssignSubToStaffComponent } from './manage-assign-sub-to-staff/manage-assign-sub-to-staff.component';
import { UpdateBranchComponent } from './update-branch/update-branch.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { UpdateAssignSubToStaffComponent } from './update-assign-sub-to-staff/update-assign-sub-to-staff.component';
import { UpdateMarksComponent } from './update-marks/update-marks.component';
import { ViewInternalComponent } from './view-internal/view-internal.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { ShowClassComponent } from './show-class/show-class.component';
import { InternalAssessmentViewComponentimplements } from './internal-assessment-view/internal-assessment-view.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/layout/home', pathMatch:'full'
  },
  {
    path:'layout', component:LayoutComponent,
    children:[
      {
        path:'dashboard', component:DashboardComponent
      },
      {
        path:'home', component:HomeComponent, canActivate:[AuthGuard]
      },
      {
        path:'contact', component:ContactComponent, canActivate:[AuthGuard]
      },
      {
        path:'about', component:AboutComponent
      },
      {
        path:'login', component:LoginComponent
      },
      {
        path:'admin-login', component:AdminLoginComponent
      },
      {
        path:'student-login', component:StudentLoginComponent
      },
      {
        path:'register', component:RegisterComponent
      },
      {
        path:'branch', component:BranchComponent, canActivate:[AuthGuard]
      },
      {
        path:'department', component:DepartmentComponent, canActivate:[AuthGuard]
      },
      {
        path:'courses', component:CoursesComponent, canActivate:[AuthGuard]
      },
      {
        path:'subject', component:SubjectComponent, canActivate:[AuthGuard]
      },
      {
        path:'teachers', component:TeachersComponent, canActivate:[AuthGuard]
      },
      {
        path:'students', component:StudentsComponent, canActivate:[AuthGuard]
      },
      {
        path:'assign-staff', component:AssignSubToStaffComponent, canActivate:[AuthGuard]
      },
      {
        path:'marks', component:MarksComponent, canActivate:[AuthGuard]
      },
      {
        path:'manage-department', component:ManageDepartmentComponent
      },
      {
        path:'manage-branch', component:ManageBranchComponent
      },
      {
        path:'manage-courses', component:ManageCoursesComponent
      },
      {
        path:'manage-subject', component:ManageSubjectComponent
      },
      {
        path:'manage-student', component:ManageStudentComponent
      },
      {
        path:'manage-teacher', component:ManageTeacherComponent
      },
      {
        path:'manage-marks', component:ManageMarksComponent
      },
      {
        path:'manage-assign-staff', component:ManageAssignSubToStaffComponent
      },
      {
        path:'update-department/:_id',component:UpdateDepartmentComponent
      },
      {
        path:'update-branch/:_id', component:UpdateBranchComponent
      },
      {
        path:'update-course/:_id', component:UpdateCourseComponent
      },
      {
        path:'update-subject/:_id', component:UpdateSubjectComponent
      },
      {
        path:'update-student/:_id', component:UpdateStudentComponent
      },
      {
        path:'update-teacher/:_id', component:UpdateTeacherComponent
      },
      {
        path:'update-assign-staff/:_id', component:UpdateAssignSubToStaffComponent
      },
      {
        path:'update-marks/:_id', component:UpdateMarksComponent
      },
      {
        path:'view-internal', component:ViewInternalComponent
      },
      {
        path:'show-classes', component:ShowClassComponent
      },
      {
        path:'internal-assessment-view', component:InternalAssessmentViewComponentimplements
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
