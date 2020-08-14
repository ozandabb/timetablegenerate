import React from 'react';
import Sidebar from '../Components/Sidebar'

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
                            <td><span className="badge badge-info rounded-0 bg-white text-primary border border-info click font-weight-bold ">More Info</span></td>
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
