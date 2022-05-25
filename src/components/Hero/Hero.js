import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        My purpose is to be a aspiring and established developer to take my development skills to the next level and build awesome apps.
        </SectionText>
        <Button href="https://twitter.com/sk2740">Let's have a talk</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;