import React from 'react';
import styled from 'styled-components';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <StyledInput 
      type="text"
      placeholder="Search ideas"
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background-color: var(--input);
`;

export default SearchBar;
