import React from 'react';
import { AcomplishmentsData } from '../../constants/constants';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const Acomplishments = () => (
  <Section>
    <SectionDivider /><br />
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      { AcomplishmentsData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{ card.number }+</BoxNum>
          <BoxText>{ card.text }</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
