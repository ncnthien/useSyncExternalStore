import createStore from "./createStore";

const store = createStore({
  value1: 3,
  value2: 4,
});

export type ValueStore = ReturnType<typeof store.getState>;

export default store;
