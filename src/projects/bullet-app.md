---
title: bullet-app
tags: [react.js]
githubLink: https://github.com/ericauv/bullet-app
titleMediaType: video
titleMedia: ../images/bullet-app.mp4
---

<p><strong>NOTE: This was one of my first projects -- it is here for reference to show my learning progress, not as a showcase of my current skillset</strong></p>
<div class="project-section">
  <h3 class="project-section-title">summary</h3>
  <div class="project-section-content">
    <p>
      One of my first projects using React. Emulates and extends the functionality of a traditional pen-and-paper habit tracking journal. Included features such as monthly views and daily views. Allowed different length of clicks to perform different actions. Used firebase to store and sync with the App state.
    </p>
  </div>
</div>
<div class="project-section">
  <h3 class="project-section-title">next steps</h3>
  <div class="project-section-content">
    <p>
      As this was one of my first frontend projects, my styling game was not top notch. I also was not very experienced with working with external APIs at this point. Here are some things I could improve in this app:
    </p>
    <ul>
      <li><strong>Improve styling.</strong> The styling could be better in a lot of ways. Many elements do not line up properly with eachother. The month selection section on the monthly view should have SOME styling, rather than being a list of un-styled anchor tags</li>
      <li><strong>Improve data flow.</strong> Currently, the entire app state is synced with firebase. So anytime any part of the state changes, the entire state is passed back and forth from firebase. This could be greatly improved by making individual calls to the Firebase API to create, update, or delete individual items.</li>
      <li><strong>Avoid prop drilling.</strong> I could use React.Context in order to avoid passing methods down multiple layers of components.</li>
    </ul>
  </div>
</div>
