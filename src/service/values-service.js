export const getValuesIntervalWithDelayService = (
  delay = 2000,
  interval = 1000
) => {
  console.log('SERVICE STARTED...');
  return new Promise((resolve) => {
    const alwaysDelay = () => {
      return setTimeout(() => {
        console.log('RESPONSE RECEIVED!');
        resolve(getRandomValue());
        return alwaysDelay();
        //   setInterval(() => {
        // return resolve(getValuesInterval());
        //   }, interval);
      }, delay);
    };
    alwaysDelay();
  });
};

const getRandomValue = async () => {
  const res = await Math.floor(Math.random() * 30);
  console.log(res);
  return res;
};

console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
