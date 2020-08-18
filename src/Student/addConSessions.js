import React from 'react';
import Sidebar from '../Components/Sidebar'
import {FormInput , FormSelect , MultiFormSelect} from '../Components/Form'
import moment from 'moment';
import { omit } from 'lodash'

class addconsecutiveSessions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type : '1',
            group : 'Weekend',
            start : '08:30:00' ,
            end : moment( '08:30:00' , 'HH:mm:ss').add( 60 , 'minutes').format('HH:mm:ss'),
            start_time : '08:30:00',
            end_time : '19:30:00',
            conflict : true
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
        const timeslots = this.generateSlots();

    return (
        <div className="app" >
        <Sidebar activemenu={'STUDENT'}   submenu={'CONSECUTIVE_SESSION'} />
        <main>
            <div className="container-fluid" >
            <div className="row" >
                <div className="col-12 shadow-sm rounded bg-white mt-1" >
                    <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Add Consecutive Sessions<br></br>
                    <span className="text-muted small">You can add Consecutive Sessions</span></h6>
                </div>
                <div className="col-12 shadow-sm rounded bg-white mt-3 pb-1" >
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                <div className="row mt-1 pb-3" >
                    <div className="col-md-6 mt-2 mb-1" >
                            <FormSelect 
                                label={'Add sub group ID'}
                                options={WD_OPTIONS1}
                                // error={ errors.academicYear}
                                // selected={this.state.academicYear}
                                // onChange={this.formValueChange}
                                name="days_count"
                                error_meesage={'*Academic Year required'}
                            />
                    </div>
                    <div className="col-md-12 mt-1 mb-1" >
                            <MultiFormSelect 
                                label={'Add Tags'}
                                // error={errors.tags}
                                // onChange={this.handleMultiselect}
                                placeholder={'Select Tags'}
                                options={WD_OPTIONS4}
                                error_meesage={'*Tags required'}
                            />
                    </div>

                    <div className="col-md-6 mt-1 mb-1" >
                            <FormSelect 
                                label={'Timeslot Start Time'}
                                name="start"
                                options={timeslots.filter( (e,i,a) => i < a.length - 1 )}
                                onChange={this.timeChange}
                                value={this.state.start}
                            />
                    </div>
                    <div className="col-md-6 mt-1 mb-1" >
                            <FormSelect 
                                label={'Timeslot End Time'}
                                name="end"
                                options={timeslots.filter( (e,i) => i != 0 )}
                                onChange={this.timeChange}
                                value={this.state.end}
                            />
                    </div>
                    <div className="col-md-12 mt-1 mb-1" >
                            <button type="submit" className="btn-outline-info mt-2 btn btn-sm px-2 ">Add Consecutive Session</button>
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

    generateSlots = () => {
        const type =  this.state.type == '1' ? 60 : 30;
        var timeStops = [];
        var startTime = moment(this.state.start_time , 'HH:mm:ss')
        var endTime = moment(this.state.end_time , 'HH:mm:ss')

        while(startTime <= endTime){
            let time = new moment(startTime);
            timeStops.push({ label : time.format('HH:mm a') , value : time.format('HH:mm:ss') });
            startTime.add(type, 'minutes');
        }

        return timeStops;
    }


}

const WD_OPTIONS1 = [{ label : 'Select Sub group ID' ,value : "NONE" } , 
...['Y1S2.IT.9.2', 'Y3S2.SE.9.1'].map( i => {
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


export default addconsecutiveSessions;
