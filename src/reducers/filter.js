const defaultState = {
  category: 'All',
};

const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER': return {
      category: action.category,
    };
    default: return state;
  }
};

export default filterReducer;
