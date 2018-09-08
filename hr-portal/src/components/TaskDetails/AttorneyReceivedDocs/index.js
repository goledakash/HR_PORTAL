import React, {Component} from 'react';


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
              }
         }
    }
    render() { 
        return ( 
            <div>
                <h2>AttorneyReceivedDocs</h2>
            </div>
         );
    }
}
 
export default AttorneyReceivedDocs;