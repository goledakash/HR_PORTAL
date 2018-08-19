import React, {Component} from 'react';
import Button from 'antd/lib/button';
import { Form, Icon, Input, Checkbox } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Form onSubmit=""> 
            <Form.Item>
                <h3>Login</h3>
                <Input id="email" type="email" value= "email" placeholder="Email" />
                <Input id="password" type="password" value= "password" placeholder="Password" />
                <Button type="primary">log in</Button>
            </Form.Item>
            </Form> 
         );
    }
}
 
export default Login;