const values = (state = [], { type, payload }) => {
  switch (type) {
    case 'FETCH_DATA_SUCCES':
      return [...state, ...payload];
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

export { values, loading, error };
