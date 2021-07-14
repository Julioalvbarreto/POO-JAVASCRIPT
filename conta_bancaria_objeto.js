class BankAccount{

            constructor(){
                this.agency = Number
                this.accountnumber = Number
                this.balance = Number
            }

            deposit(cash){
                this.balance += cash
            }

            withdraw(cash){
                this.balance -= cash
            }

            consultBalance(){
                return console.log(this.balance)
            }

            registerAccount(newAgency = Number, newAccountNumber = Number, newDeposit = Number){
            
            this.agency = newAgency
            this.accountnumber = newAccountNumber
            this.balance = newDeposit
            }
        }


        var joao = new BankAccount()
        joao.registerAccount(454545, 5252, 500)
        console.log(joao)

        joao.deposit(200)

        joao.consultBalance()


        var maria = new BankAccount()
        maria.registerAccount(454545, 5253, 800) 

        maria.withdraw(220)

        maria.consultBalance()
        
