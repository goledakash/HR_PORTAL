import React, {Component} from 'react'
import { Steps, Timeline , Button, message} from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Step = Steps.Step;

// const steps = [{
//     title: 'First',
//     content: 'First-content',
//   }, {
//     title: 'Second',
//     content: 'Second-content',
//   }, {
//     title: 'Last',
//     content: 'Last-content',
//   }];

class EmpStatusUpdates extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            current: 0,
            taskName:"LCA",
            taskActive:"true",
            actionAssignedTo:"Akash",
            dependencies:"yes",
            rolesRespSubmittedByEmp:true,
            tmStRolesRespSubmittedByEmp:"yes",
            tmEdRolesRespSubmittedByEmp:"yes",
            rolesRespVerified:true,
            tmStRolesRespVerified:"yes",
            tmEdRolesRespVerified:"yes",
            infoUptdToPortalByBiz:true,
            tmStInfoUptdToPortalByBiz:"yes",
            tmEdInfoUptdToPortalByBiz:"yes",
            reviewUnCertLCA:false,
            tmStReviewUnCertLCA:"yes",
            tmEdReviewUnCertLCA:"yes",
            lcaFiledForCert: false,
            tmStLcaFiledForCert:"yes",
            tmEdLcaFiledForCert:"yes",
            appliedDateLCA: moment('11/08/2017'),
            approvedDateLCA: moment('11/08/2017'),
            expectedApprovalDate:moment('11/08/2017'),
            taskCompletedTotalTime:moment().valueOf('11/08/2017'),
            taskStartedTotalTime:moment().valueOf('11/08/2017'),
            lcaSentToEmployee:true,
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
        const { current, 
                rolesRespSubmittedByEmp, 
                rolesRespVerified, 
                infoUptdToPortalByBiz, 
                reviewUnCertLCA, 
                lcaFiledForCert, 
                lcaSentToEmployee,
            } = this.state;

        const steps = [{
            title: 'First',
            content: 'First-content',
          }, {
            title: 'Second',
            content: 'Second-content',
          },];
          
        return ( 
            <div>
                        <h2>EmpStatusUpdates</h2>

                        <Button type="primary">
                            <Link to={{pathname: "/main"}}>Back to Main</Link>
                        </Button>

                        <Steps current={current}>
                            {steps.map(item => <Step key={item.title} title={item.title} />)}
                        </Steps>
                        <div className="steps-content">                             
                            {(current === 0) &&(<Timeline>
                                    <Timeline.Item>Roles Responsibilities Submitted by Employee: <b>{rolesRespSubmittedByEmp ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                    <Timeline.Item>Roles Responsibilities Verified: <b>{rolesRespVerified? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                    <Timeline.Item>Info Updated to portal by Business:<b> {infoUptdToPortalByBiz? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                    <Timeline.Item>Review of Uncertified LCA: <b>{reviewUnCertLCA? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                    <Timeline.Item>LCA Filed for Certification:<b> {lcaFiledForCert? 'COMPLETED': 'NOT COMPLETED'}</b></Timeline.Item>
                                    <Timeline.Item>LCA Sent to Employee: <b>{lcaSentToEmployee? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                </Timeline>)}
                            {(current === 1) &&(<Timeline>
                                    <Timeline.Item>Roles Responsibilities Submitted by Employee: <b>{rolesRespSubmittedByEmp ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                    <Timeline.Item>Roles Responsibilities Verified: <b>{rolesRespVerified? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                    <Timeline.Item>Info Updated to portal by Business:<b> {infoUptdToPortalByBiz? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                    <Timeline.Item>Review of Uncertified LCA: <b>{reviewUnCertLCA? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                    <Timeline.Item>LCA Filed for Certification:<b> {lcaFiledForCert? 'COMPLETED': 'NOT COMPLETED'}</b></Timeline.Item>
                                    <Timeline.Item>LCA Sent to Employee: <b>{lcaSentToEmployee? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                </Timeline>)}

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