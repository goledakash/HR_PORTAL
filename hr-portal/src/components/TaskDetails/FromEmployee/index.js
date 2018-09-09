import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Collapse, Tabs, Input, InputNumber, Select, Upload, Icon, Row, Col, Card, Radio, Form  } from 'antd';
import InlineError from '../../messages/InlineError';

class FromEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {             
            "empId":"",
            "firstName": "akash",
            "lastName": "goled",
            "emailId01": "abc@abc.com",
            "emailId02": "abc@abc.com",
            "phoneNo": "1112223333",
            "contDetails":{
                "address1":"",
                "address2":"",
                "city":"",
                "state":"",
                "zipCode":""
            },                
            "workInfo":{
                "workLocation":{
                    "address1":"",
                    "address2":"",
                    "city":"",
                    "state":"",
                    "zipCode":""
                },
            },
            "clientInfo":{
                "clientName": "hvgjvuygvy",
                "managerName":"",
                "clientAddress":{
                    "address1":"",
                    "address2":"",
                    "city":"",
                    "state":"",
                    "zipCode":""
                    },
            },
            "vendorInfo":{                
                "vendorName": "vggjvjvjv",
                "vendorContact": "223334444",
                "venContName":"",
                "venContPhone":"",
            }, 
            errors:{}           
        }
    }
    
    onCancelButtonClicked = () => {}
    
    onSubmitButtonClicked = () => {}

    render() { 
        const { errors } = this.state;
        return ( 
            <div>
                <Row>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Card title="Employee Info">  
                            <Form.Item error={!!errors.firstName}  label="First Name" className= "firstName">                               
                                <Input type="text" name="firstName" value= {this.state.firstName} onChange={this.onChange} placeholder="FirstName"  /> 
                                {errors.firstName && <InlineError text= {errors.firstName}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.lastName}  label="Last Name" className= "firstName">
                                <Input type="text" name="lastName" value= {this.state.lastName} onChange={this.onChange} placeholder="LastName"  /> 
                                {errors.lastName && <InlineError text= {errors.lastName}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.emailId01}  label="Primary Email" className= "firstName">
                                <Input type="text" name="emailId01" value= {this.state.emailId01} onChange={this.onChange} placeholder="Primary Email"  /> 
                                {errors.emailId01 && <InlineError text= {errors.emailId01}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.emailId02}  label="Secondary Email" className= "firstName">
                                <Input type="text" name="emailId02" value={this.state.emailId02} onChange={this.onChange} placeholder="Secondary Email"  /> 
                                {errors.emailId02 && <InlineError text= {errors.emailId02}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.phoneNo}  label="Phone Number" className= "firstName">
                                <Input type="text" name="phoneNo" value= {this.state.phoneNo} onChange={this.onChange} placeholder="PhoneNo"  /> 
                                {errors.phoneNo && <InlineError text= {errors.phoneNo}/>}
                            </Form.Item>
                        </Card>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Card title="Employee Conatct"> 
                            <Form.Item error={!!errors.address1}  label="Address 1" className= "firstName">
                                <Input type="text" name="address1" value= {this.state.contDetails.address1} onChange={this.onChange} placeholder="Address 1"  /> 
                                {errors.address1 && <InlineError text= {errors.address1}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.address2}  label="Address 2" className= "firstName">
                                <Input type="text" name="address2" value= {this.state.contDetails.address2} onChange={this.onChange} placeholder="Address 2"  /> 
                                {errors.address2 && <InlineError text= {errors.address2}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.city}  label="City" className= "firstName">
                                <Input type="text" name="city" value= {this.state.contDetails.city} onChange={this.onChange} placeholder="city"  /> 
                                {errors.city && <InlineError text= {errors.city}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.state}  label="State" className= "firstName">
                                <Input type="text" name="state" value= {this.state.contDetails.state} onChange={this.onChange} placeholder="state"  /> 
                                {errors.state && <InlineError text= {errors.state}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.zipcode}  label="ZipCode" className= "firstName">
                                <Input type="text" name="zipcode" value= {this.state.contDetails.zipcode} onChange={this.onChange} placeholder="zipcode"  /> 
                                {errors.zipcode && <InlineError text= {errors.zipcode}/>}
                            </Form.Item>
                        </Card>
                    </Col>        
                </Row>
                <Row>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Card title="WorkLocation">
                            <Form.Item error={!!errors.workLocation.address1}  label="Address1" className= "firstName">                                 
                                <Input type="text" name="address1" value= {this.state.workLocation.address1} onChange={this.onChange} placeholder="Address 1"  /> 
                                {errors.workLocation.address1 && <InlineError text= {errors.workLocation.address1}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.workLocation.address2}  label="Address2" className= "firstName">
                                <Input type="text" name="address2" value= {this.state.workLocation.address2} onChange={this.onChange} placeholder="Address 2"  /> 
                                {errors.workLocation.address2 && <InlineError text= {errors.workLocation.address2}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.workLocation.city}  label="City" className= "firstName">
                                <Input type="text" name="city" value= {this.state.workLocation.city} onChange={this.onChange} placeholder="city"  /> 
                                {errors.workLocation.city && <InlineError text= {errors.workLocation.city}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.workLocation.state}  label="State" className= "firstName">
                                <Input type="text" name="state" value= {this.state.workLocation.state} onChange={this.onChange} placeholder="state"  /> 
                                {errors.workLocation.state && <InlineError text= {errors.workLocation.state}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.workLocation.zipcode}  label="ZipCode" className= "firstName">
                                <Input type="text" name="zipcode" value= {this.state.workLocation.zipcode} onChange={this.onChange} placeholder="zipcode"  /> 
                                {errors.workLocation.zipcode && <InlineError text= {errors.workLocation.zipcode}/>}
                            </Form.Item>
                        </Card>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Card title="Vendor">
                                        {/* <Form.Item error={!!errors.vendorAgreement} label="Agreement signed by Vendor?">                                            
                                            <RadioGroup name="vendorAgreement" options={options} onChange={this.onVendorInfoChange}  />
                                            {errors.vendorAgreement && <InlineError text= {errors.vendorAgreement}/>}
                                        </Form.Item> */}
                                        <Form.Item error={!!errors.vendorInfo.vendorName} label="Vendor Name">
                                            <Input type="vendorName" name="vendorName"value= {this.state.vendorInfo.vendorName} onChange={this.onVendorInfoChange} placeholder="Vendor Name" />
                                            {errors.vendorInfo.vendorName && <InlineError text= {errors.vendorInfo.vendorName}/>}
                                        </Form.Item>
                                        <Form.Item error={!!errors.vendorInfo.vendorContact} label="Vendor Phone">
                                            <Input type="vendorContact" name="vendorContact" value={this.state.vendorInfo.vendorContact} onChange={this.onVendorInfoChange} placeholder= "(000) 000-0000"/>
                                            {errors.vendorInfo.vendorContact && <InlineError text= {errors.vendorInfo.vendorContact}/>}
                                        </Form.Item>
                                        <Form.Item error={!!errors.vendorInfo.venContName} label="Vendor Contact Person">
                                            <Input type="venContName" name="venContName"value= {this.state.vendorInfo.venContName} onChange={this.onVendorInfoChange} placeholder="Vendor Contact Name" />
                                             {errors.vendorInfo.venContName && <InlineError text= {errors.vendorInfo.venContName}/>}
                                        </Form.Item>
                                        <Form.Item error={!!errors.vendorInfo.venContPhone} label="Vendor Contact Person Phone">
                                            <Input type="venContPhone" name="venContPhone" value={this.state.vendorInfo.venContPhone} onChange={this.onVendorInfoChange} placeholder= "(000) 000-0000" />
                                            {errors.vendorInfo.venContPhone && <InlineError text= {errors.vendorInfo.venContPhone}/>}
                                        </Form.Item>
                        </Card>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Card title="Client">
                            <Form.Item error={!!errors.clientAddress.address1}  label="ZipCode" className= "firstName">
                                <Input type="text" name="address1" value= {this.state.clientAddress.address1} onChange={this.onChange} placeholder="Address 1"  /> 
                                {errors.clientAddress.address1 && <InlineError text= {errors.clientAddress.address1}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.clientAddress.address1}  label="ZipCode" className= "firstName">
                                <Input type="text" name="address2" value= {this.state.clientAddress.address2} onChange={this.onChange} placeholder="Address 2"  /> 
                                {errors.clientAddress.address1 && <InlineError text= {errors.clientAddress.address1}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.clientAddress.city} label="ZipCode" className= "firstName">
                                <Input type="text" name="city" value= {this.state.clientAddress.city} onChange={this.onChange} placeholder="city"  /> 
                                {errors.clientAddress.city && <InlineError text= {errors.clientAddress.city}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.clientAddress.state}  label="ZipCode" className= "firstName">
                                <Input type="text" name="state" value= {this.state.clientAddress.state} onChange={this.onChange} placeholder="state"  /> 
                                {errors.clientAddress.state && <InlineError text= {errors.clientAddress.state}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.clientAddress.zipcode}  label="ZipCode" className= "firstName">
                                <Input type="text" name="zipcode" value= {this.state.clientAddress.zipcode} onChange={this.onChange} placeholder="zipcode"  /> 
                                {errors.clientAddress.zipcode && <InlineError text= {errors.clientAddress.zipcode}/>}
                            </Form.Item>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>   
                        <div>
                            <Button type="primary" onClick={() => this.onCancelButtonClicked()}>Cancel</Button>
                            <Button type="primary" onClick={() => this.onSubmitButtonClicked()}>Submit</Button>
                        </div>
                    </Col>
                </Row>
            </div>
         );
    }
}
 
export default FromEmployee;