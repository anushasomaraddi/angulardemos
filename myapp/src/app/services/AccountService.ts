export class AccountService{
    accounts=[];

    addAccount(name:string,status:string){
        this.accounts.push({
            name:name,
            status:status,
        });
    }
    updateStatus(id:number,newStatus:string){
        this.accounts[id].status=newStatus; 
    }
    deleteAccount(id:number){
        this.accounts.splice(id,1);
    }
}