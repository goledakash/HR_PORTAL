import React, {Component} from 'react';
import {Button} from 'antd';

import { Link } from "react-router-dom";

class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {  }
    }


render() {
    return ( 
        <div>
            <Button type="primary">
                <Link
                to={{
                  pathname: "/employeeRegister"
                }}>New Employee
                </Link>
            </Button>
        </div>
     );
    }
}
 
export default Header;