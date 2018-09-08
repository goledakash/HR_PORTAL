import React, {Component} from 'react';


class Recruiter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step2:{
                taskName:"Recruiter",
                taskActive: true,
                actionAssignedTo:"Akash",
                projectStartDate:"",
                empSignedOfferLetter:"",
                placementDate:"",
                urgentSituation:"",
                applicationType:"type1",
                docsCollectingStartDate:"",
                employerRelationDocuments: "yes",
                vendorLetterStatus: "approved",
                clientLetterStatus: "waiting",
                empVerifiedWrkLocation:"",
                rectrSentPlacDet:"",
                rectrSentVenAgreeSignedCopy:"",
            }
          }
    }
    render() { 
        return ( 
            <div>
                <h2>Recruiter</h2>
            </div>
         );
    }
}
 
export default Recruiter;