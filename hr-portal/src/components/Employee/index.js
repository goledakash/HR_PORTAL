import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {Form, Button, Input, DatePicker, Row, Col, TimePicker, Select, Cascader, InputNumber} from 'antd';
import { Link } from "react-router-dom";

const FormItem = Form.Item;
const Option = Select.Option;

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            empDetails: {
                firstName: '',
                lastName: '',
            }
         }
    }

    onChange = e => this.setState({
        data: { ...this.state.empDetails, [e.target.name]: e.target.value}
    });

    // static getDerivedStateFromProps(props, state) {
    //     if (props.isUserLoggedIn) {
    //       props.history.push("/home");
    //     }
    //   }


    render() { 
        return ( 
            <Form>
                    <Button type="primary">
                        <Link to={{pathname: "/main"}}>Back to Main</Link>
                    </Button>
                <FormItem>
                    <h2> Employee Registration </h2>
                    <h3> Section 1 </h3>
                    <Row>
                        <Col span={8}>
                            <Input 
                            id="firstName" 
                            type="firstName" 
                            name="firstName"
                            value= {this.state.empDetails.firstName} 
                            onChange={this.onChange}
                            placeholder="First Name" 
                            />
                        </Col>
                        <Col span={8}>
                            <Input 
                            id="lastName" 
                            type="lastName" 
                            name="lastName" 
                            value= {this.state.empDetails.lastName} 
                            onChange={this.onChange}
                            placeholder="Last Name" 
                            />
                        </Col>
                    </Row>
                    <Row>
                    <Col span={12}>B1</Col>
                    <Col span={12}>B2</Col>
                    </Row>
                    <Row>
                    <Col span={12}>C1</Col>
                    <Col span={12}>C2</Col>
                    </Row>
                </FormItem>

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