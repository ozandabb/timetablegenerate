import Dashboard from '../Dashboard';

//WorkingDays
import WorkingDaysList from '../WorkingDays/WorkingDaysList';
import AddWorkingDays from '../WorkingDays/AddWorkingDays';

//Lecturers
import AddLecturer from '../Lecturer/Lecturer.Add'
//Subjects

//Student
import studentTBlist from '../Student/studentTimeTableList';
import AddTimeTable from '../Student/addTimeTable';

let routes = [

  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    exact: true,
  },
  {
    path: "/workingdays/list",
    name: "Working Days",
    component: WorkingDaysList,
    exact: true,
  },
  {
    path: "/workingdays/add",
    name: "Add Working Days",
    component: AddWorkingDays,
    exact: true,
  },
  {
    path: "/student/student_tb_list",
    name: "Student",
    component:studentTBlist,
    exact:true,
  },
  {
    path: "/student/add_timetable",
    name: "Add Timetable",
    component: AddTimeTable,
    exact : true,
  },


  // lecturer
  {
    path: "/lecturer/add",
    name: "Add Lecturer",
    component: AddLecturer,
    exact : true,
  },





];

export default routes;
