import { useSyncExternalStore } from "react";

type Listener<K> = (state: K) => void;

export default function createStore<T>(initialValue: T) {
  let currentValue = initialValue;
  const listeners = new Set<Listener<T>>();

  const subscribe = (listener: Listener<T>) => {
    listeners.add(listener);

    return () => listeners.delete(listener);
  };

  return {
    getState: () => currentValue,
    setState: (newValue: T) => {
      currentValue = newValue;
      listeners.forEach((listener) => listener(currentValue));
    },
    subscribe,
    useStore: <R>(selector: (state: T) => R) =>
      useSyncExternalStore(subscribe, () => selector(currentValue)),
  };
}
