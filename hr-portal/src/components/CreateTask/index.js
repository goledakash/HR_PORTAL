import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import  Validator from 'validator';
import InlineError from '../messages/InlineError';
import { Collapse, Form, Input, Row, Col, Button, DatePicker} from 'antd';
import { Link } from "react-router-dom";
import moment from 'moment';

import { employeeInfoSaveToFirebaseDatabase } from "../../redux/actions/CreateTask";

const Panel = Collapse.Panel;



class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            empDetails:{
                empId: '',
                firstName: '',
                lastName: '',
                emailId01: '',
                emailId02: '',
                phoneNo: '',
                contDetails:{
                  address1:'',
                  address2:'',
                  city:'',
                  state:'',
                  zipCode:''
                }
         },
         workInfo:{
            jobStatus:{
              placementDate: moment('11/08/2017'),
              projectStartDate: moment('11/08/2017'),
              urgentSituation: 'bhjbbhjkjn',
              signedOfferLetter: 'no',
            },
              workLocation:{
                address1: '',
                address2: '',
                city: '',
                state: '',
                zipCode: ''
              }
          },
         errors: {}
    }

}

    onChange = e => this.setState({
        empDetails: { ...this.state.empDetails, [e.target.name]: e.target.value}
    });

    onContactChange = (e) => {
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.contDetails[e.target.name] = e.target.value;        
        return this.setState({empDetails});
    };

    static getDerivedStateFromProps(props, state) {
        return null;
      }



      onSubmit = () => {
        const errors = this.validate(this.state.empDetails);
        if(Object.keys(errors).length===0){
            // this.props.submit(this.state.data);
            console.log(this.state.empDetails);
            this.props.dispatch(
                employeeInfoSaveToFirebaseDatabase(
                    // this.state.employeeDetails.
                  this.state.empDetails,

                )
              );
        }
      };

      validate = empDetails => {
        const errors = {};
        if(!empDetails.firstName) errors.firstName = "Can't be empty";
        if(!empDetails.lastName) errors.lastName = "Can't be empty";
        if(!Validator.isEmail(empDetails.emailId01)) errors.emailId01 = "Invalid Email";
        if(!Validator.isEmail(empDetails.emailId02)) errors.emailId02 = "Invalid Email";
        if(!Validator.isNumeric(empDetails.phoneNo)) errors.phoneNo = "Enter Phone Number";
        if(!empDetails.contDetails.address1) errors.address1 = "Can't be empty";
        if(!empDetails.contDetails.address2) errors.address2 = "Can't be empty";
        if(!empDetails.contDetails.city) errors.city = "Can't be empty";
        if(!empDetails.contDetails.state) errors.state = "Can't be empty";
        if(!Validator.isNumeric(empDetails.contDetails.zipCode)) errors.zipCode = "Enter Zipcode";
        return errors;
      };

    render() { 
        const { empDetails, errors } = this.state;
        return ( 
            <div>
                <h2>CREATE TASKs HERE</h2>
                <Button type="primary">
                        <Link to={{pathname: "/main"}}>Back to Main</Link>
                </Button>
                <Collapse accordion>
{/* Employee Registration */}
                    <Panel header="Employee Registration" key="1">
                        <Form>
                        <Row>
                        <Col span={8}>
                        <Form.Item error={!!errors.firstName}>
                                
                                    <Input 
                                    id="firstName" 
                                    type="firstName" 
                                    name="firstName"
                                    value= {empDetails.firstName} 
                                    onChange={this.onChange}
                                    placeholder="First Name" 
                                    />
                                
                                {errors.firstName && <InlineError text= {errors.firstName}/>}
                            </Form.Item>
                            </Col>
                            <Col span={8}>
                            <Form.Item error={!!errors.lastName}>
                                
                                    <Input 
                                    id="lastName" 
                                    type="lastName" 
                                    name="lastName" 
                                    value= {empDetails.lastName} 
                                    onChange={this.onChange}
                                    placeholder="Last Name" 
                                    />
                                {errors.lastName && <InlineError text= {errors.lastName}/>}
                            </Form.Item>
                            </Col>
                            </Row>

                        <Row>
                        <Col span={8}>
                        <Form.Item error={!!errors.emailId01}>
                                <Input 
                                id="emailId01" 
                                type="emailId01" 
                                name="emailId01" 
                                value= {empDetails.emailId01}
                                onChange={this.onChange}
                                placeholder="Primary Email" 
                                />
                            {errors.emailId01 && <InlineError text= {errors.emailId01}/>}
                        </Form.Item>
                            </Col>
                            <Col span={8}>
                            <Form.Item error={!!errors.emailId02}>
                                    <Input 
                                    id="emailId02" 
                                    type="emailId02" 
                                    name="emailId02" 
                                    value= {empDetails.emailId02}
                                    onChange={this.onChange}
                                    placeholder="Secondary Email" 
                                    />
                                {errors.emailId02 && <InlineError text= {errors.emailId02}/>}
                            </Form.Item>
                            </Col>
                            </Row>

                            <Row>
                                <Col span={8}>
                                <Form.Item error={!!errors.phoneNo}>
                                    <Input 
                                        id="phoneNo" 
                                        type="phoneNo" 
                                        name="phoneNo" 
                                        value={empDetails.phoneNo}
                                        onChange={this.onChange} 
                                        placeholder= "(000) 000-0000"
                                        />
                                        {errors.phoneNo && <InlineError text= {errors.phoneNo}/>}
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={8}>
                                    <Form.Item error={!!errors.address1}>
                                        
                                            <Input 
                                            id="address1" 
                                            type="address1" 
                                            name="address1"
                                            value= {empDetails.contDetails.address1} 
                                            onChange={this.onContactChange}
                                            placeholder="Address 1" 
                                            />
                                        
                                        {errors.address1 && <InlineError text= {errors.address1}/>}
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                <Form.Item error={!!errors.address2}>
                                    
                                        <Input 
                                        id="address2" 
                                        type="address2" 
                                        name="address2"
                                        value= {empDetails.contDetails.address2} 
                                        onChange={this.onContactChange}
                                        placeholder="Address 2" 
                                        />
                                    
                                    {errors.address2 && <InlineError text= {errors.address2}/>}
                                </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={8}>
                                <Form.Item error={!!errors.city}>
                                        
                                            <Input 
                                            id="city" 
                                            type="city" 
                                            name="city"
                                            value= {empDetails.contDetails.city} 
                                            onChange={this.onContactChange}
                                            placeholder="City" 
                                            />
                                        
                                        {errors.city && <InlineError text= {errors.city}/>}
                                    </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                    <Form.Item error={!!errors.state}>
                                        
                                            <Input 
                                            id="state" 
                                            type="state" 
                                            name="state" 
                                            value= {empDetails.contDetails.state} 
                                            onChange={this.onContactChange}
                                            placeholder="State" 
                                            />
                                        {errors.state && <InlineError text= {errors.state}/>}
                                    </Form.Item>
                                    </Col>
                                    </Row>

                                    <Row>
                                        <Col span={8}>
                                        <Form.Item error={!!errors.zipCode}>
                                            <Input 
                                                id="zipCode" 
                                                type="zipCode" 
                                                name="zipCode" 
                                                value={empDetails.contDetails.zipCode}
                                                onChange={this.onContactChange} 
                                                placeholder= "Enter Your Zipcode"
                                                />
                                                {errors.zipCode && <InlineError text= {errors.zipCode}/>}
                                            </Form.Item>
                                        </Col>
                                    </Row>


                            <Button type="primary" onClick={this.onSubmit}>Submit</Button>
                        </Form>
                    </Panel>


{/* WorkInfo */}


                    <Panel header="Work Related Information" key="2">
                        <Form>
                        <Row>
                            <Col span={8}>
                                <Form.Item error={!!errors.placementDate}>
                                    <DatePicker                                   
                                        onChange={this.onPlacementDateChange} 
                                        placeholder= "Placement Date"
                                        defaultValue={empDetails.placementDate}
                                    />
                                    {errors.placementDate && <InlineError text= {errors.placementDate}/>}
                                </Form.Item>
                            </Col>
                        </Row>
                        </Form>
                    </Panel>

{/* ClientInfo */}

                    <Panel header="Client Related Information" key="3">
                        <Form>
                            
                        </Form>
                    </Panel>
{/* VendorInfo */}
                    <Panel header="Vendor Related Information" key="4">
                        <Form>
                            
                        </Form>
                    </Panel>

                </Collapse>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.Auth.isUserLoggedIn,
        userObject: state.Auth.userObject,
    };
};
 
export default connect(mapStateToProps)(CreateTask);