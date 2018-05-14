const common = require('common').init();
const Person = common.models.Person;


async function findRickAndTeam() {
  const rick = await Person.findOne({ primaryEmail: 'rick.knowler@human.x.ai' });
  console.log(rick.name);
}


findRickAndTeam();


