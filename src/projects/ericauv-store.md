---
title: ericauv-store
tags: [node.js, react.js, graphQL, apollo, next.js, RESTful]
titleMediaType: video
titleMedia: '../images/ericauv-store.mp4'
githubLink: https://github.com/ericauv/ericauv-new
projectLink: https://store.ericauv.com
---

<div class="project-section">
  <h3 class="project-section-title">summary</h3>
  <div class="project-section-content">
    <p>
      A web store that allows users to purchase prints of photos I've taken. The
      site processes payments via integration with the Stripe API, and sends
      order confirmation emails via integration with Mailgun.
    </p>
  </div>
</div>
<div class="project-section">
  <h3 class="project-section-title">next steps</h3>
  <div class="project-section-content">
    <p>
      Of course, no project is ever truly finised and many things still need to
      be done to improve the store. Below are some of the most notable next
      steps for this project.
    </p>
    <ul>
      <li>
        <strong>Fix sign in on mobile.</strong> Currently, mobile users are
        unable to sign in because the cookie containing the JWT token returned
        from the backend server is blocked by their browsers by default. This is
        due to the fact that the backend is deployed to a different domain than
        the frontend so the browser is treating the cookie as a 'third-party'
        cookie. <strong>SOLVED!</strong> I solved this problem by creating a subdomain for my backend within the ericauv.com domain. I accomplished this by creating a CNAME record in my DNS records for ericauv.com. This record pointed to the Heroku deployment for my backend server.
      </li>
      <li>
        <strong>Allow "Guest" Checkout.</strong> Allow cart access without
        requiring sign up. This will likely be done by storing the cart in local
        storage. In order to checkout, the cart will be sent to the backend to
        validate the prices and return a stripe checkout component with the
        final price calculated.
      </li>
      <li>
        <strong>Improve accessibility.</strong> I want to implement Dark Mode,
        and a <em>'fidelity slider.'</em> I was introduced to the concept of a
        fidelity slider from Kyle Simpson's (
        <a
          href="https://twitter.com/getify"
          rel="noopener noreferrer"
          target="_blank"
          >@getify</a
        >) talk at Web Unleashed 2019 in Toronto. The idea behind this slider is
        that users should be able to adjust the data + battery usage of your
        site. A use case for this would be if a user is low on battery or their
        data connection is very weak -- they still want to use your app so you
        should give them the power to access a lower fidelity version of your
        site. Gmail already does something similar to this with their
        <a
          href="https://support.google.com/mail/answer/15049?hl=en"
          rel="noopener noreferrer"
          target="_blank"
        >
          html only mode
        </a>
        .
      </li>
      <li>
        <strong>Implement Password Reset Flow.</strong> User requests password
        reset > User enters email > Backend generates a password reset token >
        User recieves email with password reset link (includes token) > User
        attempts to reset password > Backend checks that token is valid >
        Password is reset > User is logged in
      </li>
      <li>
        <strong>Improve Cart UX.</strong> Implement updating of the quantity of
        an item in a cart. Allow closing the cart via the ESC key. Allow closing
        of the cart by clicking outside the cart div.
      </li>
      <li>
        <strong>Improve Loading Experience. </strong>Implement lazy loading of
        images / skeletons of images while they load on the items page.
      </li>
      <li>
        <strong>Improve Footer.</strong> Add a site map to the footer, and style
        the footer, at the moment it looks a footer from 1999.
      </li>
    </ul>
  </div>
</div>
