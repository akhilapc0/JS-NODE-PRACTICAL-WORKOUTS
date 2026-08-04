
class BankAccount{
    #balance=1000;

    showBalance(){
        console.log(this.#balance)
    }
}

const account=new BankAccount();

account.showBalance();
console.log(account.#balance)

