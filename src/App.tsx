import React from "react";
import store, { ValueStore } from "./store";

function DisplayValue({ item }: { item: keyof ValueStore }) {
  const value = store.useStore<number>((state) => state[item]);

  return (
    <div>
      {item}: {value}
    </div>
  );
}

function IncrementValue({ item }: { item: keyof ValueStore }) {
  const handleClick = () => {
    const state = store.getState();
    store.setState({
      ...state,
      [item]: state[item] + 1,
    });
  };

  return <button onClick={handleClick}>Increment {item}</button>;
}

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
        }}
      >
        <IncrementValue item="value1" />
        <DisplayValue item="value1" />
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <IncrementValue item="value2" />
        <DisplayValue item="value2" />
      </div>
    </div>
  );
}

export default App;
