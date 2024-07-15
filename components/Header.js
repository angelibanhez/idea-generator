import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--border);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: var(--foreground);
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  &:hover {
    background-color: var(--muted);
  }
`;

const XIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const Header = () => (
  <HeaderContainer>
    <Title>Angel Ideas</Title>
    <HeaderActions>
      <Avatar>
        <AvatarImage src="/Myself.jpeg" />
      </Avatar>
      <IconButton>
        <XIcon width="20" height="20" />
        <span className="sr-only">Close</span>
      </IconButton>
    </HeaderActions>
  </HeaderContainer>
);

export default Header;
