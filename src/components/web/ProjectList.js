import React from 'react';
import ericauvImage from '../../images/ericauv.png';
const ProjectsList = {
  'ericauv-store': {
    tags: ['node.js', 'react.js', 'graphql', 'apollo', 'next.js', 'deployment'],
    title: 'ericauv-store',
    sections: [
      {
        title: 'summary',
        content: (
          <>
            <p>
              A web store that allows users to purchase prints of photos I've
              taken. The site processes payments via integration with the Stripe
              API, and sends order confirmation emails via integration with
              Mailgun.
            </p>
          </>
        )
      },
      {
        title: 'next steps',
        content: (
          <>
            <p>
              Of course, no project is ever truly finised and many things still
              need to be done to improve the store. Below are some of the most
              notable next steps for this project.
            </p>
            <ul>
              <li>
                <strong>Fix sign in on mobile.</strong> Currently, mobile users
                are unable to sign in because the cookie containing the JWT
                token returned from the backend server is blocked by their
                browsers by default. This is due to the fact that the backend is
                deployed to a different domain than the frontend so the browser
                is treating the cookie as a 'third-party' cookie. Therefore, I
                must determine how to implement local storage to store JWT
                token. An additional challenge to this is that the app is Server
                Side Rendered (SSR) using Next.js so I am unable to access the
                local storage since that exists on the client and not the
                server. I am looking into storing the token in the Apollo Client
                store.
              </li>
              <li>
                <strong>Allow "Guest" Checkout.</strong> Allow cart access
                without requiring sign up. This will likely be done by storing
                the cart in local storage. In order to checkout, the cart will
                be sent to the backend to validate the prices and return a
                stripe checkout component with the final price calculated.
              </li>
              <li>
                <strong>Improve accessibility.</strong> I want to implement Dark
                Mode, and a <em>'fidelity slider.'</em> I was introduced to the
                concept of a fidelity slider from Kyle Simpson's (
                <a href="https://twitter.com/getify">@getify</a>) talk at Web
                Unleashed 2019 in Toronto. The idea behind this slider is that
                users should be able to adjust the data + battery usage of your
                site. A use case for this would be if a user is low on battery
                or their data connection is very weak -- they still want to use
                your app so you should give them the power to access a lower
                fidelity version of your site. Gmail already does something
                similar to this with their{' '}
                <a href="https://support.google.com/mail/answer/15049?hl=en">
                  html only mode
                </a>
                .
              </li>
              <li>
                <strong>Implement Password Reset Flow.</strong> User requests
                password reset > User enters email > Backend generates a
                password reset token > User recieves email with password reset
                link (includes token) > User attempts to reset password >
                Backend checks that token is valid > Password is reset > User is
                logged in
              </li>
              <li>
                <strong>Improve Cart UX.</strong> Implement updating of the
                quantity of an item in a cart. Allow closing the cart via the
                ESC key. Allow closing of the cart by clicking outside the cart
                div.
              </li>
              <li>
                <strong>Improve Loading Experience. </strong>Implement lazy
                loading of images / skeletons of images while they load on the
                items page.
              </li>
              <li>
                <strong>Improve Footer.</strong> Add a site map to the footer,
                and style the footer, at the moment it looks a footer from 1999.
              </li>
            </ul>
          </>
        )
      }
    ],
    githubLink: 'https://github.com/ericauv/ericauv-new',
    projectLink: 'https://store.ericauv.com',
    challenges: ['deployment', 'cookies'],
    lessons: [
      'Learnt how to make Queries + Mutations using graphql',
      'Learnt how to set up a graphql datamodel',
      'Saw the beauty of how graphQL is self-documenting through its datamodel and schema'
    ],
    images: {
      title: ericauvImage
    }
  },
  'yt-to-spotify': {
    title: 'yt-to-spotify',
    tags: ['node.js', 'graphql', 'RESTful', 'apollo'],
    images: {
      title: ericauvImage
    },
    sections: [
      {
      title:'summary',
        content: (
          <>
            <p>
              The goal of this project was to successfully implement a design
              handed off to me by another designer. The aim was to reproduce the
              visual and functional features of the mockup as accurately as
              possible.
            </p>
          </>
        )
      },
    {
      title:'challenges',
      content: (
        <>
        <p>
          A weekend hackathon at home performed in collaboration with a friend. The main goal of this projcct was to strengthen our graphQL/Apollo Server skills. The project converts a youtube playlist to a spotify playlist. The user enters the url of a youtube playlist, and a spotify playlist containing the same songs is created.
          </p>
          </>
          )
    },

    // content:(
    // <>
    // <p>A lot of cleanup was required on the youtube titles. I used Regex to remove a lot of noise from youtube video titles so that the title could be used in spotify as a search term
    //   </p>
    //   </>
    // )
    // }
  ],
    constraints: ['Brainstorm project ideas, design and build in one weekend.'],
    challenges: [],
    lessons: [
      'Became familiar with React Hooks (useState, useRef, useEffect).',
      'Used Apollo DataSource to organize spotify and youtube API calls + data cleanup/reduction. This resulted in much cleaner Query resolvers.',
      'Drew a swimlane analysis diagram to visualize dataflow between the frontend, the graphQL server, and the external APIs. This allowed our team to visualize the entire project and organize our collaborative efforts.'
    ]
  },
  'rest-api': {
    title: 'rest-api',
    tags: ['node.js', 'RESTful'],
    summary: 'to fill',
    constraints: ['to fill'],
    challenges: ['to fill'],
    lessons: ['to fill']
  },
    // 'student-profiles': {
  //   tags: ['react.js'],
  //   title: 'student-profiles',
  //   sections: [
  //     {
  //       title: 'summary',
  //       content: (
  //         <>
  //           <p>
  //             The goal of this project was to successfully implement a design
  //             handed off to me by another designer. The aim was to reproduce the
  //             visual and functional features of the mockup as accurately as
  //             possible.
  //           </p>
  //         </>
  //       )
  //     }
  //   ],
  //   constraints: ['complete task within 24 hours of mockup receipt'],
  //   lessons: ['Learnt to use React.Context']
  // },
  // 'dimension-image': {
  //   tags: ['react.js'],
  //   title: 'dimension-image',
  //   summary:
  //     'Allow user to add and position dimension annotations on an image.',
  //   background:
  //     'saw an image with a dimension div that appeared on hover on Pinterest. I wanted to implement more in depth functionality and allow anyone to add dimensions to their images easily.',
  //   lessons: [
  //     'normalization of dimension line properties',
  //     'saving image with dimension info'
  //   ]
  // },
  // 'ericauv': {
  //   title: 'ericauv',
  //   tags: ['react.js', 'gatsby.js', 'deployment']
  // },
  // 'bullet-app': {
  //   title: 'bullet-app',
  //   tags: ['react.js', 'firebase']
  // },
};

export default ProjectsList;
