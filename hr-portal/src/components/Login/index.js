import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import  Validator from 'validator';
import { Link } from "react-router-dom";
import { Form, Input, Button, Card, Checkbox } from 'antd';
import InlineError from '../messages/InlineError';
import { loginUser } from "../../redux/actions";

class Login extends Component {
    

    constructor(props) {
        super(props);
        // defining the state to the component
        this.state = {
            data: {
                email: 'abc@abc.com',
                password: 'abcabc',
                isBusiness:true
            },
            loading: false,
            errors: {}
      }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.isUserLoggedIn) {            
            if(state.data.isBusiness){
                props.history.push("/main");
            } else{
                props.history.push("/empStatusUpdates");
            }
        } 
        return null;
      }

    
    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value}
    });
    
    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});        
        if(Object.keys(errors).length===0){
            this.props.dispatch(loginUser(this.state.data.email, this.state.data.password));
        }
    };

    validate = data => {
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.email = "Invalid Email";
        if(!data.password) errors.password = "Can't be empty";
        return errors;
    }


    render() { 
        const { data, errors } = this.state
        return ( 
            <div>
                <Card title="Login">
            <Form>
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
                <Checkbox name="isBusiness" checked={data.isBusiness} onChange={this.onChange}>Business</Checkbox>,
                <Button type="primary" onClick={this.onSubmit}>Submit</Button>   
                <p><Link to={{pathname: "/signup"}}>SignUp</Link></p>
            </Form></Card>
            </div>
         );
    }
}

Login.propTypes = {
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.Auth.isUserLoggedIn,
        userObject: state.Auth.userObject
    };
};
 
export default connect(mapStateToProps)(Login);