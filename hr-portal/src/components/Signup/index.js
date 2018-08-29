import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import  Validator from 'validator';

import { Form, Input, Button, Radio } from 'antd';
import InlineError from '../messages/InlineError';
import { signupUser } from "../../redux/actions";
import { signupSaveToFirebaseDatabase } from "../../redux/actions/Auth/"

const RadioGroup = Radio.Group;

const options = [
    { label: 'user', value: 'user' },
    { label: 'admin', value: 'admin' },
  ];

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                userType: ''
            },
            loading: false,
            errors: {}
         }
    }

    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value}
    });

    onSubmit = e => {
        const errors = this.validate(this.state.data);
        this.setState({errors});
        console.log(this.state.data);
        if(Object.keys(errors).length===0){
            // this.props.submit(this.state.data);
            console.log(this.state.data);
            this.props.dispatch(
                signupUser(
                  this.state.data.firstName,
                  this.state.data.lastName,
                  this.state.data.email,
                  this.state.data.password,
                  this.state.data.userType,
                )
              );
              this.props.dispatch(
                signupSaveToFirebaseDatabase(
                  this.state.data.firstName,
                  this.state.data.lastName,
                  this.state.data.email,
                  this.state.data.password,
                  this.state.data.userType,
                )
              );
             this.props.history.push("/login");
        }
    };

    


    validate = data => {
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.email = "Invalid Email";
        if(!data.password) errors.password = "Can't be empty";
        if(!data.firstName) errors.firstName = "Can't be empty";
        if(!data.lastName) errors.lastName = "Can't be empty";
        if(!data.userType) errors.userType = "Please Select";
        return errors;
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("History props ", this.nextProps.history);
        console.log("next user Object", nextProps.userObject);
      }

    
    render() { 
        const { data, errors } = this.state
        return (
            <Form > 
                <h3>Signup</h3>
                <Form.Item error={!!errors.firstName}>
                        <Input 
                        id="firstName" 
                        type="firstName" 
                        name="firstName"
                        value= {data.firstName} 
                        onChange={this.onChange}
                        placeholder="First Name" 
                        />
                    {errors.firstName && <InlineError text= {errors.firstName}/>}
                </Form.Item>
                <Form.Item error={!!errors.lastName}>
                        <Input 
                        id="lastName" 
                        type="lastName" 
                        name="lastName" 
                        value= {data.lastName} 
                        onChange={this.onChange}
                        placeholder="Last Name" 
                        />
                    {errors.lastName && <InlineError text= {errors.lastName}/>}
                </Form.Item>
                <Form.Item error={!!errors.email}>
                        <Input 
                        id="email" 
                        type="email" 
                        name="email" 
                        value= {data.email}
                        onChange={this.onChange}
                        placeholder="example@example.com" 
                        />
                    {errors.email && <InlineError text= {errors.email}/>}
                </Form.Item>
                <Form.Item error={!!errors.password}>
                        <Input 
                        id="password" 
                        type="password" 
                        name="password" 
                        value= {data.password}
                        onChange={this.onChange} 
                        placeholder="Make it Secure" 
                        />
                    {errors.password && <InlineError text= {errors.password}/>}
                </Form.Item>
                {/* <Form.Item error={!!errors.userType}>
                    <RadioGroup id="userType" type="userType" name="userType" onChange={this.onChangeRadio}>
                        <Radio value={data.userType}>User</Radio>
                        <Radio value={data.userType}>Admin</Radio>
                    </RadioGroup>
                {errors.userType && <InlineError text= {errors.userType}/>}
                </Form.Item> */}

                <RadioGroup name="userType" options={options} onChange={this.onChange} value={data.userType} />
                <br />
                <br />
                    <Button type="primary" onClick={this.onSubmit}>Submit</Button>
            </Form> 
         );
    }
}


Signup.propTypes = {
    submit: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
      userObject: state.Auth.userObject
    };
};

export default connect(mapStateToProps)(Signup);
