import React from 'react';
import { DiDatabase, DiFirebase, DiReact, DiUikit, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Hr } from '../Projects/ProjectsStyles';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider /><br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText techs>
      JavaScript | TypeScript
    </SectionText>
    <Hr techs/>
    <SectionText techs>
      React.js | React Native | Next.js
    </SectionText>
    <Hr techs/>
    <SectionText techs>
      Node.js | Express.js | API
    </SectionText>
    <Hr techs/>
    <SectionText techs>
      Python | Django | Robotic Process Automation (RPA) | Selenium
    </SectionText>
    <Hr techs/>
    <SectionText techs>
      HTML5 | CSS3 | Tailwind CSS | Styled Components | Sass | Bootstrap
    </SectionText>
    <Hr techs/>
    <SectionText techs>
      SQL | NoSQL | MongoDB | MySQL | PostgreSQL | Oracle | SQL Server
    </SectionText>
    <Hr techs/>
    <SectionText techs>
      Java | VBA
    </SectionText>
    <Hr techs/>
    <SectionText techs>
      Git | GitHub | Agile Methodologies | Clean Code
    </SectionText>
    <Hr techs/>

    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiUikit size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
