import Profile from "./Profile";
import { faker }  from '@faker-js/faker/locale/es_MX';
// import { faker }  from '@faker-js/faker';
const helloWorld = () => console.log('Hello World!');

helloWorld();
const p = new Profile();




export const USERS = [];

export function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    age: faker.datatype.number({
      min: 18,
      max: 45
    }),
    registeredAt: faker.date.past(),
    account: faker.finance.account(),
    accountName: faker.finance.accountName(),
    transactions: transGenerate(),
  };
}
function transGenerate() {
    const transactions = []
  for(var i = 0; i<= 12; i++){
    transactions.push({
      amount: faker.finance.amount(),
      transctionType: faker.finance.transactionType()
    })
  }
  return transactions
  }


Array.from({ length: 1000 }).forEach(() => {
  USERS.push(createRandomUser());
});

const json = JSON.stringify(USERS);
// console.log(json)

