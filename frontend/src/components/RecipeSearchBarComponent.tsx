import React from 'react';
import { TextField } from '@mui/material';

const RecipeSearchBar: React.FC<{
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}> = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
      label="Search for recipes..."
      variant="outlined"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{ marginBottom: '1rem', width: '40%' }}
    />
  );
};


export default RecipeSearchBar;
