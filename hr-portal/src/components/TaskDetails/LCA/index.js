import React, {Component} from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import  Validator from 'validator';
import InlineError from '../../messages/InlineError';
import { Form, Input, Row, Col, Button, DatePicker, Radio, Card} from 'antd';

const options = [
    { label: 'yes', value: 'yes' },
    { label: 'no', value: 'no' },
  ];


const RadioGroup = Radio.Group;
  
const { TextArea } = Input;

class LCA extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step3:{
                taskName:"LCA",
                taskActive: true,
                actionAssignedTo:"Akash",
                dependencies:"",
                empVerWorkLocation:"",
                tmStEmpVerWorkLocation:"",
                tmEdEmpVerWorkLocation:"",
                rolesRespSubmittedByEmp:true,
                tmStRolesRespSubmittedByEmp:"",
                tmEdRolesRespSubmittedByEmp:"",
                rolesRespVerified:true,
                tmStRolesRespVerified:"",
                tmEdRolesRespVerified:"",
                infoUptdToPortalByBiz:true,
                tmStInfoUptdToPortalByBiz:"",
                tmEdInfoUptdToPortalByBiz:"",
                reviewUnCertLCA:false,
                tmStReviewUnCertLCA:"",
                tmEdReviewUnCertLCA:"",
                lcaFiledForCert:"",
                tmStLcaFiledForCert:"",
                tmEdLcaFiledForCert:"",
                appliedDateLCA: moment('11/08/2017'),
                approvedDateLCA: moment('11/08/2017'),
                expectedApprovalDate:"", 
                taskCompletedTotalTime:"",
                taskStartedTotalTime:"",
                lcaSentToEmployee:true    
              },
              errors: {},
         }
    }

    onAppliedLCADateChange = (e, date) => {
        this.setState({
            ...this.state.step3, appliedDateLCA: date,
        });
    };

    onApprovedLCADateChange = (e, date) => {
        this.setState({
            ...this.state.step3, approvedDateLCA: date,
        });
    };

    onExpectedApprovalDateChange = (e, date) => {
        this.setState({
            ...this.state.step3, expectedApprovalDate: date,
        });
    };

    onLCAChange = (e) => {
        let step3 = Object.assign({}, this.state.step3);
        step3[e.target.name] = [e.target.value];
        return this.setState({step3});
    };

    render() { 
        const { step3, errors } = this.state;

        return ( 
            <div>
                <Form>  
                        <Row>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Card title="LCA Details">
                                    <Form.Item error={!!errors.dependencies}  label="Any Dependencies?">                                        
                                        <RadioGroup name="dependencies" options={options} onChange={this.onLCAChange} />
                                        {errors.dependencies && <InlineError text= {errors.dependencies}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.empVerWorkLocation}  label="Is Employee location Verified?">                                        
                                        <RadioGroup name="empVerWorkLocation" options={options} onChange={this.onLCAChange} />
                                        {errors.empVerWorkLocation && <InlineError text= {errors.empVerWorkLocation}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.rolesRespSubmittedByEmp}  label="Roles and Responsibilities Submitted?">                                        
                                        <RadioGroup name="rolesRespSubmittedByEmp" options={options} onChange={this.onLCAChange} />
                                        {errors.rolesRespSubmittedByEmp && <InlineError text= {errors.rolesRespSubmittedByEmp}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.rolesRespSubmittedByEmp}  label="Roles and Responsibilities Verified?">                                        
                                        <RadioGroup name="rolesRespVerified" options={options} onChange={this.onLCAChange} />
                                        {errors.rolesRespVerified && <InlineError text= {errors.rolesRespVerified}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.infoUptdToPortalByBiz}  label="Has business updated the portal?">                                        
                                        <RadioGroup name="infoUptdToPortalByBiz" options={options} onChange={this.onLCAChange} />
                                        {errors.infoUptdToPortalByBiz && <InlineError text= {errors.infoUptdToPortalByBiz}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.reviewUnCertLCA}  label="Reviewed Uncertified LCA?">                                        
                                        <RadioGroup name="reviewUnCertLCA" options={options} onChange={this.onLCAChange} />
                                        {errors.reviewUnCertLCA && <InlineError text= {errors.reviewUnCertLCA}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.lcaFiledForCert}  label="Is LCA filed?">                                        
                                        <RadioGroup name="lcaFiledForCert" options={options} onChange={this.onLCAChange} />
                                        {errors.lcaFiledForCert && <InlineError text= {errors.lcaFiledForCert}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.appliedDateLCA} label="Applied LCA Date">
                                        <DatePicker onChange={this.onAppliedLCADateChange} placeholder= "Applied LCA Date" defaultValue={step3.appliedDateLCA}/>
                                        {errors.appliedDateLCA && <InlineError text= {errors.appliedDateLCA}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.approvedDateLCA} label="Approved LCA Date">
                                        <DatePicker onChange={this.onApprovedLCADateChange} placeholder= "Approved LCA Date" defaultValue={step3.approvedDateLCA}/>
                                        {errors.approvedDateLCA && <InlineError text= {errors.approvedDateLCA}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.expectedApprovalDate} label="Expeacted Approval Date">
                                        <DatePicker onChange={this.onExpectedApprovalDateChange} placeholder= "Expeacted Approval Date" defaultValue={step3.expectedApprovalDate}/>
                                        {errors.expectedApprovalDate && <InlineError text= {errors.expectedApprovalDate}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.lcaSentToEmployee}  label="Is LCA sent to Employee?">                                        
                                        <RadioGroup name="lcaSentToEmployee" options={options} onChange={this.onLCAChange} />
                                        {errors.lcaSentToEmployee && <InlineError text= {errors.lcaSentToEmployee}/>}
                                    </Form.Item>

                                    <Form.Item >
                                    <Button type="primary" onClick={this.onSubmit}>Submit</Button>
                                    </Form.Item >

                                </Card>
                            </Col>
                        </Row>
                    </Form>
            </div>
         );
    }
}
 
export default LCA;