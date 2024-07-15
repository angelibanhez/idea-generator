import React, { useState } from 'react';
import styled from 'styled-components';

const AddIdea = ({ onClose, onSubmit }) => {
  const [ideaName, setIdeaName] = useState('');
  const [ideaDescription, setIdeaDescription] = useState('');
  const [ideaTags, setIdeaTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title: ideaName,
      description: ideaDescription,
      lastModified: new Date().toLocaleDateString(),
      badge: ideaTags
    });
  };

  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledCardTitle>Submit an Idea</StyledCardTitle>
        <CloseButton onClick={onClose}>
          <CloseIcon width="20" height="20" />
        </CloseButton>
      </StyledCardHeader>
      <StyledCardContent>
        <Field>
          <StyledLabel htmlFor="idea-name">Idea Name</StyledLabel>
          <StyledInput
            id="idea-name"
            type="text"
            placeholder="Enter your idea name"
            value={ideaName}
            onChange={(e) => setIdeaName(e.target.value)}
          />
        </Field>
        <Field>
          <StyledLabel htmlFor="idea-description">Description</StyledLabel>
          <StyledTextarea
            id="idea-description"
            placeholder="Describe your idea"
            rows={4}
            value={ideaDescription}
            onChange={(e) => setIdeaDescription(e.target.value)}
          />
        </Field>
        <Field>
          <StyledLabel htmlFor="idea-tags">Tags</StyledLabel>
          <StyledInput
            id="idea-tags"
            type="text"
            placeholder="Enter tags separated by commas"
            value={ideaTags}
            onChange={(e) => setIdeaTags(e.target.value)}
          />
        </Field>
      </StyledCardContent>
      <StyledCardFooter>
        <StyledButton type="submit" onClick={handleSubmit}>Submit Idea</StyledButton>
      </StyledCardFooter>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 100%;
  max-width: 640px;
  padding: 24px;
  background-color: white;
  border: 1px solid var(--border-muted);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const StyledCardTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--foreground);
`;

const StyledCardContent = styled.div`
  margin-bottom: 16px;
  & > div {
    margin-bottom: 16px;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin-bottom: 4px;
  font-size: 14px;
  color: var(--foreground);
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid var(--accent);
  border-radius: 8px;
  &:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 2px var(--primary);
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid var(--accent);
  border-radius: 8px;
  &:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 2px var(--primary);
  }
`;

const StyledCardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: var(--accent);
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  &:hover {
    background-color: var(--muted);
  }
`;

const CloseIcon = (props) => (
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

export default AddIdea;
