import React from 'react';
import Sidebar from '../Components/Sidebar'
import {FormInput , FormSelect , MultiFormSelect} from '../Components/Form'
import moment from 'moment';

class AddWorkingDays extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            days_count: 'NONE',
            group_name: '',
            start : '00:00:00' ,
            end : '00:00:00' ,
            days : [],
        };
    }

    formValueChange = (e) => {
        this.setState({[e.target.name] : e.target.value });
    }

    handleMultiselect = (newValue) => {

        this.setState({ days: newValue == null ? [] : newValue , 
            days_count : newValue && newValue.length > 0 ?  newValue.length.toString() : 'NONE' });
    };

    render(){
    return (
        <div className="app" >
        <Sidebar activemenu={'WORKING_DAYS'}   submenu={'ADD_WORKING_DAYS'} />
        <main>
            <div className="container-fluid" >
            <div className="row" >
                <div className="col-12 shadow-sm rounded bg-white mt-1" >
                    <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Add New Working Days<br></br>
                    <span className="text-muted small">You can add new working days groups</span></h6>
                </div>

                {/* working days count and name */}
                <div className="col-12 shadow-sm rounded bg-white mt-3 pb-1" >
                <div className="row mt-1 pb-3" >
                    <div className="col-md-6 mt-2 mb-1" >
                            <FormSelect 
                                label={'Working Days Count'}
                                options={WD_OPTIONS}
                                error={false}
                                selected={this.state.days_count}
                                onChange={this.formValueChange}
                                name="days_count"
                                error_meesage={'*Wokring days count required'}
                            />
                    </div>
                    <div className="col-md-6 mt-2 mb-1" >
                            <FormInput 
                                label={'Working Days Group Name'}
                                placeholder={'Enter group name'}
                                error={false}
                                value={this.state.group_name}
                                name="group_name"
                                onChange={this.formValueChange}
                                error_meesage={'*Group name required'}
                            />
                    </div>
                    <div className="col-md-12 mt-1 mb-1" >
                            <MultiFormSelect 
                                label={'Working Days'}
                                error={false}
                                onChange={this.handleMultiselect}
                                placeholder={'Select working days'}
                                options={WD_DAYS}
                                error_meesage={'*Wokring days required'}
                            />
                    </div>
                    <div className="col-md-6 mt-1 mb-1" >
                            <FormInput 
                                label={'Working Day Start Time'}
                                placeholder={'Enter start time'}
                                error={false}
                                name="start"
                                onChange={this.formValueChange}
                                value={this.state.start}
                                error_meesage={'*Start time required'}
                                type={'time'}
                            />
                    </div>
                    <div className="col-md-6 mt-1 mb-1" >
                            <FormInput 
                                label={'Working Day End Time'}
                                placeholder={'Enter End time'}
                                error={false}
                                name="end"
                                onChange={this.formValueChange}
                                value={this.state.end}
                                error_meesage={'*End time required'}
                                type={'time'}
                            />
                    </div>
                    <div className="col-md-12 mt-1 mb-1" >
                            <button className="btn-outline-info mt-2 btn btn-sm px-2 ">Submit Working Days</button>
                            {JSON.stringify(this.state)}
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


export default AddWorkingDays;
