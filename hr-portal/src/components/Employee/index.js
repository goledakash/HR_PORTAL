import React, {Component} from 'react';
import {Form, Input, DatePicker, Row, Col, TimePicker, Select, Cascader, InputNumber} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Form>
                <FormItem>
                    <h2> Employee Registration </h2>
                    <h3> Section 1 </h3>
                    <Row>
                    <Col span={12}>A1</Col>
                    <Col span={12}>A2</Col>
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


 
export default Employee;