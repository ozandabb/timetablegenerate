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

      <SubMenu title="Lecturers" icon={<FontAwesomeIcon icon={faAddressBook} />}>
        <MenuItem active={true}>Days Groups</MenuItem>
      </SubMenu>

      <SubMenu title="Subjects" icon={<FontAwesomeIcon icon={faAtom} />}>
        <MenuItem active={true}>Days Groups</MenuItem>
      </SubMenu>

    </Menu>
    </SidebarContent>
  </ProSidebar>
  );
}

export default Sidebar;
