'use script'

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
    
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions:[
        {id: 1, amount: 200, type: 'deposit'},
        {id: 2, amount: 100, type: 'withdraw'}
    ],
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        // let summTotalBalance;
        // summTotalBalance = 
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {},
    

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        console.log(this.balance);
        
        return this.balance;

    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        let copyAmount;
        for (let a of this.transactions){
            copyAmount = a.amount;
            // console.log(a.amount);
        }
        return copyAmount;
        
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {},
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {},
  };

console.log(account.deposit(100));
// account.deposit(200);
// account.withdrow(200);
// account.getTransactionDetails(1);// deposite 100
// account.getTransactionTotal(Transaction.DEPOSIT);//300
   console.log(account.getBalance());//100