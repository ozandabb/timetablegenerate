import Dashboard from '../Dashboard';

//WorkingDays
import WorkingDaysList from '../WorkingDays/WorkingDaysList';
import AddWorkingDays from '../WorkingDays/AddWorkingDays';
import AddTimeslot from '../WorkingDays/AddTimeslot';
import DeleteWorkingDays from '../WorkingDays/DeleteWorkingDays';
import DeleteTimeslot from '../WorkingDays/DeleteTimeslot';
import TimeslotsList from '../WorkingDays/TimeslotsList';

//Lecturers
import AddLecturer from '../Lecturer/Lecturer.Add'
//Subjects

//Student
import studentTBlist from '../Student/studentTimeTableList';
import AddTimeTable from '../Student/addTimeTable';
import DeleteStudentslot from '../Student/deleteStudentSlot';
import GenerateSubgroup from '../Student/GenerateSubgroup';
import consecutiveSessions from '../Student/consecutiveSessions';
import addconsecutiveSessions from '../Student/addConSessions';

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
    path: "/workingdays/timeslots/add",
    name: "Add Timeslots",
    component: AddTimeslot,
    exact: true,
  },
  {
    path: "/workingdays/delete",
    name: "Delete Working Days",
    component: DeleteWorkingDays,
    exact: true,
  },
  {
    path: "/workingdays/timeslots/delete",
    name: "Delete Timeslot",
    component: DeleteTimeslot,
    exact: true,
  },
  {
    path: "/workingdays/timeslots",
    name: "Time Slots",
    component: TimeslotsList,
    exact: true,
  },

  // Student
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
  {
    path: "/student/delete_student_slot",
    name: "Delete Student Slot",
    component: DeleteStudentslot,
    exact : true,
  },
  {
    path: "/student/GenerateSubgroup",
    name: "Generate Sub group",
    component: GenerateSubgroup,
    exact : true,
  },
  {
    path: "/student/consecutiveSessions",
    name: "consecutive Sessions",
    component: consecutiveSessions,
    exact : true,
  },
  {
    path: "/student/addconsecutiveSessions",
    name: "Add consecutive Sessions",
    component: addconsecutiveSessions,
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
