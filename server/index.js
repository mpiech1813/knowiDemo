const db = require('./db/db');
const app = require('./server');
const faker = require('faker');
const User = require('./db/model/users');

const PORT = process.env.PORT || 1813;

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    const randomNumber = (num) => Math.floor(Math.random() * num) + 1;

    const users = Array(183)
      .fill(1)
      .map((name) => faker.name.firstName());

    const usersArray = [];

    users.forEach((firstName) => {
      usersArray.push(
        User.create({
          firstName,
          lastName: faker.name.lastName(),
          grade: randomNumber(6),
          daysAttended: randomNumber(183),
        })
      );
    });

    await Promise.all(usersArray);
  } catch (error) {
    console.log('error occurred in sync and seed');
  }
};

const init = async () => {
  await syncAndSeed();
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
};

init();
