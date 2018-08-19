import React, {Component} from 'react';
import Button from 'antd/lib/button';
import { Form, Icon, Input, Checkbox } from 'antd';
import { signupUser } from "../../redux/actions";
const FormItem = Form.Item;



class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
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
        if(Object.keys(errors).length===0){
            // this.props.submit(this.state.data);
            console.log(this.state.data);
            this.props.dispatch(
                signupUser(
                  this.state.data.firstName,
                  this.state.data.lastName,
                  this.state.data.email,
                  this.state.data.password
                )
              );
            // this.props.history.push("/login");
        }
    };
    
    render() { 
        const { data, errors } = this.state
        return (
            <Form onSubmit={this.onSubmit}> 
                <h3>Signup</h3>
                <Form.Item>
                    <Input 
                    id="firstName" 
                    type="text" 
                    value= {data.firstName} 
                    onChange={this.onChange}
                    placeholder="firstName" 
                    />
                </Form.Item>
                <Form.Item>
                    <Input 
                    id="lastName" 
                    type="text" 
                    value= {data.lastName} 
                    onChange={this.onChange}
                    placeholder="lastName" 
                    />
                </Form.Item>
                <Form.Item>
                    <Input 
                    id="email" 
                    type="email" 
                    value= {data.email}
                    onChange={this.onChange}
                    placeholder="Email" 
                    />
                </Form.Item>
                <Form.Item>
                    <Input 
                    id="password" 
                    type="password" 
                    value= {data.password}
                    onChange={this.onChange} 
                    placeholder="Password" 
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form> 
         );
    }
}
 
export default Signup;
