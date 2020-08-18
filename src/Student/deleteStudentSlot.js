import React from 'react';
import Sidebar from '../Components/Sidebar'
import {FormInput , FormSelect , MultiFormSelect} from '../Components/Form'
import moment from 'moment';
import { omit } from 'lodash'
import {Link} from 'react-router-dom'


class DeleteStudentslot extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render(){

    return (
        <div className="app" >
        <Sidebar activemenu={'STUDENT'}   submenu={'STUDENT_TB_LIST'} />
        <main>
            <div className="container-fluid" >
            <div className="row" >
                <div className="col-12 shadow-sm rounded bg-white mt-1" >
                    <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Delete Student Slot<br></br>
                    <span className="text-muted small">Studentslots delete confirmation</span></h6>
                </div>
                <div className="col-12 shadow-sm rounded bg-white mt-3 pb-1" >
    
                <div className="row mt-1 pb-3" >
                    <div className="col-md-12 mt-2" >
                    <h6 style={{fontSize : '0.9rem'}}
                        className="text-header text-danger mb-0 font-weight-bold line-hight-1">Are you sure you want to delete this Studentslots ?<br></br>
                    <span className="text-muted small">This process can't be undone, All the relevant details will be permanently deleted !</span></h6>
                    </div>
                    <div className="col-md-12 mt-3" >
                        <table class="table borderless customtable mb-0">
                            <thead>
                                <tr>
                                <th className="font-08 text-dark2 ">TimetableID</th>
                                <th className="font-08 text-dark2 ">Academic Year</th>
                                <th className="font-08 text-dark2 ">Program</th>
                                <th className="font-08 text-dark2 ">Group</th>
                                <th className="font-08 text-dark2 ">Tags</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>WE001</td>
                                <td>Y3S2</td>
                                <td>SE</td>
                                <td>8.2</td>
                                <td>Labs, Lecture, Tutorial</td>
                                   
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-12 mt-1 mb-1" >
                    <hr className="my-2"></hr>
                            <button type="submit" className="btn-danger mt-2 btn btn-sm px-3 py-1">Delete</button>
                            <Link to="/student/student_tb_list" >
                            <button type="submit" className="btn-light mt-2 btn btn-sm px-3 py-1 border mx-2">Cancel</button>
                            </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>
    </div>
    );}

    

}


export default DeleteStudentslot;
