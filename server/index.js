const app = require('./server');

const PORT = process.env.PORT || 1813;

const syncAndSeed = () => {
  try {
  } catch (error) {
    console.log('error occurred in sync and seed');
  }
};

const init = () => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
};

init();
