import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import InlineError from '../../messages/InlineError';
import { Form, Input, Row, Col, Button, DatePicker, Radio, Card} from 'antd';

const options = [
    { label: 'yes', value: 'yes' },
    { label: 'no', value: 'no' },
  ];


const RadioGroup = Radio.Group;
  
const { TextArea } = Input;

class AttorneyReceivedDocs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step6:{
                taskName:"AttorneyReceivedDocs",
                taskActive: true,
                actionAssignedTo:"Akash",
                dependencies:"",
                attroneyReceivedAllDocsFromBusiness:"",
                tmStAttroneyReceivedAllDocsFromBusiness:"",
                tmEdAttroneyReceivedAllDocsFromBusiness:"",
              },
            errors: {},
         }
    }

    onAttorneyReceivedChange= (e) => {
        let step6 = Object.assign({}, this.state.step6);
        step6[e.target.name] = [e.target.value];
        return this.setState({step6});
    };

    render() { 
        const { step6, errors } = this.state;

        return ( 
            <div>
                    <Form>  
                        <Row>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Card title="Attorney Received Docs">
                                    
                                    <Form.Item error={!!errors.dependencies}  label="Any Dependencies?">                                        
                                        <RadioGroup name="dependencies" options={options} onChange={this.onAttorneyReceivedChange} />
                                        {errors.dependencies && <InlineError text= {errors.dependencies}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.attroneyReceivedAllDocsFromBusiness}  label="Did Attorney Receive all documents from business?">                                        
                                        <RadioGroup name="attroneyReceivedAllDocsFromBusiness" options={options} onChange={this.onAttorneyReceivedChange} />
                                        {errors.attroneyReceivedAllDocsFromBusiness && <InlineError text= {errors.attroneyReceivedAllDocsFromBusiness}/>}
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
 
export default AttorneyReceivedDocs;