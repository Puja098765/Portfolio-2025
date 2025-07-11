import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import {Animate } from "react-simple-animate";
import './styles.scss';
import {DiApple ,DiAndroid}  from 'react-icons/di';
import {FaDev, FaDatabase} from 'react-icons/fa';

const personalDetails =[
  {
    label: "Name",
    value: "Puja Keshri",

  },
  {
 label:"Age",
 value: "21",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label:"Email",
    value: "pujakeshri098765@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 9304586130",
  },
];

const jobSummary = 'seasoned and independent Full Stack Developer in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development,proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design. it is imperative that you provide a thorough and professional approach to your resume. As a Full Stack Developer you will be judged by your ability to use UX and UI concepts and follow design guidlines. its about expressing your attention to detail and how you can help implement design ideas for your future employer.';

const About = () => {
  return (
    <section  id="about" className=" about ">
      <PageHeaderContent
      headerText ="About Me" 
      icon={<BsInfoCircleFill size={40}/>}
      />
      <div className="about__content">
        < div className="about__content__personalWrapper">
       <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform:'translateX(-900px)'
              }}
        
              end={{
                transform : 'translateX(0px)'
              }}
              >
       <h3>Full Stack Developer</h3>
       <p>{jobSummary}</p>

       </Animate>
       
              <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform:'translateX(500px)'
              }}
        
              end={{
                transform : 'translateX(0px)'
              }}
              >

       <h3 className="personalInformationHeaderText">personal Information</h3>
       <ul>
        {
          personalDetails.map((item, i)=>(
            <li key={i}>
              <span className="title">{item.label}</span>
              <span className="value">{item.value}</span>
            </li>
          ))
        }
       </ul>
       </Animate>
       </div>
       <div className="about__content__servicesWrapper">
        <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform:'translateX(600px)'
              }}
        
              end={{
                transform : 'translateX(0px)'
              }}
              >
        <div className="about__content__servicesWrapper__innerContent">
        <div><FaDev size={60} color="var(--yellow-theme-main-color)"/></div>
        <div><DiAndroid size={60} color="var(--yellow-theme-main-color)"/></div>
        <div><FaDatabase size={60} color="var(--yellow-theme-main-color)"/></div>
        <div><DiApple size={60} color="var(--yellow-theme-main-color)"/></div>
        </div>
        </Animate>
       </div>
      
      </div>
    
    </section>
  );
};

export default About;
