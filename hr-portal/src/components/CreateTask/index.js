import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import  Validator from 'validator';
import InlineError from '../messages/InlineError';
import { Collapse, Form, Input, Row, Col, Button, DatePicker, Radio, Card} from 'antd';
import { Link } from "react-router-dom";
import moment from 'moment';

import { employeeInfoSaveToFirebaseDatabase } from "../../redux/actions/CreateTask";

const Panel = Collapse.Panel;

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

class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            empDetails:{
                empId: '',
                firstName: 'Akash',
                lastName: 'Goled',
                emailId01: 'akash@goled.com',
                emailId02: 'goled@akash.com',
                phoneNo: '1112223333',

                contDetails:{
                  address1:'ghvvhvh',
                  address2:'ebvhjvf',
                  city:'fwgvkvhb',
                  state:'bhkqh',
                  zipCode:'666644'
                },

                workInfo:{
                    workLocation:{
                      address1:'ghvechjg',
                      address2:'qfwehbkfbkh',
                      city:'fewhj',
                      state:'fqbhkj',
                      zipCode:'555544'
                    },
                  },
                
                clientInfo:{
                    clientName: 'vggvhj',
                    managerName:'bjhww',
                    clientAddress:{
                        address1:'qerqert',
                        address2:'ipuo',
                        city:'tytyu',
                        state:'rrrc',
                        zipCode:'888877',
                      },
                  },
                
                vendorInfo:{
                    vendorAgreement: 'yes',
                    vendorName: '',
                    vendorContact: '',
                    venContName:'',
                    venContPhone:'',
                  },
                //moment('11/08/2017')
                recruiter:{
                      projectStartDate: '',
                      empSignedOfferLetter:'',
                      placementDate: '',
                      urgentSituation:'',
                      applicationType:'',
                      docsCollectingStartDate: '',
                      employerRelationDocuments: '',
                      vendorLetterStatus: '',
                      clientLetterStatus: '',
                      empVerifiedWrkLocation:'',
                      rectrSentPlacDet: '',
                      rectrSentVenAgreeSignedCopy:'',
                  }

         },

         errors: {}
         
    }

}

    onChange = e => this.setState({
        empDetails: { ...this.state.empDetails, [e.target.name]: e.target.value}
    });

    onContactChange = (e) => {
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.contDetails[e.target.name] = e.target.value;        
        return this.setState({empDetails});
    };

    onWorkLocationChange = (e) => {
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.workInfo.workLocation[e.target.name] = e.target.value;
        return this.setState({empDetails});
    };

    onClientInfoChange = (e) => {
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.clientInfo[e.target.name] = [e.target.value];
        return this.setState({empDetails});
    };

    onClientAddressChange = (e) => {
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.clientInfo.clientAddress[e.target.name] = e.target.value;
        return this.setState({empDetails});
    };

    static getDerivedStateFromProps(props, state) {
        return null;
      }

    onVendorInfoChange = (e) => {
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.vendorInfo[e.target.name] = [e.target.value];
        return this.setState({empDetails});
    };

    onProjectStartDateChange = (e, date) => {
        this.setState({
            ...this.state.empDetails.recruiter, projectStartDate: date,
        });
        // let empDetails = Object.assign({}, this.state.empDetails);
        // empDetails.recruiter[e.target.name] = [e.target.value];
        // return this.setState({empDetails});
    };

    onPlacementDateChange = (e, date) => {
        this.setState({
            ...this.state.empDetails.recruiter, placementDate: date,
        });
    };

    onRecruiterChange = (e) => {
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.recruiter[e.target.name] = [e.target.value];
        return this.setState({empDetails});
    };

    onDocsCollectingStartDateChange = (e, date) => {
        this.setState({
            ...this.state.empDetails.recruiter, docsCollectingStartDate: date,
        });
    };

    onRectrSentPlacDetChange = (e, date) => {
        this.setState({
            ...this.state.empDetails.recruiter, rectrSentPlacDet: date,
        });
    };

      onSubmit = () => {
        const errors = this.validate(this.state.empDetails);
        if(Object.keys(errors).length===0){
            // this.props.submit(this.state.data);
            console.log(this.state.empDetails);
            this.props.dispatch(
                employeeInfoSaveToFirebaseDatabase(
                    // this.state.employeeDetails.
                  this.state.empDetails,

                )
              );
        }
      };

      validate = empDetails => {
        const errors = {};
        if(!empDetails.firstName) errors.firstName = "Can't be empty";
        if(!empDetails.lastName) errors.lastName = "Can't be empty";
        if(!Validator.isEmail(empDetails.emailId01)) errors.emailId01 = "Invalid Email";
        if(!Validator.isEmail(empDetails.emailId02)) errors.emailId02 = "Invalid Email";
        if(!Validator.isNumeric(empDetails.phoneNo)) errors.phoneNo = "Enter Phone Number";
        
        //ContDetails
        if(!empDetails.contDetails.address1) errors.address1 = "Can't be empty";
        if(!empDetails.contDetails.address2) errors.address2 = "Can't be empty";
        if(!empDetails.contDetails.city) errors.city = "Can't be empty";
        if(!empDetails.contDetails.state) errors.state = "Can't be empty";
        if(!Validator.isNumeric(empDetails.contDetails.zipCode)) errors.zipCode = "Enter Zipcode";
        
        //WorkInfo
        if(!empDetails.workInfo.workLocation.address1) errors.address1 = "Can't be empty";
        if(!empDetails.workInfo.workLocation.address2) errors.address2 = "Can't be empty";
        if(!empDetails.workInfo.workLocation.city) errors.city = "Can't be empty";
        if(!empDetails.workInfo.workLocation.state) errors.state = "Can't be empty";
        if(!Validator.isNumeric(empDetails.workInfo.workLocation.zipCode)) errors.zipCode = "Enter Zipcode";
        
        //ClientInfo
        if(!empDetails.clientInfo.clientName) errors.clientName = "Can't be empty";
        if(!empDetails.clientInfo.managerName) errors.managerName = "Can't be empty";
        if(!empDetails.lastName) errors.lastName = "Can't be empty";
        if(!empDetails.clientInfo.clientAddress.address1) errors.address1 = "Can't be empty";
        if(!empDetails.clientInfo.clientAddress.address2) errors.address2 = "Can't be empty";
        if(!empDetails.clientInfo.clientAddress.city) errors.city = "Can't be empty";
        if(!empDetails.clientInfo.clientAddress.state) errors.state = "Can't be empty";
        if(!Validator.isNumeric(empDetails.clientInfo.clientAddress.zipCode)) errors.zipCode = "Enter Zipcode";
        
        //VendorInfo
        if(!empDetails.vendorInfo.vendorAgreement) errors.vendorAgreement = "Please Select";
        if(!empDetails.vendorInfo.vendorName) errors.vendorName = "Can't be empty";
        //if(!Validator.isNumeric(empDetails.vendorInfo.vendorContact)) errors.vendorContact = "Enter Phone Number";
        if(!empDetails.vendorInfo.venContName) errors.venContName = "Can't be empty";
        //if(!Validator.isNumeric(empDetails.vendorInfo.venContPhone)) errors.venContPhone = "Enter Phone Number";  
        // isNumeric is not validating for vendorInfo - check why
        
        //Recruiter
        // if(!Validator.isISO8601(empDetails.recruiter.projectStartDate)) errors.projectStartDate = "Select a Date";
        if(!empDetails.recruiter.empSignedOfferLetter) errors.empSignedOfferLetter = "Please Select";
        // if(!Validator.isISO8601(empDetails.recruiter.placementDate)) errors.placementDate = "Select a Date";
        if(!empDetails.recruiter.urgentSituation) errors.urgentSituation = "Enter N/A if no such thing";
        if(!empDetails.recruiter.applicationType) errors.applicationType = "Please Select";
        // if(!Validator.isISO8601(empDetails.recruiter.docsCollectingStartDate)) errors.docsCollectingStartDate = "Select a Date";
        if(!empDetails.recruiter.employerRelationDocuments) errors.employerRelationDocuments = "Please Select";
        if(!empDetails.recruiter.vendorLetterStatus) errors.vendorLetterStatus = "Please Select";
        if(!empDetails.recruiter.clientLetterStatus) errors.clientLetterStatus = "Please Select";
        if(!empDetails.recruiter.empVerifiedWrkLocation) errors.empVerifiedWrkLocation = "Can't be empty";
        // if(!Validator.isISO8601(empDetails.recruiter.rectrSentPlacDet)) errors.rectrSentPlacDet = "Select a Date";
        if(!empDetails.recruiter.rectrSentVenAgreeSignedCopy) errors.rectrSentVenAgreeSignedCopy = "Please Select";


        //Errors
        return errors;
      };

    render() { 
        const { empDetails, errors } = this.state;
        return ( 
            <div>
                <h2>CREATE TASKs HERE</h2>
                <Button type="primary">
                        <Link to={{pathname: "/main"}}>Back to Main</Link>
                </Button>
                <Collapse accordion>
{/* Employee Registration */}
                    <Panel header="Employee Registration" key="1">
                        <Form>
                        <Row>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Card title="EmployeeDetails">
                                <Form.Item error={!!errors.firstName}>
                                    <Input id="firstName" type="firstName" name="firstName" value= {empDetails.firstName} onChange={this.onChange} placeholder="First Name" />
                                        {errors.firstName && <InlineError text= {errors.firstName}/>}
                                </Form.Item>

                                <Form.Item error={!!errors.lastName}>
                                    <Input id="lastName" type="lastName" name="lastName" value= {empDetails.lastName} onChange={this.onChange} placeholder="Last Name" />
                                    {errors.lastName && <InlineError text= {errors.lastName}/>}
                                </Form.Item>

                                <Form.Item error={!!errors.emailId01}>
                                    <Input id="emailId01" type="emailId01" name="emailId01" value= {empDetails.emailId01} onChange={this.onChange} placeholder="Primary Email" />
                                    {errors.emailId01 && <InlineError text= {errors.emailId01}/>}
                                </Form.Item>

                                <Form.Item error={!!errors.emailId02}>
                                    <Input id="emailId02" type="emailId02" name="emailId02" value= {empDetails.emailId02}onChange={this.onChange} placeholder="Secondary Email" />
                                    {errors.emailId02 && <InlineError text= {errors.emailId02}/>}
                                </Form.Item>

                                <Form.Item error={!!errors.phoneNo}>
                                    <Input id="phoneNo" type="phoneNo" name="phoneNo" value={empDetails.phoneNo}onChange={this.onChange} placeholder= "(000) 000-0000"/>
                                    {errors.phoneNo && <InlineError text= {errors.phoneNo}/>}
                                </Form.Item>

                                </Card>
                            </Col>

                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Card title="Contact Details">
                                    
                                    <Form.Item error={!!errors.address1}>
                                            <Input id="address1" type="address1" name="address1"value= {empDetails.contDetails.address1} onChange={this.onContactChange} placeholder="Address 1" />
                                            {errors.address1 && <InlineError text= {errors.address1}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.address2}>
                                        <Input id="address2" type="address2" name="address2"value= {empDetails.contDetails.address2} onChange={this.onContactChange} placeholder="Address 2" />
                                        {errors.address2 && <InlineError text= {errors.address2}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.city}>
                                        <Input id="city" type="city" name="city"value= {empDetails.contDetails.city} onChange={this.onContactChange}placeholder="City" />
                                        {errors.city && <InlineError text= {errors.city}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.state}>
                                            <Input id="state" type="state" name="state"  value= {empDetails.contDetails.state} onChange={this.onContactChange} placeholder="State" />
                                            {errors.state && <InlineError text= {errors.state}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.zipCode}>
                                            <Input  id="zipCode" type="zipCode" name="zipCode" value={empDetails.contDetails.zipCode}onChange={this.onContactChange} placeholder= "Enter Your Zipcode"/>
                                            {errors.zipCode && <InlineError text= {errors.zipCode}/>}
                                    </Form.Item>

                                </Card>
                            </Col>
                        </Row>

                        </Form>
                    </Panel>


{/* WorkInfo */}


                    <Panel header="Work Related Information" key="2">
                        <Form>
                        <Row>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Card title="Work Details">
                                    <Form.Item error={!!errors.address1}>
                                            <Input id="address1" type="address1" name="address1"value= {empDetails.workInfo.workLocation.address1} onChange={this.onWorkLocationChange} placeholder="Address 1" />
                                            {errors.address1 && <InlineError text= {errors.address1}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.address2}>
                                            <Input id="address2" type="address2" name="address2" value= {empDetails.workInfo.workLocation.address2} onChange={this.onWorkLocationChange} placeholder="Address 2" />
                                            {errors.address2 && <InlineError text= {errors.address2}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.city}>
                                        <Input id="city" type="city" name="city" value= {empDetails.workInfo.workLocation.city} onChange={this.onWorkLocationChange}placeholder="City" />
                                        {errors.city && <InlineError text= {errors.city}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.state}>
                                        <Input id="state" type="state" name="state" value= {empDetails.workInfo.workLocation.state} onChange={this.onWorkLocationChange} placeholder="State" />
                                        {errors.state && <InlineError text= {errors.state}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.zipCode}>
                                        <Input id="zipCode" type="zipCode" name="zipCode" value={empDetails.workInfo.workLocation.zipCode}onChange={this.onWorkLocationChange} placeholder= "Enter Your Zipcode"/>
                                        {errors.zipCode && <InlineError text= {errors.zipCode}/>}
                                    </Form.Item>

                                </Card>
                            </Col>
                        </Row>
                        </Form>
                    </Panel>

{/* ClientInfo */}

                    <Panel header="Client Related Information" key="3">
                    <Form>
                        <Row>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Card title="Client Details">
                                    <Form.Item error={!!errors.clientName}>
                                            <Input id="clientName" type="clientName" name="clientName"value= {empDetails.clientInfo.clientName} onChange={this.onClientInfoChange} placeholder="Client Name" />
                                            {errors.clientName && <InlineError text= {errors.clientName}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.managerName}>
                                            <Input id="managerName" type="managerName" name="managerName" value= {empDetails.clientInfo.managerName} onChange={this.onClientInfoChange} placeholder="Manager First Last" />
                                            {errors.managerName && <InlineError text= {errors.managerName}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.address1}>
                                            <Input id="address1" type="address1" name="address1"value= {empDetails.clientInfo.clientAddress.address1} onChange={this.onClientAddressChange} placeholder="Address 1" />
                                            {errors.address1 && <InlineError text= {errors.address1}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.address2}>
                                            <Input id="address2" type="address2" name="address2" value= {empDetails.clientInfo.clientAddress.address2} onChange={this.onClientAddressChange} placeholder="Address 2" />
                                            {errors.address2 && <InlineError text= {errors.address2}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.city}>
                                            <Input id="city" type="city" name="city"value= {empDetails.clientInfo.clientAddress.city} onChange={this.onClientAddressChange} placeholder="City" />
                                            {errors.city && <InlineError text= {errors.city}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.state}>
                                            <Input id="state" type="state" name="state" value= {empDetails.clientInfo.clientAddress.state} onChange={this.onClientAddressChange} placeholder="State" />
                                            {errors.state && <InlineError text= {errors.state}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.zipCode}>
                                            <Input id="zipCode" type="zipCode" name="zipCode" value={empDetails.clientInfo.clientAddress.zipCode} onChange={this.onClientAddressChange} placeholder= "Enter Your Zipcode"/>
                                            {errors.zipCode && <InlineError text= {errors.zipCode}/>}
                                    </Form.Item>

                                </Card>
                            </Col>
                        </Row>

                    </Form>
                    </Panel>

{/* VendorInfo */}
                    <Panel header="Vendor Related Information" key="4">
                        <Form>
                            <Row>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Card title="Vendor Details">
                                        <Form.Item error={!!errors.vendorAgreement}>
                                            Agreement signed by Vendor?
                                            <RadioGroup name="vendorAgreement" options={options} onChange={this.onVendorInfoChange}  />
                                            {errors.vendorAgreement && <InlineError text= {errors.vendorAgreement}/>}
                                        </Form.Item>
                                        <Form.Item error={!!errors.vendorName}>
                                            <Input id="vendorName" type="vendorName" name="vendorName"value= {empDetails.vendorInfo.vendorName} onChange={this.onVendorInfoChange} placeholder="Vendor Name" />
                                            {errors.vendorName && <InlineError text= {errors.vendorName}/>}
                                        </Form.Item>
                                        <Form.Item error={!!errors.vendorContact}>
                                            <Input id="vendorContact" type="vendorContact" name="vendorContact" value={empDetails.vendorInfo.vendorContact} onChange={this.onVendorInfoChange} placeholder= "(000) 000-0000"/>
                                            {errors.vendorContact && <InlineError text= {errors.vendorContact}/>}
                                        </Form.Item>
                                        <Form.Item error={!!errors.venContName}>
                                            <Input id="venContName" type="venContName" name="venContName"value= {empDetails.vendorInfo.venContName} onChange={this.onVendorInfoChange} placeholder="Vendor Contact Name" />
                                             {errors.venContName && <InlineError text= {errors.venContName}/>}
                                        </Form.Item>
                                        <Form.Item error={!!errors.venContPhone}>
                                            <Input id="venContPhone" type="venContPhone" name="venContPhone" value={empDetails.vendorInfo.venContPhone} onChange={this.onVendorInfoChange} placeholder= "(000) 000-0000" />
                                            {errors.venContPhone && <InlineError text= {errors.venContPhone}/>}
                                        </Form.Item>
                                    </Card>
                                </Col>
                            </Row>
                        </Form>
                    </Panel>


{/* Recruiter */}

                    <Panel header=" Recruiter Related Information" key="5">
                        <Form>  
                        <Row>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Card title="Recruiter Details">
                                    <Form.Item error={!!errors.projectStartDate}>
                                        <DatePicker onChange={this.onProjectStartDateChange} placeholder= "Placement Date" defaultValue={empDetails.recruiter.projectStartDate}/>
                                        {errors.projectStartDate && <InlineError text= {errors.projectStartDate}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.empSignedOfferLetter}>
                                        Is Offer Letter Signed by Employee?
                                        <RadioGroup name="empSignedOfferLetter" options={options} onChange={this.onRecruiterChange} />
                                        {errors.empSignedOfferLetter && <InlineError text= {errors.empSignedOfferLetter}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.placementDate}>
                                        <DatePicker onChange={this.onPlacementDateChange} placeholder= "Placement Date" defaultValue={empDetails.recruiter.placementDate}/>
                                        {errors.placementDate && <InlineError text= {errors.placementDate}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.urgentSituation}>
                                        <TextArea id="urgentSituation" type="urgentSituation" name="urgentSituation" value={empDetails.recruiter.urgentSituation} onChange={this.onRecruiterChange} placeholder= "Any Urgent Situation? Please Explain." />
                                        {errors.urgentSituation && <InlineError text= {errors.urgentSituation}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.applicationType}>
                                        Applied H1 Application Type?
                                        <RadioGroup name="applicationType" options={h1applicationType} onChange={this.onRecruiterChange} />
                                        {errors.applicationType && <InlineError text= {errors.applicationType}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.docsCollectingStartDate}>
                                        <DatePicker onChange={this.onDocsCollectingStartDateChange} placeholder= "Collection Start" defaultValue ={empDetails.recruiter.docsCollectingStartDate}/>
                                        {errors.docsCollectingStartDate && <InlineError text= {errors.docsCollectingStartDate}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.employerRelationDocuments}>
                                        Are Employer-Employee relation documents needed?
                                        <RadioGroup name="employerRelationDocuments" options={options} onChange={this.onRecruiterChange} />
                                        {errors.employerRelationDocuments && <InlineError text= {errors.employerRelationDocuments}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.vendorLetterStatus}>
                                        Vendor Letter Status?
                                        <RadioGroup name="vendorLetterStatus" options={letterStatus} onChange={this.onRecruiterChange} />
                                        {errors.vendorLetterStatus && <InlineError text= {errors.vendorLetterStatus}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.clientLetterStatus}>
                                        Client Letter Status?
                                        <RadioGroup name="clientLetterStatus" options={letterStatus} onChange={this.onRecruiterChange} />
                                        {errors.clientLetterStatus && <InlineError text= {errors.clientLetterStatus}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.empVerifiedWrkLocation}>
                                        <Input id="empVerifiedWrkLocation" type="empVerifiedWrkLocation" name="empVerifiedWrkLocation" value= {empDetails.recruiter.empVerifiedWrkLocation} onChange={this.onRecruiterChange} placeholder="Emp Verified Work Loc'n" />
                                        {errors.empVerifiedWrkLocation && <InlineError text= {errors.empVerifiedWrkLocation}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.rectrSentPlacDet}>
                                        <DatePicker onChange={this.onRectrSentPlacDetChange} placeholder= "Rec Pl'mt Date"defaultValue={empDetails.recruiter.rectrSentPlacDet}/>
                                        {errors.rectrSentPlacDet && <InlineError text= {errors.rectrSentPlacDet}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.rectrSentVenAgreeSignedCopy}>
                                        Agreement signed by Vendor?
                                        <RadioGroup name="rectrSentVenAgreeSignedCopy" options={options} onChange={this.onRecruiterChange}  />
                                        {errors.rectrSentVenAgreeSignedCopy && <InlineError text= {errors.rectrSentVenAgreeSignedCopy}/>}
                                    </Form.Item>

                                </Card>
                            </Col>
                        </Row>
                        </Form>
                    </Panel>



                    


                    <Form>
                        <Form.Item>
                            <Button type="primary" onClick={this.onSubmit}>Submit</Button>
                        </Form.Item>
                    </Form>

                </Collapse>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.Auth.isUserLoggedIn,
        userObject: state.Auth.userObject,
    };
};
 
export default connect(mapStateToProps)(CreateTask);