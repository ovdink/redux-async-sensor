export const initialData = (state = [], { type, payload }) => {
  switch (type) {
    case 'SET_INITIAL_DATA':
      console.log('PAYLOAD:', payload);
      return payload;
    case 'FETCH_DATA_SUCCESS': {
      return state.map(({ id, value, limit, dangerous, ...rest }) => {
        if (id === payload.id) {
          value = payload.data;
          payload.data > limit ? (dangerous = true) : (dangerous = false);
        }
        return { id, value, limit, dangerous, ...rest };
      });
    }
    default:
      return state;
  }
};
