import React, {Component} from 'react';


class H1bDocumentsHRReview extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step5:{
                taskName:"H1bDocumentsHRReview",
                taskActive: true,
                actionAssignedTo:"Akash",
                dependencies:"",
                hrRecvdAllDocsAndReviewdFromEmp:"",
                tmStHrRecvdAllDocsAndReviewdFromEmp:"",
                tmEdHrRecvdAllDocsAndReviewdFromEmp:"",
              }
         }
    }
    render() { 
        return ( 
            <div>
                <h2>H1bDocumentsHRReview</h2>
            </div>
         );
    }
}
 
export default H1bDocumentsHRReview;