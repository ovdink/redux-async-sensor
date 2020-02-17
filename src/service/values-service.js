export const getValuesIntervalWithDelayService = async (delay) => {
  console.log('SERVICE STARTED...');
  return new Promise((resolve) => {
    setTimeout(async () => {
      resolve(getRandomValue());
    }, delay);
  });
};

const getRandomValue = async () => {
  const res = await Math.floor(Math.random() * 30);
  console.log(res);
  return res;
};

// (async () => {
//   console.log(await getRandomValue());
// })();
