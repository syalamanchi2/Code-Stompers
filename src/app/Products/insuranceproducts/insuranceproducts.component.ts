import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insuranceproducts',
  templateUrl: './insuranceproducts.component.html',
  styleUrls: ['./insuranceproducts.component.css']
})
export class InsuranceproductsComponent implements OnInit {

  public selectedLineOfBusiness:string = "Select"
  public selectedCompany:string = "Select"
  public selectedPolicyType:string = "Select"
  public policyData:any = [];
  public filterPolicyData1:any = [];
  public filterPolicyData2:any = [];
  public policyTypeArray:any = [];
  public compareDataShow:boolean = false;
 public compareDisable:boolean = false;
  constructor() { }
  
  ngOnInit(): void {
    this.policyData = this.policyData1;
  }

  onLineOfBusinessChange(e:any): void{
 this.selectedLineOfBusiness = e.target.value;
 
  }

  onPolicyTypeChange(e:any): void{
    this.selectedPolicyType = e.target.value;
    this.compareDisable = true;
    
     }

 onCompanyChange(e:any): void{
this.selectedCompany = e.target.value;
if(this.selectedLineOfBusiness == 'Auto' && this.selectedCompany == 'CompanyA'){
  this.policyTypeArray = [{
    "SubPolicyType": "Bike",
  },{
    "SubPolicyType": "Car",
  }]
}
else if (this.selectedLineOfBusiness == 'Auto' && this.selectedCompany == 'CompanyB'){
  this.policyTypeArray = [{
    "SubPolicyType": "Bike",
  },{
    "SubPolicyType": "Car",
  }]
}
else if(this.selectedLineOfBusiness == 'Health' && this.selectedCompany == 'CompanyA'){
  this.policyTypeArray = [{
    "SubPolicyType": "Before30",
  },{
    "SubPolicyType": "After30",
  }]
}
else if(this.selectedLineOfBusiness == 'Health' && this.selectedCompany == 'CompanyB'){
  this.policyTypeArray = [{
    "SubPolicyType": "Before30",
  },{
    "SubPolicyType": "After30",
  }]
}

 }
 onCompareClick(e:any): void{
   this.compareDataShow = true;
//  let policyDetails  = this.policyData as []
 //alert("Success");
//  this.filterPolicyData1 = policyDetails.filter(ft=>ft.PolicyType == this.selectedLineOfBusiness )
console.log(this.policyData.filter((ft:any)=>ft.PolicyType == this.selectedLineOfBusiness 
&& ft.VendorName == this.selectedCompany && ft.SubPolicyType == this.selectedPolicyType))
console.log(this.policyData.filter((ft:any)=>ft.PolicyType == this.selectedLineOfBusiness 
&& ft.VendorName != this.selectedCompany && ft.SubPolicyType == this.selectedPolicyType))
this.filterPolicyData1 = this.policyData.filter((ft:any)=>ft.PolicyType == this.selectedLineOfBusiness 
&& ft.VendorName == this.selectedCompany && ft.SubPolicyType == this.selectedPolicyType);
this.filterPolicyData2 = this.policyData.filter((ft:any)=>ft.PolicyType == this.selectedLineOfBusiness 
&& ft.VendorName != this.selectedCompany && ft.SubPolicyType == this.selectedPolicyType);
  
   }

 companyArray:any = [{
   "companyName": "CompanyA",
   "companyCode": "1"
 },
 {
  "companyName": "CompanyB",
  "companyCode": "2"
 }
];

  policyData1:any  = [  
    {  
      "id": 1,  
      "PolicyType": "Health",
      "SubPolicyType": "Before30",
      "VendorName":"CompanyA",
      "Coverage Discease": "ALL",
      "PreHospitalization": "Covered Upto 60days",
      "PostHospitalization": "Covered Post 90days",
      "MaxClaim":"10L",
      "Other Features": "Yearly Checkup"
    
      
    },  
    {  
      "id": 2,  
      "PolicyType": "Health",
      "SubPolicyType": "After30,",
      "VendorName":"CompanyA",
      "Coverage Discease": "Cancer,Heart Attack, Covid",
      "PreHospitalization": "Covered Upto 30days",
      "PostHospitalization": "Covered Post 60days",
      "MaxClaim":"5L",
      "Other Features": "NA"
      
    }, 
    {  
      "id": 3,  
      "PolicyType": "Health",
      "SubPolicyType": "Before30",
      "VendorName":"CompanyB",
      "Coverage Discease": "ALL",
      "PreHospitalization": "Covered Upto 65days",
      "PostHospitalization": "Covered Post 85days",
      "MaxClaim":"9L",
      "Other Features": "Yearly Chekup"
    
      
    },  
    {  
      "id": 4,  
      "PolicyType": "Health",
      "SubPolicyType": "After30,",
      "VendorName":"CompanyB",
      "Coverage Discease": "Cancer,Heart Attack, Covid",
      "PreHospitalization": "Covered Upto 25days",
      "PostHospitalization": "Covered Post 55days",
      "MaxClaim":"4L",
      "Other Features": "NA"
      
    }, 
    {  
      "id": 5,  
      "PolicyType": "Auto",
      "SubPolicyType": "Bike",
      "VendorName":"CompanyA",
      "Coverage Parts": "ALL",
      "Full Coverage": "Yes",
      "ThirdParty Coverage": "Yes",
      "MaxClaimFC":"50k",
      "MaxClaimTC":"10k",
      "Other Features": "NA"
    
      
    },  
    {  
      "id": 6,  
      "PolicyType": "Auto",
      "SubPolicyType": "Car,",
      "VendorName":"CompanyA",
      "Coverage Parts": "ALL",
      "Full Coverage": "Yes",
      "ThirdParty Coverage": "Yes",
      "MaxClaimFC":"5L",
      "MaxClaimTC":"4L",
      "Other Features": "Yearly Chekup"
      
    }, 
    {  
      "id": 7,  
      "PolicyType": "Auto",
      "SubPolicyType": "Bike",
      "VendorName":"CompanyB",
      "Coverage Parts": "ALL",
      "Full Coverage": "Yes",
      "ThirdParty Coverage": "NA",
      "MaxClaimFC":"50k",
      "MaxClaimTC":"NA",
      "Other Features": "NA"
    
      
    },  
    {  
      "id": 8,  
      "PolicyType": "Auto",
      "SubPolicyType": "Car,",
      "VendorName":"CompanyB",
      "Coverage Parts": "ALL",
      "Full Coverage": "NA",
      "ThirdParty Coverage": "Yes",
      "MaxClaimFC":"NA",
      "MaxClaimTC":"5L",
      "Other Features": "Yearly Chekup"
      
    }, 
    
  ] 



}

export class PolicyTypeModal {


}

