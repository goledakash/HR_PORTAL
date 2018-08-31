import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import  Validator from 'validator';
import InlineError from '../messages/InlineError';
import {Form, Button, Input, DatePicker, Row, Col, TimePicker, Select, Cascader, InputNumber} from 'antd';
import { Link } from "react-router-dom";
import { employeeSaveToFirebaseDatabase } from "../../redux/actions/Employee"

const FormItem = Form.Item;
const Option = Select.Option;

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            employeeDetails: {
                firstName: '',
                lastName: '',
            },
            errors: {}
         }
    }

    onChange = e => this.setState({
        employeeDetails: { ...this.state.employeeDetails, [e.target.name]: e.target.value}
    });

    static getDerivedStateFromProps(props, state) {
        if (!props.isUserLoggedIn) {
          props.history.push("/main");
        }
      }

    onSubmit = () => { 

        const errors = this.validate(this.state.employeeDetails);
        this.setState({errors});
        if(Object.keys(errors).length===0){
            // this.props.submit(this.state.data);
            console.log(this.state.employeeDetails);
            this.props.dispatch(
                employeeSaveToFirebaseDatabase(
                  this.state.employeeDetails.firstName,
                  this.state.employeeDetails.lastName,
                )
              );
        }
    };

    validate = employeeDetails => {
        const errors = {};
        if(!employeeDetails.firstName) errors.firstName = "Can't be empty";
        if(!employeeDetails.lastName) errors.lastName = "Can't be empty";
        return errors;
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("History props ", this.nextProps.history);
        console.log("next user Object", nextProps.userObject);
      }

    render() { 
        const { employeeDetails, errors } = this.state;
        return ( 
            <Form>
                    <Button type="primary">
                        <Link to={{pathname: "/main"}}>Back to Main</Link>
                    </Button>
                    <h2> Employee Registration </h2>
                    <h3> Section 1 </h3>
                    <Row>
                        <Form.Item error={!!errors.firstName}>
                            <Col span={8}>
                                <Input 
                                id="firstName" 
                                type="firstName" 
                                name="firstName"
                                value= {employeeDetails.firstName} 
                                onChange={this.onChange}
                                placeholder="First Name" 
                                />
                            </Col>
                            {errors.firstName && <InlineError text= {errors.firstName}/>}
                        </Form.Item>
                        <Form.Item error={!!errors.lastName}>
                            <Col span={8}>
                                <Input 
                                id="lastName" 
                                type="lastName" 
                                name="lastName" 
                                value= {employeeDetails.lastName} 
                                onChange={this.onChange}
                                placeholder="Last Name" 
                                />
                            </Col>
                            {errors.lastName && <InlineError text= {errors.lastName}/>}
                        </Form.Item>
                    </Row>

                    {/* <Row>
                    <Col span={12}>B1</Col>
                    <Col span={12}>B2</Col>
                    </Row>
                    
                    <Row>
                    <Col span={12}>C1</Col>
                    <Col span={12}>C2</Col>
                    </Row> */}

                <FormItem>
                    <h3> Section 2 </h3>
                    <Row>
                    <Col span={12}>D1</Col>
                    <Col span={12}>D2</Col>
                    </Row>
                    <Row>
                    <Col span={12}>E1</Col>
                    <Col span={12}>E2</Col>
                    </Row>
                    <Row>
                    <Col span={12}>F1</Col>
                    <Col span={12}>F2</Col>
                    </Row>
                </FormItem>
                <br />
                <br />
                    <Button type="primary" onClick={this.onSubmit}>Submit</Button>
            </Form>
         );
    }
    
}


const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.Auth.isUserLoggedIn,
        userObject: state.Auth.userObject
    };
};
 
export default connect(mapStateToProps)(Employee);