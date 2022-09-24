import React, { FC, ReactNode } from 'react';

const StoreContext = React.createContext(undefined)

export function useStore<T = any>(): T {
  return React.useContext(StoreContext) as any
}

export const StoreProvider: FC<{ children: ReactNode; value: any }> = ({ children, value }) => {
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
