import React from 'react';
import Sidebar from '../Components/Sidebar'
import { FormInput, FormSelect, MultiFormSelect } from '../Components/Form'
import moment from 'moment';
import { omit } from 'lodash'
import { FilePond, registerPlugin } from 'react-filepond';


import 'filepond/dist/filepond.min.css';


class AddLecturer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            employeeID: '',
            faculty: '',
            center: '',
            building: '',
            level: '',
            rank: '',


            errors: {
                name: false,
                employeeID: false,
                faculty: false,
                center: false,
                building: false,
                level: false,
                rank: false,

            }
        };
    }

    formValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.is_filled(e.target.name, e.target.value);
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.validate()
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="app" >
                <Sidebar activemenu={'LECTURER'} submenu={'ADD_LECTURER'} />
                <main>
                    <div className="container-fluid" >
                        <div className="row" >
                            <div className="col-12 shadow-sm rounded bg-white mt-1" >
                                <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Add Lecturer<br></br>
                                    <span className="text-muted small">You can add new lecturer</span></h6>
                            </div>
                            <div className="col-12 shadow-sm rounded bg-white mt-3 pb-1" >
                                <form onSubmit={(e) => this.onFormSubmit(e)}>
                                    <div className="row mt-1 pb-3" >
                                        <div className="col-md-6 row ">
                                            <div className="col-md-12 mt-2 mb-1">  
                                            <p className="m-0 p-0">Profile Image</p> 
                                                    <hr className="mt-0 pt-0"/>
                                                    <center>
                                                    <img style={{height:'150px'}} className="img-fluid rounded-circle mt-2" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" />
                                                    </center>
                                            </div>
                                            <div className="col-md-12 mt-2 mb-1" >
                                               
                                                <FormInput
                                                    label={'Name '}
                                                    placeholder={'Enter Name'}
                                                    error={errors.name}
                                                    value={this.state.name}
                                                    name="name"
                                                    onChange={this.formValueChange}
                                                    error_meesage={'*Name required'}
                                                />
                                                <FormInput
                                                    label={'Employee ID '}
                                                    placeholder={'Enter Employee ID'}
                                                    error={errors.employeeID}
                                                    value={this.state.employeeID}
                                                    name="employeeID"
                                                    onChange={this.formValueChange}
                                                    error_meesage={'*Employee ID required'}
                                                />
                                            </div>

                                        </div>
                                        <div className="col-md-6 row">
                                        <div className="col-md-12 mt-2 mb-1">  
                                            <p className="m-0 p-0">Lecturer Details</p> 
                                                    <hr className="mt-0 pt-0"/>
                                                    </div>
                                            <div className="col-md-12 mt-2 mb-1" >
                                                <FormInput
                                                    label={'Faculty '}
                                                    placeholder={'Enter Faculty'}
                                                    error={errors.faculty}
                                                    value={this.state.faculty}
                                                    name="faculty"
                                                    onChange={this.formValueChange}
                                                    error_meesage={'*Faculty required'}
                                                />
                                            </div>
                                            <div className="col-md-12 mt-2 mb-1" >
                                                <FormInput
                                                    label={'Center '}
                                                    placeholder={'Enter Center'}
                                                    error={errors.center}
                                                    value={this.state.center}
                                                    name="center"
                                                    onChange={this.formValueChange}
                                                    error_meesage={'*Center required'}
                                                />
                                            </div>

                                            <div className="col-md-12 mt-1 mb-1" >
                                                <FormInput
                                                    label={'Building '}
                                                    placeholder={'Enter Building'}
                                                    error={errors.building}
                                                    value={this.state.building}
                                                    name="building"
                                                    onChange={this.formValueChange}
                                                    error_meesage={'*Building required'}
                                                />
                                            </div>
                                            <div className="col-md-12 mt-1 mb-1" >
                                                <FormInput
                                                    label={'Level '}
                                                    placeholder={'Enter Level'}
                                                    error={errors.level}
                                                    value={this.state.level}
                                                    name="level"
                                                    onChange={this.formValueChange}
                                                    error_meesage={'*Level required'}
                                                />
                                            </div>
                                            <div className="col-md-12 mt-1 mb-1" >
                                                <FormInput
                                                    label={'Rank '}
                                                    placeholder={'Enter Rank'}
                                                    error={errors.rank}
                                                    value={this.state.rank}
                                                    name="rank"
                                                    onChange={this.formValueChange}
                                                    error_meesage={'*Rank required'}
                                                />
                                            </div>
                                        <div className="col-md-12 mt-1 mb-1" >
                                            <button type="submit" className="btn-outline-success mt-2 btn btn-sm px-2 float-right">Add Lecturer</button>
                                        </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    validate = () => {
        let { name,
            employeeID,
            faculty,
            center,
            building,
            level,
            rank, } = this.state;
        let count = 0;
        let errors = {}

        if (name == 'NONE') {
            errors.name = true
            count++
        } else {
            errors.name = false
        }

        if (employeeID.length == 0) {
            errors.employeeID = true
            count++
        } else {
            errors.employeeID = false
        }

        if (faculty.length == 0) {
            errors.faculty = true
            count++
        } else {
            errors.faculty = false
        }
        if (center.length == 0) {
            errors.center = true
            count++
        } else {
            errors.center = false
        }
        if (building.length == 0) {
            errors.building = true
            count++
        } else {
            errors.building = false
        }

        if (level.length == 0) {
            errors.level = true
            count++
        } else {
            errors.level = false
        }
        if (rank.length == 0) {
            errors.rank = true
            count++
        } else {
            errors.rank = false
        }


        this.setState({ errors })
        return count == 0;
    }


    is_filled = (name, value) => {
        let result = (value.length == 0 || value == 'NONE')
        this.setState({ errors: { ...this.state.errors, [name]: result } })
    }



}

const WD_OPTIONS = [{ label: 'Select working days count', value: "NONE" },
...[1, 2, 3, 4, 5, 6, 7].map(i => {
    return {
        label: i + ' Days',
        value: i
    }
})];



export default AddLecturer;
