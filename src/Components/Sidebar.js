import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu , SidebarHeader , SidebarContent , SidebarFooter } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable , faPlusSquare , faAddressBook, faAtom, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const Sidebar = ({activemenu, submenu}) => {
  return (
    <ProSidebar  breakPoint={'md'}> 
     <SidebarContent>
    <Menu iconShape="round">

      <MenuItem 
        active={activemenu === 'DASHBOARD'} 
        icon={<FontAwesomeIcon icon={faTachometerAlt} />}>
          Dashboard<Link to="/" />
      </MenuItem>
      
      <SubMenu  defaultOpen={activemenu === 'WORKING_DAYS'} title="Working Days" icon={<FontAwesomeIcon icon={faTable} />}>
        <MenuItem 
            active={submenu === 'DAYS_LIST'} >
            Days Groups<Link to="/workingdays/list" />
        </MenuItem>
        <MenuItem active={submenu === 'ADD_WORKING_DAYS'}>
          Add Working Days<Link to="/workingdays/add" />
        </MenuItem>
        <MenuItem active={submenu === 'TIMESLOTS'}>
          Timeslot Groups<Link to="/workingdays/timeslots" />
        </MenuItem>
      </SubMenu>



      <SubMenu active={activemenu === 'LECTURER'}  title="Lecturers" icon={<FontAwesomeIcon icon={faAddressBook} />}>
        <MenuItem active={submenu === 'OVERVIEW_LECTURER'}>Overview</MenuItem>
        <MenuItem active={submenu === 'ADD_LECTURER'}>Add Lecturer <Link to="/lecturer/add" /></MenuItem>
      </SubMenu>




      <SubMenu title="Subjects" icon={<FontAwesomeIcon icon={faAtom} />}>
      <MenuItem active={submenu === 'OVERVIEW_SUBJECT'}>Overview</MenuItem>
        <MenuItem active={submenu === 'ADD_SUBJECT'}>Add Subject</MenuItem>
      </SubMenu>

      <SubMenu  defaultOpen={activemenu === 'STUDENT'} title="Student" icon={<FontAwesomeIcon icon={faAddressBook} />}>
        <MenuItem 
            active={submenu === 'STUDENT_TB_LIST'} >
            Timetable List<Link to="/student/student_tb_list" />
        </MenuItem>
        <MenuItem active={submenu === 'ADD_STUDENT_TIMETABLE'}>
          Add Timetable<Link to="/student/add_timetable" />
        </MenuItem>
        <MenuItem active={submenu === 'ADD_TIMESLOTS'}>Add Timeslots</MenuItem>
      </SubMenu>

    </Menu>
    </SidebarContent>
  </ProSidebar>
  );
}

export default Sidebar;
