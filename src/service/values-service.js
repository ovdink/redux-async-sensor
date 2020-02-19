export const getValuesIntervalWithDelayService = (delay) => {
  console.log('ЗАПРОС ПОШЕЛ...');
  const delayId = null;
  return new Promise((resolve) => {
    return setTimeout(() => {
      console.log('ЗАПРОС ПРИШЕЛ');
      resolve(getRandomValue());
    }, delay);
  });
};

const getRandomValue = () => Math.floor(Math.random() * 30);
