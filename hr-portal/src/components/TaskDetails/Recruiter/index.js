import React, {Component} from 'react';
import PropTypes from 'prop-types';
import  Validator from 'validator';
import InlineError from '../../messages/InlineError';
import { Collapse, Form, Input, Row, Col, Button, DatePicker, Radio, Card} from 'antd';


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

const RadioGroup = Radio.Group;

const { TextArea } = Input;

class Recruiter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step2:{
                taskName:"Recruiter",
                taskActive: true,
                actionAssignedTo:"Akash",
                projectStartDate:"",
                empSignedOfferLetter:"",
                placementDate:"",
                urgentSituation:"",
                applicationType:"type1",
                docsCollectingStartDate:"",
                employerRelationDocuments: "yes",
                vendorLetterStatus: "approved",
                clientLetterStatus: "waiting",
                empVerifiedWrkLocation:"",
                rectrSentPlacDet:"",
                rectrSentVenAgreeSignedCopy:"",
            },
            errors: {},
          }
    }
    render() { 
        const { step2, errors } = this.state;
        return ( 
            <div>
                    <Form>  
                        <Row>
                            <Col>
                                <Card title="Recruiter Details">
                                    <Form.Item error={!!errors.projectStartDate} label="Project Start Date">
                                        <DatePicker onChange={this.onProjectStartDateChange} placeholder= "Project Start Date" defaultValue={step2.projectStartDate}/>
                                        {errors.projectStartDate && <InlineError text= {errors.projectStartDate}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.empSignedOfferLetter}  label="Is Offer Letter Signed by Employee?">                                        
                                        <RadioGroup name="empSignedOfferLetter" options={options} onChange={this.onRecruiterChange} />
                                        {errors.empSignedOfferLetter && <InlineError text= {errors.empSignedOfferLetter}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.placementDate} label="Placement Date">
                                        <DatePicker onChange={this.onPlacementDateChange} placeholder= "Placement Date" defaultValue={step2.placementDate}/>
                                        {errors.placementDate && <InlineError text= {errors.placementDate}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.urgentSituation}  label="Any Urgent Situation">
                                        <TextArea id="urgentSituation" type="urgentSituation" name="urgentSituation" value={step2.urgentSituation} onChange={this.onRecruiterChange} placeholder= "Any Urgent Situation? Please Explain." />
                                        {errors.urgentSituation && <InlineError text= {errors.urgentSituation}/>}
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
                                    <Form.Item error={!!errors.empVerifiedWrkLocation} label="Employee Verified Work Location">
                                        <Input id="empVerifiedWrkLocation" type="empVerifiedWrkLocation" name="empVerifiedWrkLocation" value= {step2.empVerifiedWrkLocation} onChange={this.onRecruiterChange} placeholder="Emp Verified Work Loc'n" />
                                        {errors.empVerifiedWrkLocation && <InlineError text= {errors.empVerifiedWrkLocation}/>}
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
                        </Row>
                    </Form>
            </div>
         );
    }
}
 
export default Recruiter;