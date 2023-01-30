const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const allTogether = {...user, ...jobInfos};
const {
    name,
    age,
    nationality,
    profession,
    squad,
    squadInitials
} = allTogether;
const textApresentation = `Hi my name is ${name}, I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}!`;
console.log(textApresentation);