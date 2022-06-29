const accessReducer = (state, action) => {
    switch (action.type) {
        case "Auth/AccessLogin":
        return {
          accessLogin: action.payload
        };
      default:
        return state;
    }
  };

  export {accessReducer}