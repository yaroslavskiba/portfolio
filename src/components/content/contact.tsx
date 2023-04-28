import React from 'react';
import { SiInstagram, SiFuturelearn } from 'react-icons/si';
import { TbBrandTelegram } from 'react-icons/tb';
import { RxTwitterLogo } from 'react-icons/rx';
import { GoMail } from 'react-icons/go';
import { VscGithub } from 'react-icons/vsc';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { BsTelephoneForward } from 'react-icons/bs';

interface ContactItem {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const contactItems: ContactItem[] = [
  {
    name: 'Instagram',
    icon: <SiInstagram />,
    link: 'https://www.instagram.com/yaroslavskiba/',
  },
  {
    name: 'Telegram',
    icon: <TbBrandTelegram />,
    link: 'https://t.me/yaroslavskiba',
  },
  {
    name: 'Twitter',
    icon: <RxTwitterLogo />,
    link: 'https://twitter.com/yaroslavskiba',
  },
  {
    name: 'Gmail',
    icon: <GoMail />,
    link: 'mailto:yaroslavskiba322@gmail.com',
  },
  {
    name: 'GitHub',
    icon: <VscGithub />,
    link: 'https://github.com/yaroslavskiba',
  },
  {
    name: 'Hexlet',
    icon: <SiFuturelearn />,
    link: 'https://ru.hexlet.io/u/yaroslavskiba',
  },
  {
    name: 'FreeCodeCamp',
    icon: <FaFreeCodeCamp />,
    link: 'https://www.freecodecamp.org/Yaroslavskiba',
  },
];

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1 className="title">
        Contact <span className="color-main">Me</span>
      </h1>
      <div className="contact-info">
        <p className="contact-text">
          <span className="color-main">I</span> use <span className="color-main">social media</span> to keep up with the{' '}
          <span className="color-main">latest news and trends</span> in my areas of interest, but I&apos;m not a big
          poster. I check in <span className="color-main">regularly</span> but don&apos;t spend a lot of time scrolling
          through my feeds. However, I&apos;m always available and responsive to{' '}
          <span className="color-main">messages and calls</span>, so don&apos;t hesitate to contact me if you want to
          get in touch!
        </p>
        <p>
          <span className="color-main">My</span>links:
        </p>
        <ul className="contact-list">
          {contactItems.map((item) => (
            <li key={item.name}>
              <a href={item.link} target="blank" className="sch">
                {item.name}
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
        <p className="contact-text">
          <span className="color-main">Hey</span>, feel free to give me a call using the{' '}
          <span className="color-main">link below</span>! Wishing you an awesome day and a fantastic mood!{' '}
          <span className="color-main">Thanks for taking the time to check out my portfolio</span>.
        </p>
        <a href="tel:+375295464591" className="tel-link">
          <span className="pulsed-link">
            <BsTelephoneForward />
          </span>
          Call <span className="color-main">Me</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
