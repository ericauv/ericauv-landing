---
title: ericauv
githubLink: https://github.com/ericauv/ericauv-landing
projectLink: https://www.ericauv.com
tags: [graphQL, react.js, gatsby.js, node.js]
---

<div class="project-section">
  <h3 class="project-section-title">summary</h3>
  <div class="project-section-content">
    <p>
      A showcase of web development projects, frontend skills, and video projects.
    </p>
  </div>
</div>
<div class="project-section">
  <h3 class="project-section-title">objectives</h3>
  <div class="project-section-content">
    <ul>
      <li>
        <strong>Get hired.</strong> One of the main objectives of this site is
        for potential employers to see the thinking/reflection that goes into
        the work that I do. In addition to this, I want to be easily
        contactable. For these reasons, I've included a write-up on selected web
        projects, as well as contact+resume links. If you're reading this and
        are hiring... LET'S CONNECT VIA <a href="mailto:e.auvaart">EMAIL</a>, or
        <a
          title="linked in"
          rel="noopener noreferrer"
          target="_blank"
          href="https://linkedin.com/in/eric-auvaart/"
          >Linked In
        </a>
      </li>
      <li>
        <strong>Ensure accessibility.</strong> When building any component, I
        wanted to ensure that it could be intuitively interacted with using only
        keyboard input. This meant making sure list items were tabable (ensuring
        styles were applied on focus and not just on hover), ensuring that
        actions like filtering web projects or controlling videos could be done
        only using the keyboard, and allowing scrolling through content without
        a scrollwheel. In addition, I wanted to make sure that users who want to
        use dark mode have the option to do so.
      </li>
      <li>
        <strong>Ensure responsiveness.</strong> I wanted to make sure that users
        of this site would have a great experience, no matter the medium used to
        access it. For this reason, I ensured that the size and layout of
        components adapted perfectly to different screen sizes.
      </li>
      <li>
        <strong>Maintain personal brand identity.</strong> I wanted to keep with
        the brand identity I've developed through the visual content I deliver
        (primarily on instagram). This meant heavy use of no-fill stroke type,
        Arial Black, and repetition.
      </li>
    </ul>
  </div>
</div>
<div class="project-section">
  <h3 class="project-section-title">achievements/lessons</h3>
  <div class="project-section-content">
  <p>I ran into a few roadblocks while developing the site and learned some great lessons through overcoming them.</p>
    <ul>
      <li>
        <strong>Host videos with S3 + Cloudfront</strong> Originally, I hosted the videos for this site on the same server as the site, but found that the videos loaded too slowly. I tried using vimeo to host the videos, however in order to customize the player I would need to sign up for a paid plan. Finally, I decided upon using an S3 bucket to host my videos and used Cloudfront to distribute them. The videos now load super fast and for the a great deal more than the amount of traffic I anticipate for this site, the hosting + distribution will be free.
      </li>
      <li>
        <strong>Test on different devices.</strong>Originally, I (wrongly) assumed that Chrome's device view would be sufficient to ensure that the site design would work on different devices. However, I quickly found out after seeing the site on mobile that this was not the case. In order to design for both mobile and desktop use, I accessed my development server on different browsers on desktop as well as on my mobile phone. It was crucial to view the site on my phone -- while Chrome's device view tool will mimic the screen size of mobile devices, it does not emulate the devices themseleves. I found and fixed many bugs that appeared while viewing the site on a mobile device.
      </li>
    </ul>
  </div>
</div>
<div class="project-section">
  <h3 class="project-section-title">next steps</h3>
  <div class="project-section-content">
    <p>
      Although I'm very proud of what I've created with this site, there are
      still a few things I want to add:
    </p>
    <ul>
      <li>
        <strong>Layout for large screens.</strong> I feel that the centered
        layout on the homepage is a bit bland on larger screens and want to make
        a layout where the 'ericauv' header is on the left of the screen and
        rotated 90'. I see a lot of potential for changing the layout on larger
        screens for the other pages as well (e.g. show web project videos on
        hover -- similar to how video page is implemented). I'm a huge fan of
        editorial design so I'm quite excited to tackle this when I have some
        time.
      </li>
      <li>
        <strong>Add some fun!</strong> I want to add a bit of gameification to
        this site in the form of achievements. For example -- an achievement for
        reaching all the pages on the site, or one for downloading the pdf of my
        resume -- maybe an achievement for you for reading all the way too this point :). Someone visiting the site might then want to dive deeper to
        fulfill all the achievements. I would likely implement this by storing
        achievement progress (ex: 3/14 achievements completed) in localStorage.
      </li>
      <li>
        <strong>Persist dark mode between sites.</strong> Ideally, when a user navigates between store.ericauv.com and ericauv.com or revisits one of those sites after closing their browser, they're dark mode preference should stay the same. I would implement this by saving the dark mode/light mode selection in local storage, and setting the dark/light theme by looking at the value of this item in localStorage.
      </li>
    </ul>
  </div>
</div>
