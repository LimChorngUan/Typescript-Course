// let bankAccount = {
//   money: 2000,
//   deposit(value) {
//     this.money += value;
//   }
// };

// let myself = {
//   name: "Max",
//   bankAccount: bankAccount,
//   hobbies: ["Sports", "Cooking"]
// };

type BankAccount = {
  money: number;
  deposit: (value: number) => void;
};

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let mySelf: {
  name: string;
  bankAccount: BankAccount;
  hobbies: string[];
} = {
  name: 'Max',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking']
};

mySelf.bankAccount.deposit(3000);

console.log(mySelf);
