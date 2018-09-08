import React, {Component} from 'react';


class H1bDocumentsPrep extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step4:{
                taskName:"H1bDocumentsPrep",
                taskActive: true,
                actionAssignedTo:"Akash",
                dependencies:"",
                recvdVendorLtrFrmEmp:"",  
                tmStRecvdVendorLtrFrmEmp:"",  
                tmEdRecvdVendorLtrFrmEmp:"",        
                recvdClntLtrFrmEmp:"",
                tmStRecvdClntLtrFrmEmp:"",
                tmEdRecvdClntLtrFrmEmp:"",
                otherPendngDocs:"",
                tmStOtherPendngDocs:"",
                tmEdOtherPendngDocs:"",        
                jobTitleIsCorrect:"",
                empHasDependents:"",
                recvdAllH4DocsFrmEmp:"",
                tmStRecvdAllH4DocsFrmEmp:"",
                tmEdRecvdAllH4DocsFrmEmp:"",
                recvdAllH4DepDocsFrmEmp:"",
                tmStRecvdAllH4DepDocsFrmEmp:"",
                tmEdRecvdAllH4DepDocsFrmEmp:"",  
                recvdAllH1bDocsFrmEmp:"",
                tmStRecvdAllH1bDocsFrmEmp:"",
                tmEdRecvdAllH1bDocsFrmEmp:"",        
              }
         }
    }
    render() { 
        return ( 
            <div>
                <h2>H1bDocumentsPrep</h2>
            </div>
         );
    }
}
 
export default H1bDocumentsPrep;