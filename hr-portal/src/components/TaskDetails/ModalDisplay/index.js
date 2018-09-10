import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InlineError from '../../messages/InlineError';
import { Modal, Form, Input, Row, Col, Button, DatePicker, Card} from 'antd';

const { TextArea } = Input;

class ModalDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible: false,
            comments:[{
                taskMsg:"",
                empMsg:"",
                businessMsg:"",
                createdAt:"",
                loggedInUser:"",
                taskAssignedTo:"",
                taskToBeCmpDueDate:"",
                taskCmpExpDueDate:"",
              }],
              errors: {},
         }
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      }

    handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
        this.props.onModalClickParent(this.state.comments);
    }
    
    handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }

    
    onCommentsPropertiesChange = (e) => {
        let comments = Object.assign({}, this.state.comments);
        comments[e.target.name] = [e.target.value];
        return this.setState({comments});
    };

    onTaskDueDateChange = (e, date) => {
        this.setState({
            ...this.state.comments, taskToBeCmpDueDate: date,
        });
    };

    onTaskExpDateChange = (e, date) => {
        this.setState({
            ...this.state.comments, taskCmpExpDueDate: date,
        });
    };


    render() { 
        const { errors, comments } = this.state;
        return ( 
            <div>
                <Row>
                    <Col>
                            <Button type="primary" onClick={this.showModal}>
                            Add Comments
                            </Button>
                            <Modal title="Additional Comments" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                                
                                <Form.Item error={!!errors.taskMsg}  label="Task Comments">
                                    <TextArea id="taskMsg" type="taskMsg" name="taskMsg" value={comments.taskMsg} onChange={this.onCommentsPropertiesChange} placeholder= "Add Task Comments if any" />
                                    {errors.taskMsg && <InlineError text= {errors.taskMsg}/>}
                                </Form.Item>

                                <Form.Item error={!!errors.empMsg}  label="Employee Comments">
                                    <TextArea id="empMsg" type="empMsg" name="empMsg" value={comments.empMsg} onChange={this.onCommentsPropertiesChange} placeholder= "Add Comments for Employees" />
                                    {errors.empMsg && <InlineError text= {errors.empMsg}/>}
                                </Form.Item>

                                <Form.Item error={!!errors.businessMsg}  label="Business Comments">
                                    <TextArea id="businessMsg" type="businessMsg" name="businessMsg" value={comments.businessMsg} onChange={this.onCommentsPropertiesChange} placeholder= "Add Business Comments if any" />
                                    {errors.businessMsg && <InlineError text= {errors.businessMsg}/>}
                                </Form.Item>

                                <Form.Item error={!!errors.taskToBeCmpDueDate} label="Task Completion Due Date">
                                    <DatePicker onChange={this.onTaskDueDateChange} placeholder= "Due Date" defaultValue={comments.taskToBeCmpDueDate}/>
                                    {errors.taskToBeCmpDueDate && <InlineError text= {errors.taskToBeCmpDueDate}/>}
                                </Form.Item>

                                <Form.Item error={!!errors.taskCmpExpDueDate} label="Task Completion Expected Date">
                                    <DatePicker onChange={this.onTaskExpDateChange} placeholder= "Expected Date" defaultValue={comments.taskCmpExpDueDate}/>
                                    {errors.taskCmpExpDueDate && <InlineError text= {errors.taskCmpExpDueDate}/>}
                                </Form.Item>

                                <Form.Item error={!!errors.taskAssignedTo} label="Employee Verified Work Location">
                                    <Input id="taskAssignedTo" type="taskAssignedTo" name="taskAssignedTo" value= {comments.taskAssignedTo} onChange={this.onCommentsPropertiesChange} placeholder="Emp Verified Work Loc'n" />
                                    {errors.taskAssignedTo && <InlineError text= {errors.taskAssignedTo}/>}
                                </Form.Item>
                            
                            </Modal>
                        
                    </Col>
                </Row>
            </div>
         );
    }
}


 
export default ModalDisplay;