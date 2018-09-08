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


class AttorneyReviewedDocs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step7:{
                taskName:"AttorneyReviewedDocs",
                taskActive: true,
                actionAssignedTo:"Akash",
                dependencies:"",
                attroneyReviewedAllDocsFromBusiness:"",
                tmStAttroneyReceivedAllDocsFromBusiness:"",
                tmEdAttroneyReceivedAllDocsFromBusiness:"",
              },
              errors: {},
         }
    }

    onAttorneyReviewedChange= (e) => {
        let step7 = Object.assign({}, this.state.step7);
        step7[e.target.name] = [e.target.value];
        return this.setState({step7});
    };

    render() { 
        const { step7, errors } = this.state;

        return ( 
            <div>
                    <Form>  
                        <Row>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Card title="Attorney Reviewed Docs">
                                    
                                    <Form.Item error={!!errors.dependencies}  label="Any Dependencies?">                                        
                                        <RadioGroup name="dependencies" options={options} onChange={this.onAttorneyReviewedChange} />
                                        {errors.dependencies && <InlineError text= {errors.dependencies}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.attroneyReviewedAllDocsFromBusiness}  label="Did Attorney Review all documents?">                                        
                                        <RadioGroup name="attroneyReviewedAllDocsFromBusiness" options={options} onChange={this.onAttorneyReviewedChange} />
                                        {errors.attroneyReviewedAllDocsFromBusiness && <InlineError text= {errors.attroneyReviewedAllDocsFromBusiness}/>}
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
 
export default AttorneyReviewedDocs;