import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { DepartmentComponent } from './department/department.component';
import { CoursesComponent } from './courses/courses.component';
import { SubjectComponent } from './subject/subject.component';
import { TeachersComponent } from './teachers/teachers.component';
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
import { NgSelectModule } from '@ng-select/ng-select';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { ManageAssignSubToStaffComponent } from './manage-assign-sub-to-staff/manage-assign-sub-to-staff.component';
import { UpdateBranchComponent } from './update-branch/update-branch.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { UpdateMarksComponent } from './update-marks/update-marks.component';
import { UpdateAssignSubToStaffComponent } from './update-assign-sub-to-staff/update-assign-sub-to-staff.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewInternalComponent } from './view-internal/view-internal.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { ShowClassComponent } from './show-class/show-class.component';
import { InternalAssessmentViewComponentimplements } from './internal-assessment-view/internal-assessment-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    AdminLoginComponent,
    LoginComponent,
    RegisterComponent,
    DepartmentComponent,
    CoursesComponent,
    SubjectComponent,
    TeachersComponent,
    StudentsComponent,
    AssignSubToStaffComponent,
    MarksComponent,
    BranchComponent,
    ManageDepartmentComponent,
    ManageBranchComponent,
    ManageCoursesComponent,
    ManageSubjectComponent,
    ManageStudentComponent,
    ManageTeacherComponent,
    ManageMarksComponent,
    UpdateDepartmentComponent,
    ManageAssignSubToStaffComponent,
    UpdateBranchComponent,
    UpdateCourseComponent,
    UpdateSubjectComponent,
    UpdateStudentComponent,
    UpdateTeacherComponent,
    UpdateMarksComponent,
    UpdateAssignSubToStaffComponent,
    ViewInternalComponent,
    StudentLoginComponent,
    ShowClassComponent,
    InternalAssessmentViewComponentimplements
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    NgSelectModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
