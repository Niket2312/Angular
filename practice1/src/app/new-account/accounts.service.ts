export class AccountsService{
accounts=[
    {
      name:'MAster account',
      status:'active'
    },
    {
     name:'test account',
     status:'inactive'   
    },
    {
      name:'Hidden account',
      status:'unknown'
    }
  ];
  onAccount({name:string,status:string}){
    this.accounts.push(newAccount);
   
  }
  updateStatus({id:number,status:string}){
    this.accounts[updateInfo.id].status=updateInfo.newStatus;
  }
}