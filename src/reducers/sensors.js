export const randomValue = (state = [], { type, payload }) => {
  switch (type) {
    case 'FETCH_DATA_SUCCESS':
      return [payload];
    default:
      return state;
  }
};

export const loading = (state = false, { type, payload }) => {
  switch (type) {
    case 'FETCH_DATA_REQUEST':
      return payload;
    default:
      return state;
  }
};

export const error = (state = false, { type, payload }) => {
  switch (type) {
    case 'FETCH_DATA_ERROR':
      return payload;
    default:
      return state;
  }
};

export const timerId = (state = null, { type, payload }) => {
  switch (type) {
    case 'INTERVAL_TIME_STARTED':
      console.log('interval started id: ', payload);
      return payload;
    case 'INTERVAL_TIME_STOPPED':
      clearInterval(payload);
      return null;
    default:
      return state;
  }
};
