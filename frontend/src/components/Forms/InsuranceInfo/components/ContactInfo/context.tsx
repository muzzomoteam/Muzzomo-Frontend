import React, { useState } from 'react';

type ThemeContext = { open: boolean; toggleOpen: () => void };

export const AddCompetitorDialogContext = React.createContext<ThemeContext>({
  open: false
} as ThemeContext);

export const AddCompetitorDialogProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <AddCompetitorDialogContext.Provider value={{ open, toggleOpen }}>
      {children}
    </AddCompetitorDialogContext.Provider>
  );
};
