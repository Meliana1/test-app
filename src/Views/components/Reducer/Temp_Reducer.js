const temp_Reducer = (state = "", action) => {
    switch (action.type) {
        case "QUOTE_RECEIVED":
          state = JSON.stringify(action.payload)
          break;
        case "QUOTE_FAILED":
          state = action.payload;
        break;
      }
      
      return state;
}

export default temp_Reducer;