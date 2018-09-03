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
            empSignedOfferLetter:true
        }
    };
    onRadioButtonChange=(e)=>{
        this.setState({
            empVerifiedWrkLocation: e.target.value,
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
    render() {
        const { modeHor } = 'top';
        const { modeVer } = 'left';
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <div>
                <h3>HOME COMPONENT</h3>
                <Button type="primary">
                    <Link to={{ pathname: "/main" }}>Back to Main</Link>
                </Button>
                <Collapse accordion>
                    <Panel header="From Employee" key="1">
                        <Row>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <Card title="Card title">
                                    <Input placeholder="Work Site Address" />
                                </Card>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <Card title="Card title">
                                  <span>work location:</span>  <Input placeholder="Work Site Address" />
                                </Card>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <Card>
                                    <Input placeholder="Work Site Address" />
                                </Card>
                            </Col>
                        </Row>
                    </Panel>
                    <Panel header="From Recruiter" key="2">
                        <Row>
                            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                                <Card>
                                    <span>Employee Verified Work Location </span>
                                    <RadioGroup onChange={this.onChange} value={this.state.empVerifiedWrkLocation}>                                    
                                        <Radio style={radioStyle} value={true}>Yes</Radio>
                                        <Radio style={radioStyle} value={false}>No</Radio>        
                                    </RadioGroup>                                
                                </Card>
                            </Col>
                            <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                                <Card>
                                    <Input placeholder="Work Site Address" />
                                </Card>
                            </Col>
                            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                                <Card>
                                    <Input placeholder="Work Site Address" />
                                </Card>
                            </Col>
                        </Row>
                    </Panel>
                    <Panel header="LCA Documents and Application for Certification" key="3">
                        <Button type="primary" onClick={this.onPost}>Post</Button>

                        <Tabs
                            defaultActiveKey="1"
                            tabPosition={modeHor}
                            style={{ height: 220 }}
                        >

                            <TabPane tab="STEP 1" key="1">
                                Enter Information
                                            <br />
                                <Input placeholder="Work Site Address" />
                                <br />
                                <Input placeholder="Job Title" />
                                <br />
                                <InputNumber min={1} max={10} defaultValue={3} >Pay Rate</InputNumber>
                                <br />
                                <Select defaultValue="Cases" style={{ width: 120 }}>
                                    <Option value="transferExtension">Transfer Extension</Option>
                                    <Option value="optionB">B</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="optionC">C</Option>
                                </Select>
                                <br />
                                <Button type="primary">Submit</Button>
                                <br />

                            </TabPane>
                            <TabPane tab="STEP 2" key="2">
                                Enter Roles and Responsibilities
                                            <br />
                                <TextArea rows={4} > Roles and Responsibilities </TextArea>
                                <br />
                                <Button type="primary">Submit</Button>
                                <br />
                            </TabPane>
                            <TabPane tab="STEP 3" key="3">Update Information to Business Portal</TabPane>
                            <TabPane tab="STEP 4" key="4">HR/Business Reviews LCA Information</TabPane>
                            <TabPane tab="STEP 5" key="5">File for Certification</TabPane>
                        </Tabs>
                    </Panel>
                    <Panel header="Upload your H1B Documents" key="4">
                        <Tabs
                            defaultActiveKey="1"
                            tabPosition={modeHor}
                            style={{ height: 220 }}
                        >
                            <TabPane tab="STEP 1" key="1">
                                Upload H1B Documents

                                        <Tabs
                                    defaultActiveKey="1"
                                    tabPosition={modeVer}
                                    style={{ height: 220 }}
                                >
                                    <TabPane tab="H1B Questionnaire" key="1">H1B Questionnaire</TabPane>
                                    <TabPane tab="Resume" key="2">
                                        Updated Resume :
                                            <br />
                                        <Upload>
                                            <Button>
                                                <Icon type="upload" /> Upload Resume
                                                </Button>
                                        </Upload>
                                    </TabPane>
                                    <TabPane tab="i140" key="3">
                                        i140 Approval :
                                            <br />
                                        <Upload>
                                            <Button>
                                                <Icon type="upload" /> Upload i140
                                                </Button>
                                        </Upload>
                                    </TabPane>
                                    <TabPane tab="Passport" key="4">
                                        Recent Passport :
                                            <br />
                                        <Upload>
                                            <Button>
                                                <Icon type="upload" /> Upload Passport
                                                </Button>
                                        </Upload>
                                    </TabPane>
                                    <TabPane tab="i94" key="5">
                                        Recent i94 :
                                            <br />
                                        <Upload>
                                            <Button>
                                                <Icon type="upload" /> Upload i94
                                                </Button>
                                        </Upload>
                                    </TabPane>
                                    <TabPane tab="MSA/SOW" key="6">

                                        Client Letter :
                                            <br />
                                        <Upload>
                                            <Button>
                                                <Icon type="upload" /> Client Letter
                                                </Button>
                                        </Upload>

                                        Vendor Letter :
                                            <br />
                                        <Upload>
                                            <Button>
                                                <Icon type="upload" /> Vendor Letter
                                                </Button>
                                        </Upload>


                                    </TabPane>
                                </Tabs>

                            </TabPane>
                            <TabPane tab="STEP 2" key="2">Upload H4 Documents</TabPane>
                            <TabPane tab="STEP 3" key="3">Upload H4 EAD</TabPane>
                        </Tabs>
                    </Panel>
                    <Panel header="Submitted Documents Review by HR" key="5">
                        <Card title="Card title">
                            <span>Documents Reviewed: </span>
                            <RadioGroup name="empVerifiedWrkLocation" onChange={this.onChange} value={this.state.empVerifiedWrkLocation}>                                    
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