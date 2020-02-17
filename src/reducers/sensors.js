const values = (state = [0], { type, payload }) => {
  switch (type) {
    case 'FETCH_DATA_SUCCES':
      return [payload];
    default:
      return state;
  }
};

const loading = (state = false, { type, payload }) => {
  switch (type) {
    case 'FETCH_DATA_REQUEST':
      return payload;
    default:
      return state;
  }
};

const error = (state = false, { type, payload }) => {
  switch (type) {
    case 'FETCH_DATA_ERROR':
      return payload;
    default:
      return state;
  }
};

const timerId = (state = null, { type, payload }) => {
  switch (type) {
    case 'INTERVAL_TIME_STARTED':
      return payload;
    case 'INTERVAL_TIME_STOPPED':
      clearInterval(payload);
      return null;
    default:
      return state;
  }
};

export { values, loading, error, timerId };
