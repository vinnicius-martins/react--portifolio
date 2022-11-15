import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> My personal portfolio.
      </SectionTitle>
      <SectionText>
        My name is Vinnicius Martins.<br />
        It's a pleasure to have you here.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;