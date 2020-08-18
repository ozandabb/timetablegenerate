import React from 'react';
import Sidebar from '../Components/Sidebar';
import {Link} from 'react-router-dom';
import {FormSelect } from '../Components/Form';

class GenerateSubgroup extends React.Component {

  render(){
  return (
    <div className="app" >
    <Sidebar activemenu={'STUDENT'}   submenu={'GENERATE_SUBGROUP'} />
    <main>
        <div className="container-fluid" >
        <div className="row" >
            <div className="col-12 shadow-sm rounded bg-white mt-1" >
            <div class="row">
                <div class="col-8">
                    <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Generate Sub Group ID<br></br>
                    <span className="text-muted small">you can generate sub group ID in here</span></h6>
                </div>
                <div class="col-4">
                    <center>
                    <span  className="badge badge-info px-5 py-1 mt-4 bg-white border border-info text-info click ">Generate</span>
                    </center>
                </div>
            </div>
               
            </div>
            <div className="col-12 shadow-sm rounded bg-white mt-3" >
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="row mt-1 pb-3" >
                        <div className="col">
                        <FormSelect 
                                label={'Academic Year'}
                                options={WD_OPTIONS1}
                                // error={ errors.academicYear}
                                // selected={this.state.academicYear}
                                // onChange={this.formValueChange}
                                name="days_count"
                                // error_meesage={'*Academic Year required'}
                            />
                        </div>
                        <div className="col">
                        <FormSelect 
                                label={'Program'}
                                options={WD_OPTIONS2}
                                // error={ errors.academicYear}
                                // selected={this.state.academicYear}
                                // onChange={this.formValueChange}
                                name="days_count"
                                // error_meesage={'*Academic Year required'}
                            />
                        </div>
                        <div className="col">
                        <FormSelect 
                                label={'Group No'}
                                options={WD_OPTIONS3}
                                // error={ errors.academicYear}
                                // selected={this.state.academicYear}
                                // onChange={this.formValueChange}
                                name="days_count"
                                // error_meesage={'*Academic Year required'}
                            />
                        </div>
                        <div className="col">
                        <FormSelect 
                                label={'Sub Group No'}
                                options={WD_OPTIONS4}
                                // error={ errors.academicYear}
                                // selected={this.state.academicYear}
                                // onChange={this.formValueChange}
                                name="days_count"
                                // error_meesage={'*Academic Year required'}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </main>
  </div>
  );}
}

const WD_OPTIONS1 = [{ label : 'Select' ,value : "NONE" } , 
...['Y1S1', 'Y1S2', 'Y2S1', 'Y2S2','Y3S1' , 'Y3S2' , 'Y4S1' ,'Y4S2'].map( i => {
    return{
        label :  i  ,
         value : i 
    }
})];

const WD_OPTIONS2 = [{ label : 'Select' ,value : "NONE" } , 
...['SE', 'IT', 'CSSE', 'ARCHI', 'ENG' ].map( i => {
    return{
        label :  i  ,
         value : i 
    }
})];

const WD_OPTIONS3 = [{ label : 'Select' ,value : "NONE" } , 
...[1,2, 3, 4,5, 6, 7, 8, 9, 10, 11].map( i => {
    return{
        label :  i  ,
         value : i 
    }
})];

const WD_OPTIONS4 = [{ label : 'Select' ,value : "NONE" } , 
...[1,2].map( i => {
    return{
        label :  i  ,
         value : i 
    }
})];

export default GenerateSubgroup;
