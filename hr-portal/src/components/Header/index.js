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
            <div>
            <Button type="primary">
                <Link
                to={{
                  pathname: "/createTask"
                }}>Create or Edit Employee
                </Link>
            </Button>
            </div>
            <div>
            <Button type="primary">
                <Link
                to={{
                  pathname: "/createTask"
                }}>Create Task
                </Link>
            </Button>
            </div>
        </div>
     );
    }
}
 
export default Header;