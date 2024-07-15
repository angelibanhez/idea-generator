import React from 'react';
import styled from 'styled-components';

const IdeaCard = ({ title, description, lastModified, badge, isSelected, onClick }) => {
  return (
    <StyledCard isSelected={isSelected} onClick={onClick}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <CardFooterText>Last modified {lastModified}</CardFooterText>
        <StyledBadge>{badge}</StyledBadge>
      </CardFooter>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  margin-bottom: 16px;
  padding: 16px;
  border: 1px solid ${(props) => (props.isSelected ? 'var(--primary)' : 'var(--border)')};
  border-radius: 4px;
  background-color: var(--card);
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: var(--primary);
  }
`;

const CardHeader = styled.div`
  margin-bottom: 8px;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: var(--foreground);
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: var(--muted-foreground);
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardFooterText = styled.span`
  font-size: 12px;
  color: var(--muted-foreground);
`;

const StyledBadge = styled.span`
  padding: 4px 8px;
  font-size: 12px;
  color: var(--accent-foreground);
  background-color: var(--accent);
  border-radius: 4px;
`;

export default IdeaCard;
