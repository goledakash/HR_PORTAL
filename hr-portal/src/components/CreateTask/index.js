import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import  Validator from 'validator';
import InlineError from '../messages/InlineError';
import { Collapse, Form, Input, Row, Col, Button} from 'antd';

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
         errors: {}
    }

}

    onChange = e => this.setState({
        empDetails: { ...this.state.empDetails, [e.target.name]: e.target.value}
    });

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
                  this.state.empDetails.firstName,
                  this.state.empDetails.lastName,
                  this.state.empDetails.emailId01,
                  this.state.empDetails.emailId02,
                  this.state.empDetails.phoneNo,
                  this.state.empDetails.contDetails.address1,
                  this.state.empDetails.contDetails.address2,
                  this.state.empDetails.contDetails.city,
                  this.state.empDetails.contDetails.state,
                  this.state.empDetails.contDetails.zipcode,
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
                <h3>CREATE TASK COMPONENT</h3>
                <Collapse accordion>
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
                                            onChange={this.onChange}
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
                                        onChange={this.onChange}
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
                                            onChange={this.onChange}
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
                                            onChange={this.onChange}
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
                                                onChange={this.onChange} 
                                                placeholder= "Enter Your Zipcode"
                                                />
                                                {errors.zipCode && <InlineError text= {errors.zipCode}/>}
                                            </Form.Item>
                                        </Col>
                                    </Row>


                            <Button type="primary" onClick={this.onSubmit}>Submit</Button>
                        </Form>
                    </Panel>





                    <Panel header="This is panel header 2" key="2">
                        <Form>
                            
                        </Form>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
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