export const initialData = (state = [], { type, payload }) => {
  switch (type) {
    case 'SET_INITIAL_DATA':
      return payload;
    default:
      return state;
  }
};
