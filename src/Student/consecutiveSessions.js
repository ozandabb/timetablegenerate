import React from 'react';
import Sidebar from '../Components/Sidebar'
import {FormInput , FormSelect , MultiFormSelect} from '../Components/Form'
import moment from 'moment';
import { omit } from 'lodash';
import {Link} from 'react-router-dom'


class consecutiveSessions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            academicYear: 'NONE',
            semester: 'NONE',
            group_mo: '',
            subgroup_mo: '',
            program:'NONE',
            start : '00:00:00' ,
            end : '00:00:00' ,
            tags : [],
            errors : { 
                academicYear : false , 
                semester : false ,
                group_mo : false ,
                program : false,
                subgroup_mo : false , 
                tags : false ,
            }
        };
    }

    formValueChange = (e) => {
        this.setState({[e.target.name] : e.target.value  });
        this.is_filled( e.target.name , e.target.value );
    }


    handleMultiselect = (newValue) => {
        this.setState({ tags: newValue == null ? [] : newValue  });
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.validate()
    }

    render(){
        return (
          <div className="app" >
          <Sidebar activemenu={'STUDENT'}   submenu={'CONSECUTIVE_SESSION'} />
          <main>
              <div className="container-fluid" >
              <div className="row" >
                  <div className="col-12 shadow-sm rounded bg-white mt-1" >
                  <div class="row">
                      <div class="col-8">
                          <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Consecutive Sessions<br></br>
                          <span className="text-muted small">Dashboard</span></h6>
                      </div>
                      <div class="col-4">
                          <center>
                          <Link to="/student/addconsecutiveSessions" >
                          <span  className="badge badge-info px-5 py-1 mt-4 bg-white border border-info text-info click ">Add Consecutive Sessions</span>
                          </Link>
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

    validate = () => {
        let { academicYear, semester, group_mo ,subgroup_mo,program, tags  } = this.state;
        let count = 0;
        let errors = {}

        if( academicYear == 'NONE'){
            errors.academicYear = true
            count++
        }else{
            errors.academicYear = false 
        }



        if( semester == 'NONE'){
            errors.semester = true
            count++
        }else{
            errors.semester = false 
        }




        if( group_mo.length == 0 ){
            errors.group_mo = true
            count++
        }else{
            errors.group_mo = false 
        }




        if( subgroup_mo.length == 0 ){
            errors.subgroup_mo = true
            count++
        }else{
            errors.subgroup_mo = false 
        }


        if( program == 'NONE'){
            errors.program = true
            count++
        }else{
            errors.program = false 
        }
       


       
        if( tags.length == 0 ){
            errors.tags = true
            count++
        }else{
            errors.tags = false 
        }

        this.setState({errors})
        return count == 0;
    }

    is_filled = (name , value ) => {
       let result = ( value.length == 0 ||  value == 'NONE')
       this.setState({ errors : {...this.state.errors , [name] : result  } })
    }

    startimebefore = (start , end ) => {
        var startTime = moment(start , 'HH:mm:ss');
        var endTime = moment(end, 'HH:mm:ss');
        return startTime.isBefore(endTime) 
    }


}

const WD_OPTIONS = [{ label : 'Select Academic Year' ,value : "NONE" } , 
...[1,2,3,4].map( i => {
    return{
        label : 'Year ' + i  ,
         value : i 
    }
})];

const WD_OPTIONS2 = [{ label : 'Select the Semester' ,value : "NONE" } , 
...[1,2].map( i => {
    return{
        label : 'Semester ' + i  ,
         value : i 
    }
})];

const WD_OPTIONS3 = [{ label : 'Select the Program' ,value : "NONE" } , 
...['SE', 'IT', 'CSSE', 'ARCHI', 'ENG' ].map( i => {
    return{
        label :  i  ,
         value : i 
    }
})];

const WD_OPTIONS4 = [ 
...['Labs', 'Tutorials', 'Lectures' ].map( i => {
    return{
        label :  i  ,
         value : i 
    }
})];


export default consecutiveSessions;
