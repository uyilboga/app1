import { Accordion } from 'react-bootstrap';
import { useState } from 'react';

function FaqAccordion() {
  const [faq] = useState([
    {
      title: 'How can i pay?',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    {
      title: 'How to setup account ?',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    {
      title: 'What is process to get refund ?',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    {
      title: 'What is process to get refund ?',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
  ]);

  return (
    <div className="faq-accordion">
      <Accordion defaultActiveKey="0" className="accordion">
        {faq.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index} className="accordion-item">
            <Accordion.Header className="accordion-header">{item.title}</Accordion.Header>
            <Accordion.Body className="accordion-body">
              <p>{item.desc}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default FaqAccordion;
