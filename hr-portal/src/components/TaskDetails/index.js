import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Button, Collapse, Tabs, Input, InputNumber, Select, Upload, Icon } from 'antd';
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/actions/Auth";
import { Row, Col, Card, Radio } from 'antd';
import { getTaskByEmpId } from "../../redux/actions/Employee";


const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
const { TextArea } = Input;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class TaskDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empVerifiedWrkLocation: true,
            rectrSentPlacDet:true,
            rectrSentVenAgreeSignedCopy:true,
            empVerifiedWrkLocation:true,
            empSignedOfferLetter:true,
            workLocation:{
                address1:"",
                address2:"",
                city:"",
                state:"",
                zipCode:""
              }
        }
    };
    onRadioButtonChange=(e)=>{        
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    componentDidUpdate(prevProps) {
    };
    componentDidMount() {
        this.props.dispatch(getTaskByEmpId(this.props.match.params.id));
    };
    static getDerivedStateFromProps(props, state) {
        return null;
    };
    onSubmit = () => {
        this.props.dispatch(logoutUser(this.props.userObject.user.uid));
    };
    onChange = (e) => { 
        let workLocation = this.state.workLocation;
        workLocation[e.target.name] = [e.target.value];
        return this.setState({workLocation});
    };

    render() {
        const { modeHor } = 'top';
        const { modeVer } = 'left';
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        const { workLocation } =  this.state; 
        return (
            <div>
                <h3>HOME COMPONENT</h3>
                <Button type="primary">
                    <Link to={{ pathname: "/main" }}>Back to Main</Link>
                </Button>
                <Collapse accordion>
                    <Panel header="From Employee" key="1">
                        <Row>
                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Card title="WorkLocation">                                 
                                    <Input id="address1"  type="text" name="address1" value= {workLocation.address1} onChange={this.onChange} placeholder="Address 1"  /> 
                                    <Input id="address2" type="text" name="address2" value= {workLocation.address2} onChange={this.onChange} placeholder="Address 2"  /> 
                                    <Input id="city" type="text" name="city" value= {workLocation.city} onChange={this.onChange} placeholder="city"  /> 
                                    <Input id="state" type="text" name="state" value= {workLocation.state} onChange={this.onChange} placeholder="state"  /> 
                                    <Input id="zipcode" type="text" name="zipcode" value= {workLocation.zipcode} onChange={this.onChange} placeholder="zipcode"  /> 
                                </Card>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Card title="Vendor">
                                    <Input id="address1"  type="text" name="address1" value= {workLocation.address1} onChange={this.onChange} placeholder="Address 1"  /> 
                                    <Input id="address2" type="text" name="address2" value= {workLocation.address2} onChange={this.onChange} placeholder="Address 2"  /> 
                                    <Input id="city" type="text" name="city" value= {workLocation.city} onChange={this.onChange} placeholder="city"  /> 
                                    <Input id="state" type="text" name="state" value= {workLocation.state} onChange={this.onChange} placeholder="state"  /> 
                                    <Input id="zipcode" type="text" name="zipcode" value= {workLocation.zipcode} onChange={this.onChange} placeholder="zipcode"  /> 
                                </Card>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                            <Card title="Client">
                                    <Input id="address1"  type="text" name="address1" value= {workLocation.address1} onChange={this.onChange} placeholder="Address 1"  /> 
                                    <Input id="address2" type="text" name="address2" value= {workLocation.address2} onChange={this.onChange} placeholder="Address 2"  /> 
                                    <Input id="city" type="text" name="city" value= {workLocation.city} onChange={this.onChange} placeholder="city"  /> 
                                    <Input id="state" type="text" name="state" value= {workLocation.state} onChange={this.onChange} placeholder="state"  /> 
                                    <Input id="zipcode" type="text" name="zipcode" value= {workLocation.zipcode} onChange={this.onChange} placeholder="zipcode"  /> 
                                </Card>
                            </Col>
                        </Row>
                    </Panel>
                    <Panel header="From Recruiter" key="2">
                        <Row>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <Card>
                                    <span>Employee Verified Work Location </span>
                                    <RadioGroup name="empVerifiedWrkLocation" onChange={this.onRadioButtonChange} value={this.state.empVerifiedWrkLocation}>                                    
                                        <Radio style={radioStyle} value={true}>Yes</Radio>
                                        <Radio style={radioStyle} value={false}>No</Radio>        
                                    </RadioGroup>                                
                                </Card>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <Card>
                                    <Input placeholder="Work Site Address" />
                                </Card>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <Card>
                                    <Input placeholder="Work Site Address" />
                                </Card>
                            </Col>
                        </Row>
                    </Panel>
                    <Panel header="LCA Documents and Application for Certification" key="3">
                                                
                    </Panel>
                    <Panel header="Upload your H1B Documents" key="4">
                        
                    </Panel>
                    <Panel header="Submitted Documents Review by HR" key="5">
                        <Card title="Card title">
                            <span>Documents Reviewed: </span>
                            <RadioGroup onChange={this.onChange} value={this.state.empVerifiedWrkLocation}>                                    
                                <Radio style={radioStyle} value={true}>Yes</Radio>
                                <Radio style={radioStyle} value={false}>No</Radio>        
                            </RadioGroup> 
                        </Card>
                    </Panel>
                    <Panel header="Send Reviewed Documents to Attorney" key="6">

                    </Panel>
                    <Panel header="Documents Reviewed by Attorney" key="7">

                    </Panel>
                    <Panel header="Documents accepted by Attorney" key="8">

                    </Panel>
                    <Panel header="Attorney files the petition with USCIS and shares the FEDEX Number" key="9">

                    </Panel>
                    <Panel header="User receives the FEDEX number for the petition filed" key="10">

                    </Panel>
                </Collapse>
                <Button type="primary" onClick={this.onSubmit}>Submit</Button>
            </div>
        );
    }
}

TaskDetails.propTypes = {

}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.Auth.isUserLoggedIn,
        userObject: state.Auth.userObject,
        taskSelected : state.EmpData.taskSelected
    };
};


export default connect(mapStateToProps)(TaskDetails);