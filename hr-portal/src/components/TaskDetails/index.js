import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Button, Collapse, Tabs, Input, InputNumber, Select, Upload, Icon } from 'antd';
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/actions/Auth";
import { Row, Col, Card, Radio } from 'antd';
import { getTaskByEmpId } from "../../redux/actions/Employee";
import FromEmployee from './FromEmployee';
import LCA from './LCA';
import Recruiter from './Recruiter';
import H1bDocumentsPrep from './H1bDocumentsPrep';
import H1bDocumentsHRReview from './H1bDocumentsHRReview';
import AttorneyReceivedDocs from './AttorneyReceivedDocs';
import AttorneyReviewedDocs from './AttorneyReviewedDocs';
import AttorneyFilesPetiton from './AttorneyFilesPetiton';


const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
const { TextArea } = Input;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class TaskDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskSelected:{}            
        }
    };
    onAccordionSubmit = (data, key) => { 
        let taskSelected = this.state.taskSelected;
        taskSelected.business[key] = data;
        this.setState({taskSelected});
    }
    onRadioButtonChange=(e)=>{        
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("pevprops");
    };
    componentDidMount() {
        this.props.dispatch(getTaskByEmpId(this.props.match.params.id));
    };
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.taskSelected){
            if(Object.keys(nextProps.taskSelected).length > 0){
                return { taskSelected :  nextProps.taskSelected };
            }        
        }        
        return null;
    };
    onSubmit = () => {
        this.props.dispatch(logoutUser(this.props.userObject.user.uid));
    };
    onChange = (e) => { 
        // let workLocation = this.state.workLocation;
        // workLocation[e.target.name] = [e.target.value];
        // return this.setState({workLocation});
    };
    
    // onH1bDocumentsPrepSubmit = () => {

    // }
    // onH1bDocumentsHRReviewSubmit = () => {

    // }
    // onAttorneyReceivedDocsSubmit = () => { 
        
    // }
    // onAttorneyReviewedDocsSubmit = () => { 

    // }
    // onAttorneyFilesPetitonSubmit = () => { 

    // }

    render() {
        const { modeHor } = 'top';
        const { modeVer } = 'left';
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        if(this.state.taskSelected === undefined || this.state.taskSelected.empDetails  === undefined || this.state.taskSelected.empDetails.workInfo === undefined){
            return (<div></div>);    
        } else{
        const { workLocation } =  this.state.taskSelected.empDetails.workInfo; 
        return (
            <div>
                <h3>HOME COMPONENT</h3>
                <Button type="primary">
                    <Link to={{ pathname: "/main" }}>Back to Main</Link>
                </Button>
                <Collapse accordion>
                    <Panel header="From Employee" key="1">
                        
                    </Panel>
                    <Panel header="From Recruiter" key="2">
                            <Recruiter />
                    </Panel>
                    <Panel header="LCA Documents and Application for Certification" key="3">
                            <LCA {...this.props} onAccordionSubmit={this.onAccordionSubmit}/>
                    </Panel>
                    <Panel header="Upload your H1B Documents" key="4">
                            <H1bDocumentsPrep {...this.props} onAccordionSubmit={this.onAccordionSubmit} />
                    </Panel>
                    <Panel header="Submitted Documents Review by HR" key="5">
                            <H1bDocumentsHRReview {...this.props} onAccordionSubmit={this.onAccordionSubmit}/>
                    </Panel>
                    <Panel header="Send Reviewed Documents to Attorney" key="6">
                            <AttorneyReceivedDocs {...this.props} onAccordionSubmit={this.onAccordionSubmit}/>
                    </Panel>
                    <Panel header="Documents Reviewed by Attorney" key="7">
                            <AttorneyReviewedDocs {...this.props} onAccordionSubmit={this.onAccordionSubmit}/>
                    </Panel>
                    <Panel header="Documents accepted by Attorney" key="8">
                            <AttorneyFilesPetiton {...this.props} onAccordionSubmit={this.onAccordionSubmit}/>
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
}

TaskDetails.defaultProps = {
    taskSelected:{}
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.Auth.isUserLoggedIn,
        userObject: state.Auth.userObject,
        taskSelected : state.EmpData.taskSelected
    };
};


export default connect(mapStateToProps)(TaskDetails);