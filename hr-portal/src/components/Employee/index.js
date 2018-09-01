import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import  Validator from 'validator';
import InlineError from '../messages/InlineError';
import {Form, Button, Input, DatePicker, Row, Col, TimePicker, Select, Cascader, InputNumber, Radio} from 'antd';
import { Link } from "react-router-dom";
import { employeeSaveToFirebaseDatabase } from "../../redux/actions/Employee"

const FormItem = Form.Item;
const Option = Select.Option;

const RadioGroup = Radio.Group;

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
  const { TextArea } = Input;

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            employeeDetails: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNo: '',
               placementDate: '',
                vendorAgreement: '',
               projectStartDate: '',
                urgentSituation: '',
                signedOfferLetter: '',
                workLocationOne: '',
                workLocationTwo: '',
                clientName: '',
                vendorName: '',
                vendorContact: '',
                applicationType:'',
                docsCollectingStartDate:'',
                appliedDateLCA: '',
                approvedDateLCA: '',
                vendorLetterStatus: '',
                clientLetterStatus: '',
                employerRelationDocuments: '',
            },
            errors: {}
         }
    }
    

    onChange = e => this.setState({
        employeeDetails: { ...this.state.employeeDetails, [e.target.name]: e.target.value}
    });

    static getDerivedStateFromProps(props, state) {
        if (!props.isUserLoggedIn) {
          // props.history.push("/login");
          console.log("User not logged in");
        }
      }

    // onDateChange = (e, date,dateString) => {
    //     console.log( date);
    //     console.log('akash!!\n');
    //     console.log(dateString);
    //     // console.log(e);
    //     console.log(e._d);
    //     this.setState({
    //         employeeDetails: {...this.state.employeeDetails, [e.target.name]: e.target._d}
    //     });
    //   }

    onPlacementDateChange = (e, date) => {
        this.setState({
            ...this.state.employeeDetails, placementDate: date,
        });
    }


    onProjectStartDate = (e, date) => {
        this.setState({
            projectStartDate: date
        });
    }


    onDocsCollectingStartDate = (e, date) => {
        this.setState({
            docsCollectingStartDate: date
        });
    }


    onAppliedDateLCA = (e, date) => {
        this.setState({
            appliedDateLCA: date
        });
    }


    onApprovedDateLCA = (e, date) => {
        this.setState({
            approvedDateLCA: date
        });
    }


    onSubmit = () => { 

        const errors = this.validate(this.state.employeeDetails);
        this.setState({errors});
        if(Object.keys(errors).length===0){
            // this.props.submit(this.state.data);
            console.log(this.state.employeeDetails);
            this.props.dispatch(
                employeeSaveToFirebaseDatabase(
                    // this.state.employeeDetails.
                  this.state.employeeDetails.firstName,
                  this.state.employeeDetails.lastName,
                  this.state.employeeDetails.email,
                  this.state.employeeDetails.phoneNo,
                  this.state.employeeDetails.placementDate,
                  this.state.employeeDetails.vendorAgreement,
                  this.state.employeeDetails.projectStartDate,
                  this.state.employeeDetails.urgentSituation,
                  this.state.employeeDetails.signedOfferLetter,
                  this.state.employeeDetails.workLocationOne,
                  this.state.employeeDetails.workLocationTwo,
                  this.state.employeeDetails.clientName,
                  this.state.employeeDetails.vendorName,
                  this.state.employeeDetails.vendorContact,
                  this.state.employeeDetails.applicationType,
                  this.state.employeeDetails.docsCollectingStartDate,
                  this.state.employeeDetails.appliedDateLCA,
                  this.state.employeeDetails.approvedDateLCA,
                  this.state.employeeDetails.vendorLetterStatus,
                  this.state.employeeDetails.clientLetterStatus,
                  this.state.employeeDetails.employerRelationDocuments,
                )
              );
        }
    };

    validate = employeeDetails => {
        const errors = {};
        if(!employeeDetails.firstName) errors.firstName = "Can't be empty";
        if(!employeeDetails.lastName) errors.lastName = "Can't be empty";
        if(!Validator.isEmail(employeeDetails.email)) errors.email = "Invalid Email";
       if(!Validator.isISO8601(employeeDetails.placementDate)) errors.placementDate = "Select a Date";
        if(!employeeDetails.vendorAgreement) errors.vendorAgreement = "Please Select";
        if(!Validator.isNumeric(employeeDetails.phoneNo)) errors.phoneNo = "Enter Phone Number";
       // employerRelationDocuments
       if(!Validator.isISO8601(employeeDetails.projectStartDate)) errors.projectStartDate = "Select a Date";
        if(!employeeDetails.urgentSituation) errors.urgentSituation = "Enter N/A if no such thing";
        if(!employeeDetails.signedOfferLetter) errors.signedOfferLetter = "Please Select";
        if(!employeeDetails.workLocationOne) errors.workLocationOne = "Can't be empty";
        if(!employeeDetails.workLocationTwo) errors.workLocationTwo = "Can't be empty";
        if(!employeeDetails.clientName) errors.clientName = "Can't be empty";
        if(!employeeDetails.vendorName) errors.vendorName = "Can't be empty";
        if(!employeeDetails.vendorContact) errors.vendorContact = "Can't be empty";
        if(!employeeDetails.applicationType) errors.applicationType = "Please Select";
        if(!Validator.isISO8601(employeeDetails.docsCollectingStartDate)) errors.docsCollectingStartDate = "Select a Date";
        if(!Validator.isISO8601(employeeDetails.appliedDateLCA)) errors.appliedDateLCA = "Select a Date";
        if(!Validator.isISO8601(employeeDetails.approvedDateLCA)) errors.approvedDateLCA = "Select a Date";
        if(!employeeDetails.vendorLetterStatus) errors.vendorLetterStatus = "Please Select";
        if(!employeeDetails.clientLetterStatus) errors.clientLetterStatus = "Please Select";
        if(!employeeDetails.employerRelationDocuments) errors.employerRelationDocuments = "Please Select";
        return errors;
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("History props ", this.nextProps.history);
        console.log("next user Object", nextProps.userObject);
      }

    render() { 
        const { employeeDetails, errors } = this.state;
        return ( 
            <Form>
                    <Button type="primary">
                        <Link to={{pathname: "/main"}}>Back to Main</Link>
                    </Button>
                    <h2> Employee Registration </h2>
                    <h3> Section 1 </h3>
                    <Row>
                        <Col span={8}>
                            <Form.Item error={!!errors.firstName}>
                                
                                    <Input 
                                    id="firstName" 
                                    type="firstName" 
                                    name="firstName"
                                    value= {employeeDetails.firstName} 
                                    onChange={this.onChange}
                                    placeholder="First Name" 
                                    />
                                
                                {errors.firstName && <InlineError text= {errors.firstName}/>}
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item error={!!errors.lastName}>
                                
                                    <Input 
                                    id="lastName" 
                                    type="lastName" 
                                    name="lastName" 
                                    value= {employeeDetails.lastName} 
                                    onChange={this.onChange}
                                    placeholder="Last Name" 
                                    />
                                {errors.lastName && <InlineError text= {errors.lastName}/>}
                            </Form.Item>
                        </Col>
                    </Row>

                     <Row>
                        <Col span={8}>
                        <Form.Item error={!!errors.email}>
                                <Input 
                                id="email" 
                                type="email" 
                                name="email" 
                                value= {employeeDetails.email}
                                onChange={this.onChange}
                                placeholder="example@example.com" 
                                />
                            {errors.email && <InlineError text= {errors.email}/>}
                        </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                        <Form.Item error={!!errors.phoneNo}>
                            <Input 
                                id="phoneNo" 
                                type="phoneNo" 
                                name="phoneNo" 
                                value={employeeDetails.phoneNo}
                                onChange={this.onChange} 
                                placeholder= "(000) 000-0000"
                                />
                                {errors.phoneNo && <InlineError text= {errors.phoneNo}/>}
                            </Form.Item>
                         </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Form.Item error={!!errors.placementDate}>
                                <DatePicker 
                                  
                                    onChange={this.onPlacementDateChange} 
                                    value={employeeDetails.placementDate}
                                    placeholder= "Placement Date"
                                />
                                {errors.placementDate && <InlineError text= {errors.placementDate}/>}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Form.Item error={!!errors.vendorAgreement}>
                                Agreement signed by Vendor?
                                <RadioGroup name="vendorAgreement" options={options} onChange={this.onChange} value={employeeDetails.vendorAgreement} />
                                {errors.vendorAgreement && <InlineError text= {errors.vendorAgreement}/>}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Form.Item error={!!errors.projectStartDate}>
                                <DatePicker 
                                    onChange={this.onProjectStartDate} 
                                    value={employeeDetails.projectStartDate}
                                    placeholder= "Project Start Date"
                                />
                                {errors.projectStartDate && <InlineError text= {errors.projectStartDate}/>}
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            {/* <Form.Item error={!!errors.urgentSituation}>
                                Any Urgency Situation?
                                <RadioGroup name="urgentSituation" options={options} onChange={this.onChange} value={employeeDetails.urgentSituation} />
                                {errors.urgentSituation && <InlineError text= {errors.urgentSituation}/>}
                            </Form.Item> */}
                            <Form.Item error={!!errors.urgentSituation}>
                            <TextArea 
                                id="urgentSituation" 
                                type="urgentSituation" 
                                name="urgentSituation" 
                                value={employeeDetails.urgentSituation}
                                onChange={this.onChange} 
                                placeholder= "Any Urgent Situation? Please Explain."
                                />
                                {errors.urgentSituation && <InlineError text= {errors.urgentSituation}/>}
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item error={!!errors.signedOfferLetter}>
                                Is Offer Letter Signed?
                                <RadioGroup name="signedOfferLetter" options={options} onChange={this.onChange} value={employeeDetails.signedOfferLetter} />
                                {errors.signedOfferLetter && <InlineError text= {errors.signedOfferLetter}/>}
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item error={!!errors.workLocationOne}>
                                
                                    <Input 
                                    id="workLocationOne" 
                                    type="workLocationOne" 
                                    name="workLocationOne"
                                    value= {employeeDetails.workLocationOne} 
                                    onChange={this.onChange}
                                    placeholder="Work Location Mandatory" 
                                    />
                                
                                {errors.workLocationOne && <InlineError text= {errors.workLocationOne}/>}
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item error={!!errors.workLocationTwo}>
                                
                                    <Input 
                                    id="workLocationTwo" 
                                    type="workLocationTwo" 
                                    name="workLocationTwo" 
                                    value= {employeeDetails.workLocationTwo} 
                                    onChange={this.onChange}
                                    placeholder="Work Location Optional" 
                                    />
                                {errors.workLocationTwo && <InlineError text= {errors.workLocationTwo}/>}
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                    <Col span={8}>
                            <Form.Item error={!!errors.clientName}>
                                
                                    <Input 
                                    id="clientName" 
                                    type="clientName" 
                                    name="clientName" 
                                    value= {employeeDetails.clientName} 
                                    onChange={this.onChange}
                                    placeholder="Enter Client Name" 
                                    />
                                {errors.clientName && <InlineError text= {errors.clientName}/>}
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item error={!!errors.vendorName}>
                                
                                    <Input 
                                    id="vendorName" 
                                    type="vendorName" 
                                    name="vendorName"
                                    value= {employeeDetails.vendorName} 
                                    onChange={this.onChange}
                                    placeholder="Vendor Name" 
                                    />
                                
                                {errors.vendorName && <InlineError text= {errors.vendorName}/>}
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                        <Form.Item error={!!errors.vendorContact}>
                            <Input 
                                id="vendorContact" 
                                type="vendorContact" 
                                name="vendorContact" 
                                value={employeeDetails.vendorContact}
                                onChange={this.onChange} 
                                placeholder= "(000) 000-0000"
                                />
                                {errors.vendorContact && <InlineError text= {errors.vendorContact}/>}
                            </Form.Item>
                         </Col>
                    </Row>


                    <Row>
                        <Col span={8}>
                            <Form.Item error={!!errors.applicationType}>
                                Applied H1 Application Type?
                                <RadioGroup name="applicationType" options={h1applicationType} onChange={this.onChange} value={employeeDetails.applicationType} />
                                {errors.applicationType && <InlineError text= {errors.applicationType}/>}
                            </Form.Item>
                        </Col>
                    </Row>


                    <Row>
                        <Col span={8}>
                            <Form.Item error={!!errors.docsCollectingStartDate}>
                                <DatePicker 
                                    onChange={this.onDocsCollectingStartDate} 
                                    value={employeeDetails.docsCollectingStartDate}
                                    placeholder= "Collection Start"
                                />
                                {errors.docsCollectingStartDate && <InlineError text= {errors.docsCollectingStartDate}/>}
                            </Form.Item>
                        </Col>
                    </Row>


                    <Row>
                        <Col span={8}>
                            <Form.Item error={!!errors.appliedDateLCA}>
                                <DatePicker 
                                    onChange={this.onAppliedDateLCA} 
                                    value={employeeDetails.appliedDateLCA}
                                    placeholder= "Applied LCA Date"
                                />
                                {errors.appliedDateLCA && <InlineError text= {errors.appliedDateLCA}/>}
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item error={!!errors.approvedDateLCA}>
                                <DatePicker 

                                    onChange={this.onApprovedDateLCA} 
                                    value={employeeDetails.approvedDateLCA}
                                    placeholder= "Approved LCA Date"
                                />
                                {errors.approvedDateLCA && <InlineError text= {errors.approvedDateLCA}/>}
                            </Form.Item>
                        </Col>
                        
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item error={!!errors.vendorLetterStatus}>
                                Vendor Letter Status?
                                <RadioGroup name="vendorLetterStatus" options={letterStatus} onChange={this.onChange} value={employeeDetails.vendorLetterStatus} />
                                {errors.vendorLetterStatus && <InlineError text= {errors.vendorLetterStatus}/>}
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item error={!!errors.clientLetterStatus}>
                                Client Letter Status?
                                <RadioGroup name="clientLetterStatus" options={letterStatus} onChange={this.onChange} value={employeeDetails.clientLetterStatus} />
                                {errors.clientLetterStatus && <InlineError text= {errors.clientLetterStatus}/>}
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item error={!!errors.employerRelationDocuments}>
                                Are Employer-Employee relation documents needed?
                                <RadioGroup name="employerRelationDocuments" options={options} onChange={this.onChange} value={employeeDetails.employerRelationDocuments} />
                                {errors.employerRelationDocuments && <InlineError text= {errors.employerRelationDocuments}/>}
                            </Form.Item>
                        </Col>
                    </Row>


                    {/*
                    <Row>
                    <Col span={12}>C1</Col>
                    <Col span={12}>C2</Col>
                    </Row> */}
                <br />
                <br />
                    <Button type="primary" onClick={this.onSubmit}>Submit</Button>
            </Form>
         );
    }
    
}


const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.Auth.isUserLoggedIn,
        userObject: state.Auth.userObject
    };
};
 
export default connect(mapStateToProps)(Employee);