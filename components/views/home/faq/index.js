import { Container } from 'react-bootstrap';
import SectionTitle from '@/components/shared/sectionTitle';
import { useState } from 'react';
import FaqAccordion from './faq-accordion';

function Faq() {
  const [sectionContent] = useState({
    title: '<span>FAQ</span> - Frequently Asked Questions',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typese tting <br> indus orem Ipsum has beenthe standard dummy.',
  });

  return (
    <div className="faq">
      <Container>
        <SectionTitle title={sectionContent.title} desc={sectionContent.desc} />
        <FaqAccordion />
      </Container>
    </div>
  );
}

export default Faq;
