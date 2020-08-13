import React from 'react';
import Sidebar from '../Components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

class TimeslotsList extends React.Component {

  render(){
  return (
    <div className="app" >
    <Sidebar activemenu={'WORKING_DAYS'}   submenu={'TIMESLOTS'} />
    <main>
        <div className="container-fluid" >
        <div className="row" >
            <div className="col-12 shadow-sm rounded bg-white mt-1" >
                <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Working Days - WeekDays List<br></br>
                <span className="text-muted small">Details about list</span>
                
                </h6>
            </div>
            
            <div className="col-4  mt-2 pl-0" >
                <div className="shadow-sm rounded bg-white pb-3 px-3 d-flex h-100">
                    <h6 className="text-header pt-3 mb-0 font-weight-bold line-hight-1">#No Days <br></br>
                    <span className="text-muted small">Per week</span>
                    </h6>
                    <h3 className="text-info font-weight-bold ml-auto my-auto" >05</h3>
                </div>
            </div>

            <div className="col-8  mt-2 px-0" >
                <div className="shadow-sm rounded bg-white pb-3 px-3 d-flex">
                    <h6 className="text-header pt-3 mb-0 font-weight-bold line-hight-1">Working Days<br></br>
                    <span className="text-muted small">Per week</span>
                    </h6>
                    <div className="ml-auto my-auto" >
                    <span className="badge rounded-0 bg-white text-dark border border-dark click px-3 mx-1">Monday</span>
                    <span className="badge rounded-0 bg-white text-dark border border-dark click px-3 mx-1">Tuesday</span>
                    <span className="badge rounded-0 bg-white text-dark border border-dark click px-3 mx-1">Wednesday</span>
                    <span className="badge rounded-0 bg-white text-dark border border-dark click px-3 mx-1">Thursday</span>
                    <span className="badge rounded-0 bg-white text-dark border border-dark click px-3 mx-1">Firday</span>
                    </div>
                </div>
            </div>

            <div className="col-12 shadow-sm rounded bg-white mt-2 " >
                <div className="d-flex mt-2" >
                    <h6 className="text-header pt-2 mb-0 font-weight-bold line-hight-1 mr-2" style={{fontSize : '80%'}}>
                        <FontAwesomeIcon icon={faTable} className="mr-1"/>Select Group
                    </h6>
                    <select className="form-control form-control-sm w-25">
                        <option>Weekdays</option>
                        <option>Weekends</option>
                    </select>
                </div>
                <table class="table borderless customtable mt-2">
                    <thead>
                        <tr>
                        <th className="font-08 text-dark2 ">Timeslot</th>
                        <th className="font-08 text-dark2 ">Start Time</th>
                        <th className="font-08 text-dark2 ">End Time</th>
                        <th className="font-08 text-dark2 ">Duration</th>
                        <th className="font-08 text-dark2 ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-dark">SLOT 01</td>
                            <td>08:30 AM</td>
                            <td>09:30 AM</td>
                            <td>01 Hour</td>
                            <td>
                                <span className="badge badge-info rounded-0 bg-white text-info border border-info click font-weight-bold mx-2">Edit Info</span>
                                <Link to="/workingdays/timeslots/delete" >
                                <span className="badge badge-info rounded-0 bg-white text-danger border border-danger click font-weight-bold ">Delete</span>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-dark">SLOT 02</td>
                            <td>09:30 AM</td>
                            <td>10:30 AM</td>
                            <td>01 Hour</td>
                            <td>
                                <span className="badge badge-info rounded-0 bg-white text-info border border-info click font-weight-bold mx-2">Edit Info</span>
                                <span className="badge badge-info rounded-0 bg-white text-danger border border-danger click font-weight-bold ">Delete</span>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className="col-6 mt-2  pl-0" >
                <div className="shadow-sm rounded bg-white  pb-3 px-3" >
                    <h6 className="text-header pt-3 mb-0 font-weight-bold line-hight-1">Add Timeslots<br></br>
                    <span className="text-muted small">You can add new timeslots</span></h6>
                    <Link to="/workingdays/timeslots/add" >
                    <span  className="badge badge-info px-2 py-1 mt-1 bg-white border border-info text-info click ">Add Timeslots</span>
                    </Link>
                </div>
            </div>
            <div className="col-6 mt-2  px-0" >
                <div className="shadow-sm rounded bg-white  pb-3 px-3" >
                    <h6 className="text-header pt-3 mb-0 font-weight-bold line-hight-1">Remove Group<br></br>
                    <span className="text-muted small">You can remove entire group</span></h6>
                    <Link to="/workingdays/delete" >
                    <span  className="badge badge-danger px-2 py-1 mt-1 bg-white border border-danger text-danger click ">Remove Group</span>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    </main>
  </div>
  );}
}

export default TimeslotsList;
