import React, {Component} from 'react';


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
              }
         }
    }
    render() { 
        return ( 
            <div>
                <h2>AttorneyFilesPetiton</h2>
            </div>
         );
    }
}
 
export default AttorneyFilesPetiton;