
  
export class Login {
    loggedIn=false;
    uNameis='';
    login() {
        this.loggedIn=true;
    }

    logout() {
        this.loggedIn=false ;
    }
    get uName(): string {
        return this.uNameis;
      }
}