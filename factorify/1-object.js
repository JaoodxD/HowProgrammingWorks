function userFactory1(name, surname, email) {
    return { name, surname, email };
}
const userFactory2 = (name, surname, email) => ({ name, surname, email });

const userFactory3 = (name, surname, email) => { name, surname, email };

const userFactory4 = (name, surname, email) => (name, surname, email);

const user1 = userFactory1('maksym', 'shenderuk', 'jaoodxd@su.it');
console.log(user1);

const user2 = userFactory2('maksym', 'shenderuk', 'jaoodxd@su.it')
console.log(user2);

const user3 = userFactory3('maksym', 'shenderuk', 'jaoodxd@su.it')
console.log(user3);

const user4 = userFactory4('maksym', 'shenderuk', 'jaoodxd@su.it')
console.log(user4);

