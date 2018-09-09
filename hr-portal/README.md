// Task Priority Colors
{
  "1":"",
  "2":"",
  "3":"",
  "4":"",
  "5":"",
}


// On Employee register we have to create employee Task details object, Employee status object
// Maintain different JSON for Employee status, Employee Work Details, Employee Personal Details.
{
    "empId":"",
    "firstName": "akash",
    "lastName": "goled",
    "emailId01": "abc@abc.com",
    "emailId02": "abc@abc.com",
    "phoneNo": "1112223333",
    "contDetails":{
      "address1":"",
      "address2":"",
      "city":"",
      "state":"",
      "zipCode":""
    },
    "workInfo":{
      "workLocation":{
        "address1":"",
        "address2":"",
        "city":"",
        "state":"",
        "zipCode":""
      },
    },
    "clientInfo":{
      "clientName": "hvgjvuygvy",
      "managerName":"",
      "clientAddress":{
          "address1":"",
          "address2":"",
          "city":"",
          "state":"",
          "zipCode":""
        },
    },
    "vendorInfo":{
      "vendorAgreement": "yes",
      "vendorName": "vggjvjvjv",
      "vendorContact": "223334444",
      "venContName":"",
      "venContPhone":"",
    },
    taskInfo:{
      "taskCompleted":"",
      "taskPrioirty":"1",
      "applicationType":"",
      "taskCreatedDate":"",  
    },  
    recruiter:{
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
    },
    empStatus:{
      "curStatusMsg":"",
      "curTargetCmpDate":"",
      "nextStepMsg":"",  
      "expTarCmpDate":"",
      "toCmpDate":"",
      "expCmpDate":"",
      "toSendEmail":[]
      "taskPriority":"",
      "isHighPriority":"",
      "taskStage":""
    },
    business:{
      step1:{
        taskName:"Employee",
        taskActive:"true",
        actionAssignedTo:"Akash",
      },
      step2:{
        taskName:"Recruiter",
        taskActive:"true",
        actionAssignedTo:"Akash",
        vendorAgreement: "yes",
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
        comments:[{
          msg:"",
          createdAt:"",
          user:"",
          taskAssignedTo:""
        }]
      },
      step3:{
        taskName:"LCA",
        taskActive:"true",
        taskStartedActive:"true",
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
        lcaSentToEmployee:true,
        comments:[{
          msg:"",
          createdAt:"",
          user:"",
          taskAssignedTo:""
        }]    
      },
      step4:{
        taskName:"H1bDocumentsPrep",
        taskActive:"true",
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
        comments:[{
          msg:"",
          createdAt:"",
          user:"",
          taskAssignedTo:""
        }]      
      },
      step5:{
        taskName:"H1bDocumentsHRReview",
        taskActive:"true",
        actionAssignedTo:"Akash",
        dependencies:"",
        hrRecvdAllDocsAndReviewdFromEmp:"",
        tmStHrRecvdAllDocsAndReviewdFromEmp:"",
        tmEdHrRecvdAllDocsAndReviewdFromEmp:"",
        comments:[{
          msg:"",
          createdAt:"",
          user:"",
          taskAssignedTo:""
        }]
      },
      step6:{
        taskName:"AttorneyReceivedDocs",
        taskActive:"true",
        actionAssignedTo:"Akash",
        dependencies:"",
        attroneyReceivedAllDocsFromBusiness:"",
        tmStAttroneyReceivedAllDocsFromBusiness:"",
        tmEdAttroneyReceivedAllDocsFromBusiness:"",
        comments:[{
          msg:"",
          createdAt:"",
          user:"",
          taskAssignedTo:""
        }]
      },
      step7:{
        taskName:"AttorneyReviewedDocs",
        taskActive:"true",
        actionAssignedTo:"Akash",
        dependencies:"",
        attroneyReviewedAllDocsFromBusiness:"",
        tmStAttroneyReceivedAllDocsFromBusiness:"",
        tmEdAttroneyReceivedAllDocsFromBusiness:"",
        comments:[{
          msg:"",
          createdAt:"",
          user:"",
          taskAssignedTo:""
        }]
      },
      step8:{
        taskName:"AttorneyFilesPetiton",
        taskActive:"true",
        actionAssignedTo:"Akash",
        dependencies:"",
        attroneyFilesPetiton:"",
        tmStAttroneyFilesPetiton:"",
        tmEdAttroneyFilesPetiton:"",
        attroneyUpdatedFedexNumber:"",
        tmStAttroneyUpdatedFedexNumber:"",
        tmEdAttroneyUpdatedFedexNumber:"",
        comments:[{
          msg:"",
          createdAt:"",
          user:"",
          taskAssignedTo:""
        }]
      },
    }
}
    
{
  timeLine:{
    step3:{
      items:["rolesRespSubmittedByEmp","rolesRespVerified","infoUptdToPortalByBiz","reviewUnCertLCA","lcaFiledForCert","lcaSentToEmployee"]
    },
    step4:{
      items:[{
          key:"recvdVendorLtrFrmEmp",
          value:"recvdVendorLtrFrmEmp"
        },
        {
          key:"recvdClntLtrFrmEmp",
          value:"recvdClntLtrFrmEmp"
        },
        {
          key:"otherPendngDocs",
          value:"otherPendngDocs"
        },
        {
          key:"jobTitleIsCorrect",
          value:"jobTitleIsCorrect"
        },
        {
          key:"empHasDependents",
          value:"empHasDependents"
        },
        {
          key:"recvdAllH4DocsFrmEmp",
          value:"recvdAllH4DocsFrmEmp"
        },
        {
          key:"recvdAllH4DepDocsFrmEmp",
          value:"recvdAllH4DepDocsFrmEmp"
        },
        {
          key:"recvdAllH1bDocsFrmEmp",
          value:"recvdAllH1bDocsFrmEmp"
        }]
    },
  }
}

/*  Employee Object */
//
{
  "curStatusMsg":"",
  "curTargetCmpDate":"",
  "nextStepMsg":"",  
  "expTarCmpDate":"",
  "toCmpDate":"",
  "expCmpDate":"",
  "toSendEmail":[]
  "taskPriority":"",
  "isHighPriority":""
}

// below info required from Emp
  {
    "empVerifiedWrkLocation":""
    "workLocation":{      
      "address1":"",
      "address2":"",
      "city":"",
      "state":"",
      "zipCode":""
    },
    "":""
  }
// Recruiter
{
"rectrSentPlacDet":"",
"rectrSentVenAgreeSignedCopy":"",

}

/*Task Details Objects*/
{
  "emp_details":{
    "id":"",
    "name":"",
    "rectrSentPlacDet":"",
    "rectrSentVenAgree":"",
    "projctStartDate":"",
    "isImmActionReqFrmEmp":"",// shows the top list of items
    "highPrirityTaskFrmEmp":"",// shows the top list of items
---------------------------
// employee has to submit the followign docuemnts.
  "empVerfiedWrkLocation":""
  "empSubmittedAllDocs":"",

----------------------------


    --------------------------------
  "empSignedOfferLetter":"",
  "applicationType":"",
  "docsSubmissionDate":"",

  "workInfo":{
      "jobStatus":{
        "placementDate: moment('11/08/2017'),
        "projectStartDate: moment('11/08/2017'),
        "urgentSituation: 'bhjbbhjkjn',
        "signedOfferLetter: 'no',
        "vendorLetterStatus": 'approved',
        "clientLetterStatus": 'waiting',
        applicationType:'type1',
      },
      "workLocation":{
        "address1":"",
        "address2":"",
        "city":"",
        "state":"",
        "zipCode":""
      }
    },
     "clientInfo":{
      "clientName": "hvgjvuygvy",
      "managerName":"",
      "clientAddress":{
          "address1":"",
          "address2":"",
          "city":"",
          "state":"",
          "zipCode":""
        },
    },
    "vendorInfo":{
      "vendorAgreement": "yes",
      "vendorName": "vggjvjvjv",
      "vendorContact": "223334444",
      "venContName":"",
      "venContPhone":"",
    },
    ---------
    "cur_state":"",
    "due_date":"",
    "is_pending_on":"",
    "cmp_due_date":"",
    "p_step_1":"",
    "p_step_2":"",
    "p_step_3":"",
    "p_step_4":"",
    "p_step_5":"",
    "p_step_6":"",
    "p_step_7":"",
    "p_step_8":"",
  },
  "taskDetails":{
      "p_step_1":{
        "header_color":"",
        "is_active" :"",
        "readonly":"",
        "children":{
            step_1:{
              "is_active" :"",
            },
            step_2:{
              "is_active" :"",
            },
            step_3:{
              "is_active" :"",
            }
        }
      },
      "p_step_2":{
          "name":"",
          "is_active":"",
          "is_completed":"",
          "is_pending":"",
          "header_color":"",
          "children":{
            step_1:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_2:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_3:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_4:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
          }
      },
      "p_step_3":{
        "name":"",
        "is_active":"",
        "is_completed":"",
        "is_pending":"",
        "header_color":"",
        "children":{step_1:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_2:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_3:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_4:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
        }
      },
      "p_step_4":{
        "name":"",
        "is_active":"",
        "is_completed":"",
        "is_pending":"",
        "header_color":"",
        "children":{
          step_1:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_2:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_3:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_4:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
        }
      },
      "p_step_5":{
        "name":"",
        "is_active":"",
        "is_completed":"",
        "is_pending":"",
        "header_color":"",
        "children":{
          step_1:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_2:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_3:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_4:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
        }
      },
      "p_step_6":{
        "name":"",
        "is_active":"",
        "is_completed":"",
        "is_pending":"",
        "header_color":"",
        "children":{
          step_1:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_2:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_3:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_4:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
        }
      },
      "p_step_7":{
        "name":"",
        "is_active":"",
        "is_completed":"",
        "is_pending":"",
        "header_color":"",
        "children":{step_1:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_2:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_3:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_4:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },}
      },
      "p_step_8":{
        "name":"",
        "is_active":"",
        "is_completed":"",
        "is_pending":"",
        "header_color":"",
        "children":{
          step_1:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_2:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_3:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
            step_4:{
              "name":"",
              "is_active":"",
              "is_completed":"",
              "is_pending":"",
              "elements":{}
            },
        }
      },
  }
}

// GIT Commands

git diff
git pull

git stash
git pull
git stash pop

/*
//Source Of Supply
[{
  "sourceOfSupply":"Warehouse",
  "sourceOfSupplyId":"1111",
},
{
  "sourceOfSupply":"Cross-Dock",
  "sourceOfSupplyId":"1112",
},
{
  "sourceOfSupply":"DSD",
  "sourceOfSupplyId":"1113",
}]
//Item Status
[{
  "itemStatus":"Active Item",
  "itemStatusId":"PI_ITM_STUS_CD",
},
{
  "itemStatus":"Discontinued Item",
  "itemStatusId":"PI_ITM_STUS_DI"
}]

*/
// Search By Code

 {
  "results":[{
    "sourceOfSupply":"Warehouse",
    "sourceOfSupplyId":"1111",
    "itemStatus":"Active Item",
    "itemStatusId":"PI_ITM_STUS_CD",
    "itemType":"Regular Case",
    "itemTypeId":"CI_SHIP_PALLET_CD",
    "itemSettingsId":"SI_PURCH_FL",
    "itemSettings":"Purchase Flag",
    "itemCode":"SuperValu Item",
    "itemType":"super",
    "categoryType":"retail",
    "category":"Bakery",
    "categoryCode":"1234567890",
    "itemName":"Bread",
    "itemId":"321123"
  },
  {
    "sourceOfSupply":"Warehouse",
    "sourceOfSupplyId":"1111",
    "itemStatus":"Active Item",
    "itemStatusId":"PI_ITM_STUS_CD",
    "itemType":"Regular Case",
    "itemTypeId":"CI_SHIP_PALLET_CD",
    "itemSettingsId":"SI_PURCH_FL",
    "itemSettings":"Purchase Flag",
    "itemCode":"SuperValu Item",
    "itemType":"super",
    "categoryType":"retail",
    "category":"Bakery",
    "categoryCode":"1234567890",
    "itemName":"Cookies",
    "itemId":"321456"
  },
  {
    "sourceOfSupply":"Warehouse",
    "sourceOfSupplyId":"1111",
    "itemStatus":"Active Item",
    "itemStatusId":"PI_ITM_STUS_CD",
    "itemType":"Regular Case",
    "itemTypeId":"CI_SHIP_PALLET_CD",
    "itemSettingsId":"SI_PURCH_FL",
    "itemSettings":"Purchase Flag",
    "itemCode":"SuperValu Item",
    "itemType":"super",
    "categoryType":"retail",
    "category":"Bakery",
    "categoryCode":"1234567890",
    "itemName":"Soda",
    "itemId":"321345"
  },
  {
    "sourceOfSupply":"Cross-Dock",
    "sourceOfSupplyId":"1112",
    "itemStatus":"Active Item",
    "itemStatusId":"PI_ITM_STUS_CD",
    "itemType":"Regular Case",
    "itemTypeId":"CI_SHIP_PALLET_CD",
    "itemSettingsId":"SI_PURCH_FL",
    "itemSettings":"Purchase Flag",
    "itemCode":"SuperValu Item",
    "itemType":"super",
    "categoryType":"retail",
    "category":"Bakery",
    "categoryCode":"1234567890",
    "itemName":"Soda",
    "itemId":"321345"
  },{
    "sourceOfSupply":"DSD",
    "sourceOfSupplyId":"1113",
    "itemStatus":"Active Item",
    "itemStatusId":"PI_ITM_STUS_CD",
    "itemType":"Regular Case",
    "itemTypeId":"CI_SHIP_PALLET_CD",
    "itemSettingsId":"SI_PURCH_FL",
    "itemSettings":"Purchase Flag",
    "itemCode":"SuperValu Item",
    "itemType":"super",
    "categoryType":"retail",
    "category":"Bakery",
    "categoryCode":"1234567890",
    "itemName":"Soda",
    "itemId":"321345"
  },
  {
    "sourceOfSupply":"DSD",
    "sourceOfSupplyId":"1113",
    "itemStatus":"Discontinued Item",
    "itemStatusId":"PI_ITM_STUS_DI",
    "itemType":"Regular Case",
    "itemTypeId":"CI_SHIP_PALLET_CD",
    "itemSettingsId":"SI_PURCH_FL",
    "itemSettings":"Purchase Flag",
    "itemCode":"SuperValu Item",
    "itemType":"super",
    "categoryType":"retail",
    "category":"Bakery",
    "categoryCode":"1234567890",
    "itemName":"Soda",
    "itemId":"321345"
  }]
}