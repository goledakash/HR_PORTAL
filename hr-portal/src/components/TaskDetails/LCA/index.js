import React, {Component} from 'react';
import moment from 'moment';


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
              }
         }
    }
    render() { 
        return ( 
            <div>
                <h2>LCA</h2>
            </div>
         );
    }
}
 
export default LCA;