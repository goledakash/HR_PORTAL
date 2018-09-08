import React, {Component} from 'react';


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
              }
         }
    }
    render() { 
        return ( 
            <div>
                <h2>AttorneyReviewedDocs</h2>
            </div>
         );
    }
}
 
export default AttorneyReviewedDocs;