import React from 'react'
import styled from 'styled-components'
import Link  from '../styles/Link'
import ContactBar from './ContactBar'
import BackButton from '../styles/BackButton'
const AboutStyles = styled.div`
  display: flex;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`

const courses = {
  reactAdvanced: {
    title: 'Wes Bos: Advanced React & GraphQL - Master Package',
    href: 'https://advancedreact.com/',
    description: [
      'React Best Practices',
      'Server Side Rendering',
      'GraphQL Schema',
      'JSON Web Token (JWT)',
      'Resolvers',
      'Cache Management',
      'Loading and Error States',
      'Logic and Flow with Async + Await',
      'Authentication and Permissions',
      'Charging Credit Cards',
      'Hosting and Transforming Images',
      'Pagination',
      'Unit Testing',
      'Mocking Components',
      'Deployment',
    ],
  },
  reactBeginners: {
    title: 'Wes Bos: React for Beginners - Master Package',
    href: 'https://reactforbeginners.com/',
    description:
      'Built and deployed a Single Page Application using React and Firebase.',
  },
  js30: {
    title: 'Wes Bos: Javascript 30',
    href: 'https://javascript30.com/',
    description:
      'Built 30 different projects using vanilla Javascript. Became familiar with a variety of browser APIs including speech recognition, html5 canvas, html5 video player, geolocation and more.',
  },
  es6: {
    title: 'Wes Bos: ES6 for Everyone - Master Package',
    href: 'https://es6.io/',
    description:
      'Strengthened core Javascript skills, became intimately familiar with modern ES6 syntax. Included an overview of ES7+ES8 features.',
  },
  flexbox: {
    title: 'Wes Bos: What the Flexbox',
    href: 'https://flexbox.io/',
    description:
      'A deep dive into css flexbox fundamentals and tricks. Built a mobile app layout using flexbox.',
  },
  cssGrid: {
    title: 'Wes Bos: CSS Grid',
    href: 'https://cssgrid.io/',
    description: 'Developed proficiency with CSS Grid fundamentals.',
  },
}

// const AboutPageStyles = styled.div`
//   height: 100%;
//   width: 100%;
//   overflow-y: scroll;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   div {
//     width: 100%;
//   }
// `
const AboutPageStyles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  font-weight: 900;
  text-align: center;
  font-size: 48px;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  color: ${props => props.theme.black};
  /* Medium Screen */
  @media only screen and (max-width: ${props=>props.theme.maxWidthMedium}){

    font-size: 32px;
  }
  /* Small Screen */
  @media only screen and (max-width: ${props=>props.theme.maxWidthSmall}){
    font-size: 32px;

  }
  a{
    :focus{
      span{
        color: ${props => props.theme.black};
        -webkit-text-stroke: 0px;
        text-decoration-line: underline;
      }
    }
  }
  span {
    transition:ease 0.3s;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 2px ${props => props.theme.black};
    outline:none;
    :hover {
      color: ${props => props.theme.black};
      -webkit-text-stroke: 0px;
      text-decoration-line: underline;
    }
  }
`
const CopyStyles = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height:90%;
  font-size: 56px;
  text-align:justify;
  width: 100%;
  overflow-y:scroll;
  div.copy{
    margin-bottom:25px;
  }
  ::-webkit-scrollbar {
    width: 0px;
  }
  /* Medium Screen */
  @media only screen and (max-width: ${props=>props.theme.maxWidthMedium}){
    font-size: 48px;
  }
  /* Small Screen */
  @media only screen and (max-width: ${props=>props.theme.maxWidthSmall}){
    text-align:center;
    font-size: 42px;
  }
  /* Very Small Screen */
  @media only screen and (max-width: ${props=>props.theme.maxWidthVerySmall}){
    text-align:center;
    font-size: 38px;
  }
  /* Uber Small Screen */
  @media only screen and (max-width: 280px){
    text-align:center;
    font-size: 32px;
  }
`;

const About = () => {
  return (
    <AboutPageStyles filled={false}>
      {/* <BackButton/> */}
      <CopyStyles className='copy-container'>
        <div className='copy'>
          My name is Eric Auväärt. I develop{' '}
      <Link tabIndex={0} to="/web">
        <span>web experiences</span>
      </Link>{' '}and love to create{' '}
      <Link tabIndex={0} to="/video"><span>engaging visuals</span></Link>.</div>
      </CopyStyles>
    </AboutPageStyles>
  )

  // return (
  //   <AboutPageStyles className="about-page">
  //     <BackButton style={{ marginTop: '20px', alignSelf: 'flex-start' }}>
  //       {'<- Back'}
  //     </BackButton>
  //     <div className="contact">
  //       <ContactBar></ContactBar>
  //     </div>
  //     <div className="bio">
  //       <h2>Bio</h2>Hey! I'm a web developer specializing in React, Node, and
  //       GraphQL.
  //     </div>
  //     <div className="education">
  //       <h2>Education</h2>
  //       <h3>Degree</h3>
  //       <CardStyles className="education-school">
  //         <h4>
  //           <a href="https://engineering.uottawa.ca/about/programs/undergraduate/civil-2017">
  //             Bachelor of Applied Sciences in Structural and Geotechnical
  //             Engineering
  //           </a>
  //           {' @ '}
  //           <a href="https://www.uottawa.ca">University of Ottawa</a>
  //         </h4>
  //         <p>
  //           Demonstrated exceptional academic performance, graduating with a
  //           Magna Cum Laude distinction. Below are a list of transferrable skill
  //           achievements:
  //         </p>
  //         <ul>
  //           <li>
  //             Focused heavily on cross-disciplinary teamwork in order to meet
  //             many competing, demanding deadlines
  //           </li>
  //           <li>
  //             Honed ability to break down large, complex projects into
  //             manageable, actionable steps
  //           </li>
  //           <li>
  //             Demonstrated proficient ability to explain highly technical topics
  //             in ways that could be understood by a variety of audiences
  //           </li>
  //           <li>
  //             Established solid public speaking competence by giving technical
  //             presentations to large classes
  //           </li>
  //           <li>
  //             Developed strong research skills through intensive laboratory work
  //           </li>
  //         </ul>
  //       </CardStyles>
  //       <h3>Courses</h3>
  //       <CardStyles className="education-courses">
  //         {courses &&
  //           Object.values(courses).map((course, index) => (
  //             <Course key={`course-${index}`} course={course}></Course>
  //           ))}
  //       </CardStyles>
  //     </div>
  //     <div className="projects"></div>
  //     <div className="work"></div>
  //   </AboutPageStyles>
  // )
}

export default About
