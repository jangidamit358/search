import { ADD_DATA} from "./actionType";

export const Reducer = (store = [], { type, payload }) => {
  switch (type) {
    case ADD_DATA:
      return {store,payload};

      default:
        return store;
  }
}