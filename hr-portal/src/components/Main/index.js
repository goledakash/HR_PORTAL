import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Menu, Icon, List, Button, Tabs, Row, Col, Layout} from 'antd';
// import Header from '../Header';
import { Link } from "react-router-dom";
import { getEmployeeListFromFirebase } from "../../redux/actions/Main";

const { Header, Sider, Content } = Layout;

const TabPane = Tabs.TabPane;

// const data = [
//     'TASK 1',
//     'TASK 2',
//     'TASK 3',
//   ];

const SubMenu = Menu.SubMenu;


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            taskList:[],
            collapsed: false,
         }
    }
    
    componentDidUpdate(prevProps) {
        
    }
    componentDidMount(){
        this.props.dispatch(getEmployeeListFromFirebase()); 
    }    
    static getDerivedStateFromProps(props, state) {  
        return state;
      }

    onTaskClick = (empId) => {
        if(empId){
            this.props.history.push("/home"+"/"+empId);    
        }
        
    };

    toggleCollapsed = () => {
        this.setState({collapsed: !this.state.collapsed});
    };

    
    render() { 
        const { taskList } = this.props;
        return ( 
            <Layout>

            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
                            {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                            </Button> */}

                            <div >
                                <Menu
                                defaultSelectedKeys={['1']}
                                mode="inline"
                                theme="light"
                                >
                                        <Menu.Item key="1">
                                            <Icon type="profile" theme="outlined" />
                                            <span>
                                                <Link to={{pathname: "/createTask"}}>Create Task</Link>
                                            </span>
                                        </Menu.Item>
                                        <Menu.Item key="2">
                                            <Icon type="desktop" />
                                            <span>
                                                <Link to={{pathname: "/empStatusUpdates"}}>EmpStatusUpdates</Link>
                                            </span>
                                        </Menu.Item>
                                </Menu>
                            </div>
            </Sider>

            <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggleCollapsed}
                        />
                    </Header>

                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Tabs defaultActiveKey="1" >
                            <TabPane tab="Pending" key="1">
                                <List bordered dataSource={taskList} renderItem={item => (<List.Item onClick={() => this.onTaskClick(item.empId)}>{item.firstName} {item.lastName}</List.Item>)}/>
                            </TabPane>
                            <TabPane tab="Completed" key="2">
                                <List bordered dataSource={this.state.dataEmployeeArray} renderItem={item => (<List.Item onClick={() => this.onTaskClick(item.empId)}>{item.firstName} {item.lastName}</List.Item>)}/>
                            </TabPane>
                        </Tabs>
                    </Content>
            </Layout>

            </Layout>
         );
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.Auth.isUserLoggedIn,
        userObject: state.Auth.userObject,
        isEmployeeRegitered: state.Employee.isEmployeeRegitered,
        error: state.Employee.error,
        taskList: state.EmpData.employeeData,
    };
};

export default connect(mapStateToProps)(Main);