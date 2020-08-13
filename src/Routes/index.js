import Dashboard from '../Dashboard';

//WorkingDays
import WorkingDaysList from '../WorkingDays/WorkingDaysList';
import AddWorkingDays from '../WorkingDays/AddWorkingDays';
import AddTimeslot from '../WorkingDays/AddTimeslot';
import DeleteWorkingDays from '../WorkingDays/DeleteWorkingDays';
import DeleteTimeslot from '../WorkingDays/DeleteTimeslot';
import TimeslotsList from '../WorkingDays/TimeslotsList';

//Lecturers

//Subjects


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



];

export default routes;
