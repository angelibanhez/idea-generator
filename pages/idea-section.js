import React, { useState } from 'react';
import IdeaCard from '/components/IdeaCard';
import Header from '/components/Header';
import AddIdea from '/components/AddIdea';
import styled from 'styled-components';

export default function Component() {
  const [isAddIdeaVisible, setAddIdeaVisible] = useState(false);
  const [ideas, setIdeas] = useState([
    { title: "Product launch", description: "Description of the idea", lastModified: "12/24", badge: "Business" }
  ]);

  const handleAddIdeaClick = () => {
    setAddIdeaVisible(true);
  };

  const handleClose = () => {
    setAddIdeaVisible(false);
  };

  const handleSubmit = (newIdea) => {
    setIdeas([...ideas, newIdea]);
    setAddIdeaVisible(false);
  };

  return (
    <>

      <Container isBlurred={isAddIdeaVisible}>
        <Header />
        <Content>
          <Sidebar>
            <StyledInput placeholder="search" />
            <SidebarTitle>Recent ideas</SidebarTitle>
            <StyledButton onClick={handleAddIdeaClick}>+</StyledButton>
            {ideas.map((idea, index) => (
              <IdeaCard
                key={index}
                title={idea.title}
                description={idea.description}
                lastModified={idea.lastModified}
                badge={idea.badge}
              />
            ))}
          </Sidebar>
          <Main>
            <ButtonGroup>
              <SmallButton>v0</SmallButton>
              <SmallButton>v1</SmallButton>
              <SmallButton>v2</SmallButton>
              <SmallButton>+</SmallButton>
            </ButtonGroup>
            <MainContent>
              <MainTitle>Product launch</MainTitle>
            </MainContent>
          </Main>
          <SidebarRight>
            <Section>
              <SidebarTitle>WorkFlows</SidebarTitle>
              <StyledButton>+</StyledButton>
              <IdeaCard
                title="Workflow for"
                description="Description of workflow"
                lastModified="12/24"
                badge="Title"
              />
            </Section>
            <Section>
              <SidebarTitle>Resources</SidebarTitle>
              <StyledButton>+</StyledButton>
              <IdeaCard
                title="Video for"
                description="Description of workflow"
                lastModified="12/24"
                badge="Video"
              />
            </Section>
          </SidebarRight>
        </Content>
      </Container>
      {isAddIdeaVisible && (
        <Overlay>
          <AddIdea onClose={handleClose} onSubmit={handleSubmit} />
        </Overlay>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--background);
  filter: ${(props) => (props.isBlurred ? 'blur(4px)' : 'none')};
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Sidebar = styled.aside`
  width: 20%;
  padding: 16px;
  border-right: 1px solid var(--border);
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background-color: var(--input);
`;

const SidebarTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 600;
  color: var(--foreground);
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background-color: var(--background);
  cursor: pointer;
  &:hover {
    background-color: var(--muted);
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const SmallButton = styled.button`
  padding: 4px 8px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background-color: var(--background);
  cursor: pointer;
  &:hover {
    background-color: var(--muted);
  }
  font-size: 12px;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

const MainTitle = styled.h2`
  padding: 8px 16px;
  font-size: 18px;
  font-weight: 600;
  background-color: var(--card);
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const SidebarRight = styled.aside`
  width: 16%;
  padding: 16px;
  border-left: 1px solid var(--border);
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 600;
  color: var(--foreground);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;