import React, {Component} from 'react';
import { List, Button, Tabs} from 'antd';
import Header from '../Header';
import { Link } from "react-router-dom";

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

    onTaskClick = (props) => {
        this.props.history.push("/home");
    };
    
    render() { 
        return ( 
            <div>


                <h2>Main Component</h2>
                    <Header />
                    <Tabs defaultActiveKey="1" >
                    <TabPane tab="Tab 1" key="1">
                        <h3 style={{ marginBottom: 16 }}>Pending</h3>
                            <List
                            bordered
                            dataSource={data}
                            renderItem={item => (<List.Item onClick={this.onTaskClick}>{item}</List.Item>)}
                        />
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        <h3 style={{ marginBottom: 16 }}>Completed</h3>
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

export default Main;