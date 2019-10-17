import React from 'react';
import ericauvImage from '../../images/ericauv.png';
import ericauvStoreVideo from '../../images/ericauv-store.mp4';
import ytSwimlane from '../../images/yt-2-spotify-swimlane.jpg';
const ProjectList = {
  'ericauv-store': {
    tags: ['node.js', 'react.js', 'graphql', 'apollo', 'next.js', 'deployment'],
    title: 'ericauv-store',
    titleMedia:{type:'video',src:ericauvStoreVideo},
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
                <a href="https://twitter.com/getify" rel="noopener noreferrer"
        target="_blank">@getify</a>) talk at Web
                Unleashed 2019 in Toronto. The idea behind this slider is that
                users should be able to adjust the data + battery usage of your
                site. A use case for this would be if a user is low on battery
                or their data connection is very weak -- they still want to use
                your app so you should give them the power to access a lower
                fidelity version of your site. Gmail already does something
                similar to this with their{' '}
                <a href="https://support.google.com/mail/answer/15049?hl=en" rel="noopener noreferrer"
        target="_blank">
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

  },
  'yt-to-spotify': {
    title: 'yt-to-spotify',
    tags: ['node.js', 'graphql', 'RESTful', 'apollo'],
    githubLink:'https://github.com/ericauv/yt2Spotify',
    titleMedia:{type:'video', src: ericauvStoreVideo},
    images: {
      title: ericauvImage
    },
    sections: [
    {
      title:'summary', content:(
      <>
        <p>
          The project converts a youtube playlist to a spotify playlist. The user enters the url of a youtube playlist, and a spotify playlist containing the same songs is created.
        </p>
      </>
      )
    },
    {title:'objectives', content: (
      <>
        <p>
          This project was executed with a few key objectives in mind:
        </p>
          <ul>
            <li> Strengthen my graphQL/Apollo Server proficiency </li>
            <li> Gain more experience working with RESTful APIs</li>
            <li> Gain experience developing in a team environment</li>
          </ul>
      </>
      )
    },
    {title:'achievements/lessons', content: (
      <>
        <p>
          I'm super happy with how the project turned out (even though we didn't really build a proper frontend) given the fact that we did it all in one weekend. Here are some things I'm proud of with respect to this project:
        </p>
          <ul>
            <li><strong>Seriously leveled up my Apollo Server/GraphQL skills.</strong> My friend had never touched GraphQL before so there were a lot of times that I acted as a mentor for her. By teaching her GraphQL I was able to deepen my own understanding of it. Through this project I also learnt to use the Apollo {' '}
            <a href='https://www.apollographql.com/docs/apollo-server/data/data-sources/' title='Apollo RESTDataSource Documentation'
        rel="noopener noreferrer"
        target="_blank">RESTDataSource</a> package. RESTDataSource helped us organize our spotify and youtube API calls + data cleanup/reduction, resulting in much cleaner Query resolvers.</li>
            <li><strong>Got better at using git.</strong> When working on a new feature, I learnt to create a branch for that feature to be merged with the master branch later.</li>
            <li><strong>Got cozy with peer programming.</strong> When one person gets stuck it really helps to get a fresh pair of eyes on the issue.</li>
            <li><strong>Improved my Regex skills.</strong> One of the challenges with this project was that the titles of youtube videos often include things like [OFFICIAL VIDEO], or (audio), <a href='http://tinyurl.com/yxgocub8' title='Regex visualization' target='_blank' rel='noopener noreferrer'>or any number of other things 🤯</a>. I used regex to find noise in the titles and removed it so that they could effectively be used to hit the Spotify search API to get the corresponding Spotify Track.</li>
            <img style={{width:'300px'}} src={ytSwimlane} title='swimlane analysis of data flow' alt='swimlane analysis of data flow'/>
            <li><strong>Organized the project.</strong> During our lunch break, we drew out a swimlane analysis diagram (above) to show the dataflow between the frontend, the GraphQL server, and the external APIs. This allowed our team to visualize the entire project so that we could split up the work effectively.</li>
            <li><strong>Embodied Captain Hook.⚓</strong> I got more familiar with React hooks -- specifically useState, and useQuery (Apollo)</li>
          </ul>
      </>
      )
    },
    {title:'next steps', content: (
      <>
        <p>
          Like many weekend hackathon projects, this thing is far from finished. Here are some things left to do:
        </p>
          <ul>
            <li><strong>Finish building the frontend.</strong> </li>
            <li><strong>Look into GraphQL subscriptions</strong> to eliminate one trip between the client and the server. Somewhere in our exhaustion during the hackathon I crafted <a href='https://stackoverflow.com/questions/58151433/send-1-request-receive-2-responses-graphql' title="Send 1 request, Receive 2 Responses GraphQL"
        rel="noopener noreferrer"
        target="_blank">this beauty of a stackoverflow question who's title sounds like some kind of clickbait marketing 😂</a>. Amazingly, someone understood what I was trying to ask (probably from the high-fidelity microsoft paint diagram) and pointed me in the right direction.</li>
            <li><strong>Build auth flow.</strong> If this project were to move to production, we would definitely add an authorization flow. At the moment, we got an authorization token from Spotify that allowed our app to access our own Spotify account to create + name a new playlist and add songs to the playlist</li>

          </ul>
      </>
      )
    }
  ]
},
  'ericauv': {
    title: 'ericauv',
    titleMedia:{type:'video', src:ericauvStoreVideo},
    tags: ['react.js', 'gatsby.js', 'deployment'],
    sections:[
      {
        title:'summary', content:(
        <>
          <p>
            A portfolio site to showcase web development projects, frontend skills, and video projects.
          </p>
        </>
        )
      },
      {title:'objectives', content: (
        <>
          <p>
            I had a few guiding principles for the design of this site:
          </p>
            <ul>
              <li><strong>Get hired.</strong> One of the main objectives of this site is for potential employers to see the thinking/reflection that goes into the work that I do. In addition to this, I want to be easily contactable. For these reasons, I've included a write-up on selected web projects, as well as contact+resume links. If you're reading this and are hiring... LET'S CONNECT VIA <a href='mailto:e.auvaart'>EMAIL</a>, or <a
        title="linked in"
        rel="noopener noreferrer"
        target="_blank"
        href="https://linkedin.com/in/eric-auvaart/"
      >Linked In
      </a></li>
              <li><strong>Ensure accessibility.</strong> When building any component, I wanted to ensure that it could be intuitively interacted with using only keyboard input. This meant making sure list items were tabable (ensuring styles were applied on focus and not just on hover), ensuring that actions like filtering web projects or controlling videos could be done only using the keyboard, and allowing scrolling through content without a scrollwheel. In addition, I wanted to make sure that users who want to use dark mode have the option to do so.</li>
              <li><strong>Ensure responsiveness.</strong> I wanted to make sure that users of this site would have a great experience, no matter the medium used to access it. For this reason, I ensured that the size and layout of components adapted perfectly to different screen sizes</li>
              <li><strong>Maintain personal brand identity.</strong> I wanted to keep with the brand identity I've developed through the visual content I deliver (primarily on instagram). This meant heavy use of no-fill stroke type, Arial Black, and repetition.</li>
            </ul>
        </>
        )
      },
      {title:'achievements/lessons', content: (
        <>
          <p>
           Some text
          </p>
            <ul>
              <li><strong>an achievement hook</strong> an achievement</li>

            </ul>
        </>
        )
      },
      {title:'next steps', content: (
        <>
          <p>
            Although I'm very proud of what I've created with this site, there are still a few things I want to add:
          </p>
            <ul>
              <li><strong>Layout for large screens.</strong> I feel that the centered layout on the homepage is a bit bland on larger screens and want to make a layout where the 'ericauv' header is on the left of the screen and rotated 90'. I see a lot of potential for changing the layout on larger screens for the other pages as well (e.g. show web project videos on hover -- similar to how video page is implemented). I'm a huge fan of editorial design so I'm quite excited to tackle this when I have some time.</li>
              <li><strong>Add some fun!</strong> I want to add a bit of gameification to this site in the form of achievements. For example -- an achievement for reaching all the pages on the site, or one for downloading the pdf of my resume. Someone visiting the site might then want to dive deeper to fulfill all the achievements. I would likely implement this by storing achievement progress (ex: 3/14 achievements completed) in localStorage.</li>

            </ul>
        </>
        )
      }
    ]
  },
  'dimension-image': {
    tags: ['react.js'],
    title: 'dimension-image',
    sections:[
      {title:'summary',
      content: (
        <>
          <p>Allow user to add and position dimension annotations on an image.</p>
        </>
      )},

      {title:'background',
      content: (
        <>
          <p>saw an image with a dimension div that appeared on hover on Pinterest. I wanted to implement more in depth functionality and allow anyone to add dimensions to their images easily. </p>
        </>
        )},
      {title:'next steps', content:(
        <>
          <p>
            normalization of dimension line properties
            saving image with dimension info
          </p>
        </>
      )}
    ]
  },
  'rest-api': {
    title: 'rest-api',
    tags: ['node.js', 'RESTful'],
    sections:[{title:'summary', content: ( <> </>)}],
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
  // 'bullet-app': {
  //   title: 'bullet-app',
  //   tags: ['react.js', 'firebase']
  // },
};

export default ProjectList;
