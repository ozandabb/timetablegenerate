import React from 'react';
import Sidebar from '../Components/Sidebar'
import {FormInput , FormSelect , MultiFormSelect} from '../Components/Form'
import moment from 'moment';
import { omit } from 'lodash'

class DeleteTimeslot extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render(){

    return (
        <div className="app" >
        <Sidebar activemenu={'WORKING_DAYS'}   submenu={'DAYS_LIST'} />
        <main>
            <div className="container-fluid" >
            <div className="row" >
                <div className="col-12 shadow-sm rounded bg-white mt-1" >
                    <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Delete Timeslot<br></br>
                    <span className="text-muted small">Timeslots delete confirmation</span></h6>
                </div>
                <div className="col-12 shadow-sm rounded bg-white mt-3 pb-1" >
    
                <div className="row mt-1 pb-3" >
                    <div className="col-md-12 mt-2" >
                    <h6 style={{fontSize : '0.9rem'}}
                        className="text-header text-danger mb-0 font-weight-bold line-hight-1">Are you sure you want to delete this timeslot ?<br></br>
                    <span className="text-muted small">This process can't be undone, All the relevant details will be permanently deleted !</span></h6>
                    </div>
                    <div className="col-md-12 mt-3" >
                        <table class="table borderless customtable mb-0">
                            <thead>
                                <tr>
                                <th className="font-08 text-dark2 ">Timeslot</th>
                                <th className="font-08 text-dark2 ">Start Time</th>
                                <th className="font-08 text-dark2 ">End Time</th>
                                <th className="font-08 text-dark2 ">Duration</th>
                                <th className="font-08 text-dark2 ">Group</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-dark">SLOT 01</td>
                                    <td>08:30 AM</td>
                                    <td>09:30 AM</td>
                                    <td>01 Hour</td>
                                    <td>Weeend</td>
                                   
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-12 mt-1 mb-1" >
                    <hr className="my-2"></hr>
                            <button type="submit" className="btn-danger mt-2 btn btn-sm px-3 py-1">Delete</button>
                            <button type="submit" className="btn-light mt-2 btn btn-sm px-3 py-1 border mx-2">Cancel</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>
    </div>
    );}

    

}

const WD_OPTIONS = [{ label : 'Select working days count' ,value : "NONE" } , 
...[1,2,3,4,5,6,7].map( i => {
    return{
        label : i + ' Days' ,
         value : i 
    }
})];

const WD_DAYS = [...moment.weekdays().map( i => ({label : i  , value : i }) )];


export default DeleteTimeslot;
