import React, {Component} from 'react';
import PropTypes from 'prop-types';
import  Validator from 'validator';
import InlineError from '../../messages/InlineError';
import { Modal, Collapse, Form, Input, Row, Col, Button, DatePicker, Radio, Card} from 'antd';


const options = [
    { label: 'yes', value: 'yes' },
    { label: 'no', value: 'no' },
  ];

const h1applicationType = [
    { label: 'type1', value: 'type1' },
    { label: 'type2', value: 'type2' },
  ];

const letterStatus = [
    { label: 'approved', value: 'approved' },
    { label: 'waiting', value: 'waiting' },
    { label: 'notApplied', value: 'notApplied' },
  ];
  const taskPrioity = [
    { label: 'very high', value: '1' },
    { label: 'high', value: '2' },
    { label: 'medium', value: '3' },
    { label: 'low', value: '4' },
];
const RadioGroup = Radio.Group;

const { TextArea } = Input;

class Recruiter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step2:{
                taskName:"",
                taskActive: true,
                actionAssignedTo:"",
                projectStartDate:"",
                empSignedOfferLetter:"",
                placementDate:"",
                urgentSituation:"",
                applicationType:"",
                docsCollectingStartDate:"",
                employerRelationDocuments: "",
                vendorLetterStatus: "",
                clientLetterStatus: "",
                empVerifiedWrkLocation:"",
                rectrSentPlacDet:"",
                rectrSentVenAgreeSignedCopy:"",
            },
            taskInfo:{
                taskCompleted:"",
                taskPrioirty:"1",
                applicationType:"",
                taskCreatedDate:"", 
                isTaskCreated:"",
                isTaskPending:"",
                isTaskCompleted:"" 
            },
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
              visible: false,
            errors: {},
        }
    }

    componentDidMount() {
        if(this.props.taskSelected.business){
            let step2 =  this.props.taskSelected.business.step2;
            this.setState({step2})
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
      }
    
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    

    onProjectStartDateChange = (e, date) => {
        this.setState({
            ...this.state.step2, projectStartDate: date,
        });
        // let empDetails = Object.assign({}, this.state.empDetails);
        // empDetails.recruiter[e.target.name] = [e.target.value];
        // return this.setState({empDetails});
    };

    onRecruiterChange = (e) => {
        let step2 = Object.assign({}, this.state.step2);
        step2[e.target.name] = [e.target.value];
        return this.setState({step2});
    };
    onTaskInfoChange = (e) => {
        // let empDetails = Object.assign({}, this.state.empDetails);
        // empDetails.taskInfo[e.target.name] = [e.target.value];
        // empDetails.taskInfo["isTaskCreated"] = true;
        // empDetails.taskInfo["taskCreatedDate"] = moment().valueOf();
        // return this.setState({empDetails});
    };
    onPlacementDateChange = (e, date) => {
        this.setState({
            ...this.state.step2, placementDate: date,
        });
    };


    onDocsCollectingStartDateChange = (e, date) => {
        this.setState({
            ...this.state.step2, docsCollectingStartDate: date,
        });
    };

    onRectrSentPlacDetChange = (e, date) => {
        this.setState({
            ...this.state.step2, rectrSentPlacDet: date,
        });
    };

    onBusinessMessageChange = (e) => {
        let comments = Object.assign({}, this.state.comments);
        comments[e.target.name] = [e.target.value];
        return this.setState({comments});
    };

    onCancelButtonClicked = () => {

    }    
    onSubmitButtonClicked = () => {
        this.props.onAccordionSubmit(this.state.step2, "step2");
    }

    render() { 
        const { step2, errors, comments } = this.state;
        return ( 
            <div>
                    <Form>  
                        <Row>
                            <Col  xs={12} sm={12} md={12} lg={12} xl={12} >
                                <Card title="Recruiter Details">
                                    
                                    <Form.Item error={!!errors.empSignedOfferLetter}  label="Is Offer Letter Signed by Employee?">                                        
                                        <RadioGroup name="empSignedOfferLetter" options={options} onChange={this.onRecruiterChange} />
                                        {errors.empSignedOfferLetter && <InlineError text= {errors.empSignedOfferLetter}/>}
                                    </Form.Item>
                                    
                                    
                                    <Form.Item error={!!errors.applicationType} label="Applied H1 Application Type?">                                        
                                        <RadioGroup name="applicationType" options={h1applicationType} onChange={this.onRecruiterChange} />
                                        {errors.applicationType && <InlineError text= {errors.applicationType}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.docsCollectingStartDate} label="Documents Collection Start">
                                        <DatePicker onChange={this.onDocsCollectingStartDateChange} placeholder= "Collection Start" defaultValue ={step2.docsCollectingStartDate}/>
                                        {errors.docsCollectingStartDate && <InlineError text= {errors.docsCollectingStartDate}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.employerRelationDocuments}  label="Are Employer-Employee relation documents needed?">                                        
                                        <RadioGroup name="employerRelationDocuments" options={options} onChange={this.onRecruiterChange} />
                                        {errors.employerRelationDocuments && <InlineError text= {errors.employerRelationDocuments}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.vendorLetterStatus} label="Vendor Letter Status?">                                        
                                        <RadioGroup name="vendorLetterStatus" options={letterStatus} onChange={this.onRecruiterChange} />
                                        {errors.vendorLetterStatus && <InlineError text= {errors.vendorLetterStatus}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.clientLetterStatus}  label="Client Letter Status?">                                        
                                        <RadioGroup name="clientLetterStatus" options={letterStatus} onChange={this.onRecruiterChange} />
                                        {errors.clientLetterStatus && <InlineError text= {errors.clientLetterStatus}/>}
                                    </Form.Item>                                    
                                    <Form.Item error={!!errors.rectrSentPlacDet} label="Recruiter Sent Placement Details ">
                                        <DatePicker onChange={this.onRectrSentPlacDetChange} placeholder= "Rec Pl'mt Date"defaultValue={step2.rectrSentPlacDet}/>
                                        {errors.rectrSentPlacDet && <InlineError text= {errors.rectrSentPlacDet}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.rectrSentVenAgreeSignedCopy} label="Agreement signed by Vendor?">                                        
                                        <RadioGroup name="rectrSentVenAgreeSignedCopy" options={options} onChange={this.onRecruiterChange}  />
                                        {errors.rectrSentVenAgreeSignedCopy && <InlineError text= {errors.rectrSentVenAgreeSignedCopy}/>}
                                    </Form.Item>
                                </Card>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Card title="">
                                <Form.Item error={!!errors.projectStartDate} label="Project Start Date">
                                        <DatePicker onChange={this.onProjectStartDateChange} placeholder= "Project Start Date" defaultValue={step2.projectStartDate}/>
                                        {errors.projectStartDate && <InlineError text= {errors.projectStartDate}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.urgentSituation}  label="Any Urgent Situation">
                                        <TextArea id="urgentSituation" type="urgentSituation" name="urgentSituation" value={step2.urgentSituation} onChange={this.onRecruiterChange} placeholder= "Any Urgent Situation? Please Explain." />
                                        {errors.urgentSituation && <InlineError text= {errors.urgentSituation}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.empVerifiedWrkLocation} label="Employee Verified Work Location">
                                        <Input id="empVerifiedWrkLocation" type="empVerifiedWrkLocation" name="empVerifiedWrkLocation" value= {step2.empVerifiedWrkLocation} onChange={this.onRecruiterChange} placeholder="Emp Verified Work Loc'n" />
                                        {errors.empVerifiedWrkLocation && <InlineError text= {errors.empVerifiedWrkLocation}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.placementDate} label="Placement Date">
                                        <DatePicker onChange={this.onPlacementDateChange} placeholder= "Placement Date" defaultValue={step2.placementDate}/>
                                        {errors.placementDate && <InlineError text= {errors.placementDate}/>}
                                    </Form.Item>
                                </Card>
                                <Card title="">
                                    <Form.Item error={!!errors.projectStartDate} label="Project Start Date">
                                        <DatePicker onChange={this.onProjectStartDateChange} placeholder= "Project Start Date" defaultValue={step2.projectStartDate}/>
                                        {errors.projectStartDate && <InlineError text= {errors.projectStartDate}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.urgentSituation}  label="Any Urgent Situation">
                                        <TextArea id="urgentSituation" type="urgentSituation" name="urgentSituation" value={step2.urgentSituation} onChange={this.onRecruiterChange} placeholder= "Any Urgent Situation? Please Explain." />
                                        {errors.urgentSituation && <InlineError text= {errors.urgentSituation}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.empVerifiedWrkLocation} label="Employee Verified Work Location">
                                        <Input id="empVerifiedWrkLocation" type="empVerifiedWrkLocation" name="empVerifiedWrkLocation" value= {step2.empVerifiedWrkLocation} onChange={this.onRecruiterChange} placeholder="Emp Verified Work Loc'n" />
                                        {errors.empVerifiedWrkLocation && <InlineError text= {errors.empVerifiedWrkLocation}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.placementDate} label="Placement Date">
                                        <DatePicker onChange={this.onPlacementDateChange} placeholder= "Placement Date" defaultValue={step2.placementDate}/>
                                        {errors.placementDate && <InlineError text= {errors.placementDate}/>}
                                    </Form.Item>
                                </Card>
                                <Card title="">
                                <Form.Item label="Task Priority">                                        
                                    <RadioGroup name="taskPrioirty" options={taskPrioity} onChange={this.onTaskInfoChange} />                                   
                                </Form.Item>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <Button type="primary" onClick={this.showModal}>
                                    Add Comments
                                    </Button>
                                    <Modal
                                    title="Additional Comments"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                    >
                                    <Form.Item error={!!errors.taskMsg}  label="Task Comments">
                                        <TextArea id="taskMsg" type="taskMsg" name="taskMsg" value={comments.taskMsg} onChange={this.onBusinessMessageChange} placeholder= "Add Task Comments if any" />
                                        {errors.taskMsg && <InlineError text= {errors.taskMsg}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.empMsg}  label="Employee Comments">
                                        <TextArea id="empMsg" type="empMsg" name="empMsg" value={comments.empMsg} onChange={this.onBusinessMessageChange} placeholder= "Add Comments for Employees" />
                                        {errors.empMsg && <InlineError text= {errors.empMsg}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.businessMsg}  label="Business Comments">
                                        <TextArea id="businessMsg" type="businessMsg" name="businessMsg" value={comments.businessMsg} onChange={this.onBusinessMessageChange} placeholder= "Add Business Comments if any" />
                                        {errors.businessMsg && <InlineError text= {errors.businessMsg}/>}
                                    </Form.Item>
                                    
                                    </Modal>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>   
                                <div>
                                    <Button type="primary" onClick={() => this.onCancelButtonClicked()}>Cancel</Button>
                                    <Button type="primary" onClick={() => this.onSubmitButtonClicked()}>Submit</Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
            </div>
         );
    }
}
 
export default Recruiter;