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


class AttorneyFilesPetiton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step8:{
                taskName:"AttorneyFilesPetiton",
                taskActive: true,
                actionAssignedTo:"Akash",
                dependencies:"",
                attroneyFilesPetiton:"",
                tmStAttroneyFilesPetiton:"",
                tmEdAttroneyFilesPetiton:"",
                attroneyUpdatedFedexNumber:"",
                tmStAttroneyUpdatedFedexNumber:"",
                tmEdAttroneyUpdatedFedexNumber:"",
              },
              errors: {},
         }
    }

    onAttorneyFilesPetitionChange= (e) => {
        let step8 = Object.assign({}, this.state.step8);
        step8[e.target.name] = [e.target.value];
        return this.setState({step8});
    };

    render() { 
        const { step8, errors } = this.state;

        return ( 
            <div>
                    <Form>  
                        <Row>
                            <Col>
                                <Card title="Attorney Files Petition">
                                    
                                    <Form.Item error={!!errors.dependencies}  label="Any Dependencies?">                                        
                                        <RadioGroup name="dependencies" options={options} onChange={this.onAttorneyFilesPetitionChange} />
                                        {errors.dependencies && <InlineError text= {errors.dependencies}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.attroneyFilesPetiton}  label="Did Attorney File the Petition?">                                        
                                        <RadioGroup name="attroneyFilesPetiton" options={options} onChange={this.onAttorneyFilesPetitionChange} />
                                        {errors.attroneyFilesPetiton && <InlineError text= {errors.attroneyFilesPetiton}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.attroneyUpdatedFedexNumber}  label="Did Attorney Update Fedex Number?">                                        
                                        <RadioGroup name="attroneyUpdatedFedexNumber" options={options} onChange={this.onAttorneyFilesPetitionChange} />
                                        {errors.attroneyUpdatedFedexNumber && <InlineError text= {errors.attroneyUpdatedFedexNumber}/>}
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
 
export default AttorneyFilesPetiton;