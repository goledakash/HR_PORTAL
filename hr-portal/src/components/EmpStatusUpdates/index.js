import React, {Component} from 'react'
import { Steps, Timeline , Button, message} from 'antd';
import moment from 'moment';

const Step = Steps.Step;

const steps = [{
    title: 'First',
    content: 'First-content',
  }, {
    title: 'Second',
    content: 'Second-content',
  }, {
    title: 'Last',
    content: 'Last-content',
  }];

class EmpStatusUpdates extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            current: 0,
            taskName:"LCA",
            taskActive:"true",
            actionAssignedTo:"Akash",
            dependencies:"",
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
         }
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }

    render() { 
        const { current } = this.state;
        return ( 
            <div>
                        <h2>EmpStatusUpdates</h2>
                        <Steps current={current}>
                            {steps.map(item => <Step key={item.title} title={item.title} />)}
                        </Steps>
                        <div className="steps-content">
                            <Timeline>
                                <Timeline.Item>{steps[current].content}</Timeline.Item>
                                <Timeline.Item>{steps[current].content}</Timeline.Item>
                            </Timeline>
                        </div>
                        
                        <div className="steps-action">
                            {
                                current < steps.length - 1
                                && <Button type="primary" onClick={() => this.next()}>Next</Button>
                            }
                            {
                                current === steps.length - 1
                                && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                            }
                            {
                                current > 0
                                && (
                                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                Previous
                                </Button>
                                )
                            }
                        </div>

            </div>
         );
    }
}
 
export default EmpStatusUpdates;