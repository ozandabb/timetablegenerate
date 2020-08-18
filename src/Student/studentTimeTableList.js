import React from 'react';
import Sidebar from '../Components/Sidebar';
import {Link} from 'react-router-dom'


class studentTBlist extends React.Component {

  render(){
  return (
    <div className="app" >
    <Sidebar activemenu={'STUDENT'}   submenu={'STUDENT_TB_LIST'} />
    <main>
        <div className="container-fluid" >
        <div className="row" >
            <div className="col-12 shadow-sm rounded bg-white mt-1" >
                <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Student Timetable<br></br>
                <span className="text-muted small">Dashboard</span></h6>
            </div>
            <div className="col-12 shadow-sm rounded bg-white mt-3" >
            <div class="row">
                <div class="col-8">
                    <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Add new Academic year, Group, Subgroup, Program<br></br>
                    <span className="text-muted small">you can add Student timetable slot</span></h6>
                </div>
                <div class="col-4">
                    <center>
                    <span  className="badge badge-info px-5 py-1 mt-4 bg-white border border-info text-info click ">Add Student Slot</span>
                    </center>
                </div>
            </div>
               
            </div>
            <div className="col-12 shadow-sm rounded bg-white mt-3" >
                <table class="table borderless customtable">
                    <thead>
                        <tr>
                        <th className="font-08 text-dark2 ">TimetableID</th>
                        <th className="font-08 text-dark2 ">Academic Year</th>
                        <th className="font-08 text-dark2 ">Program</th>
                        <th className="font-08 text-dark2 ">Group</th>
                        <th className="font-08 text-dark2 ">Tags</th>
                        <th className="font-08 text-dark2 ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>WE001</td>
                            <td>Y3S2</td>
                            <td>SE</td>
                            <td>8.2</td>
                            <td>Labs, Lecture, Tutorial</td>
                            <td>
                                <span className="badge badge-info rounded-0 bg-white text-success border border-info click font-weight-bold ">Edit</span>
                                <Link to="/student/delete_student_slot" >
                                    <span className="badge badge-info rounded-0 bg-white text-danger border border-danger click font-weight-bold ">Delete</span>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    </main>
  </div>
  );}
}

export default studentTBlist;
