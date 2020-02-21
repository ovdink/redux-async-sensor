export const getValuesIntervalWithDelayService = (delay) => {
  console.log('ЗАПРОС ПОШЕЛ...');
  let delayId = null;
  return {
    promise: new Promise((resolve) => {
      delayId = setTimeout(() => {
        console.log('ЗАПРОС ПРИШЕЛ');
        resolve(getRandomValue());
      }, delay);
    }),
    cancel: delayId
  };
};

const getRandomValue = () => Math.floor(Math.random() * 30);
