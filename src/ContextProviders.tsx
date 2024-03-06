import React from 'react';
import AuthContextProvider from './contexts/AuthContext';
import CustomContextProvider from './contexts/CustomContext';

export function ContextProviders({ children }: { children: React.ReactNode }) {
  return (
    <CustomContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </CustomContextProvider>
  );
}
