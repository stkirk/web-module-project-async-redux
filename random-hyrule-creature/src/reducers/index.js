const initialState = {
  creature: {
    name: "",
    image: "",
    id: 0,
    description: "",
    common_locations: [],
  },
  loading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
