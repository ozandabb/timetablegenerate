import React from 'react';
import Sidebar from '../Components/Sidebar'

class WorkingDays extends React.Component {

  render(){
  return (
    <div className="app" >
    <Sidebar activemenu={'WORKING_DAYS'}   submenu={'DAYS_LIST'} />
    <main>
        <div className="container-fluid" >
        <div className="row" >
            <div className="col-12 shadow-sm rounded bg-white mt-1" >
                <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Working Days Groups<br></br>
                <span className="text-muted small">Details about groups</span></h6>
            </div>
            <div className="col-12 shadow-sm rounded bg-white mt-3" >
                <table class="table borderless customtable">
                    <thead>
                        <tr>
                        <th className="font-08 text-dark2 ">List ID</th>
                        <th className="font-08 text-dark2 ">List Name</th>
                        <th className="font-08 text-dark2 ">#No of Days</th>
                        <th className="font-08 text-dark2 ">Days List</th>
                        <th className="font-08 text-dark2 ">Working Time</th>
                        <th className="font-08 text-dark2 ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Weekend</td>
                            <td>2 Days</td>
                            <td>Saturday, Sunday</td>
                            <td>08-30 : 20:30</td>
                            <td><span className="badge badge-info rounded-0 bg-white text-primary click font-weight-bold ">More Info</span></td>
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

export default WorkingDays;
