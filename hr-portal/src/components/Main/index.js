import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { List, Button, Tabs} from 'antd';
import Header from '../Header';
import { Link } from "react-router-dom";
import { getEmployeeListFromFirebase } from "../../redux/actions/Main";

const TabPane = Tabs.TabPane;

const data = [
    'TASK 1',
    'TASK 2',
    'TASK 3',
  ];

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    static getDerivedStateFromProps(props, state) {
        if(props.isEmployeeRegitered){
            props.dispatch(
                getEmployeeListFromFirebase()
            );
            console.log("In Main Derived State Props");
            console.log(state.employeeListToDisplay);
        }

      }

    onTaskClick = (props) => {
        this.props.history.push("/home");
    };
    
    render() { 
        return ( 
            <div>


                <h2>Main Component</h2>
                    <Header />
                    <Tabs defaultActiveKey="1" >
                    <TabPane tab="Pending" key="1">
                            <List
                            bordered
                            dataSource={data}
                            renderItem={item => (<List.Item onClick={this.onTaskClick}>{item}</List.Item>)}
                        />
                    </TabPane>
                    <TabPane tab="Completed" key="2">
                            <List
                            bordered
                            dataSource={data}
                            renderItem={item => (<List.Item onClick={this.onTaskClick}>{item}</List.Item>)}
                        />
                    </TabPane>
                </Tabs>



            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.Auth.isUserLoggedIn,
        userObject: state.Auth.userObject,
        isEmployeeRegitered: state.Employee.isEmployeeRegitered,
        error: state.Employee.error,
        employeeListToDisplay: state.EmpData.employeeData,
    };
};

export default connect(mapStateToProps)(Main);