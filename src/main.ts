import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export function getBaseUrl(){
  return "http://localhost:5000/apis/"
}
export function getStudentUrl(){
  return "http://localhost:5000/studentapis/"
}
export function getTeacherUrl(){
  return "http://localhost:5000/teacherapis/"
}

const provider = [
  {
  provide:"baseurl",useFactory:getBaseUrl,desp:[]
  },
  {
    provide:"studenturl",useFactory:getStudentUrl,desp:[]
  },
  {
    provide:"teacherurl",useFactory:getTeacherUrl,desp:[]
  }
]


platformBrowserDynamic(provider).bootstrapModule(AppModule)
  .catch(err => console.error(err));
