import React from 'react';
import Sidebar from '../Components/Sidebar'
import {FormInput , FormSelect , MultiFormSelect} from '../Components/Form'
import moment from 'moment';
import { omit } from 'lodash'

class AddTimeTable extends React.Component {

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
        const {errors} = this.state;
    return (
        <div className="app" >
        <Sidebar activemenu={'STUDENT'}   submenu={'ADD_STUDENT_TIMETABLE'} />
        <main>
            <div className="container-fluid" >
            <div className="row" >
                <div className="col-12 shadow-sm rounded bg-white mt-1" >
                    <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Add Student Timetable<br></br>
                    <span className="text-muted small">You can add new timetable for Student</span></h6>
                </div>
                <div className="col-12 shadow-sm rounded bg-white mt-3 pb-1" >
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                <div className="row mt-1 pb-3" >
                    <div className="col-md-6 mt-2 mb-1" >
                            <FormSelect 
                                label={'Add an Academic Year'}
                                options={WD_OPTIONS}
                                error={ errors.academicYear}
                                selected={this.state.academicYear}
                                onChange={this.formValueChange}
                                name="days_count"
                                error_meesage={'*Academic Year required'}
                            />
                    </div>
                    <div className="col-md-6 mt-2 mb-1" >
                        <FormSelect 
                                label={'Add Semester'}
                                options={WD_OPTIONS2}
                                error={ errors.semester}
                                selected={this.state.semester}
                                onChange={this.formValueChange}
                                name="days_count"
                                error_meesage={'*Semester required'}
                            />
                    </div>
                   
                    <div className="col-md-6 mt-1 mb-1" >
                            <FormInput 
                                label={'Add Group No'}
                                placeholder={'Enter group number'}
                                error={ errors.group_mo}
                                value={this.state.group_mo}
                                name="group_name"
                                onChange={this.formValueChange}
                                error_meesage={'*Group Number required'}
                            />
                    </div>
                    <div className="col-md-6 mt-1 mb-1" >
                            <FormInput 
                                label={'Add Sub Group No'}
                                placeholder={'Enter sub group number'}
                                error={ errors.subgroup_mo}
                                value={this.state.subgroup_mo}
                                name="group_name"
                                onChange={this.formValueChange}
                                error_meesage={'*Sub Group Number required'}
                            />
                    </div>
                    <div className="col-md-6 mt-1 mb-1" >
                        <FormSelect 
                                label={'Add Program'}
                                options={WD_OPTIONS3}
                                error={ errors.program}
                                selected={this.state.program}
                                onChange={this.formValueChange}
                                name="days_count"
                                error_meesage={'*Program required'}
                            />
                    </div>
                    <div className="col-md-12 mt-1 mb-1" >
                            <MultiFormSelect 
                                label={'Add Tags'}
                                error={errors.tags}
                                onChange={this.handleMultiselect}
                                placeholder={'Select Tags'}
                                options={WD_OPTIONS4}
                                error_meesage={'*Tags required'}
                            />
                    </div>
                    <div className="col-md-12 mt-1 mb-1" >
                            <button type="submit" className="btn-outline-info mt-2 btn btn-sm px-2 ">Add Student Timetable</button>
                    </div>
                </div>
                </form>
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


export default AddTimeTable;
