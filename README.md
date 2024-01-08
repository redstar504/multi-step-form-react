# React Multi Step Form

This multi-step form was built as part of a [Frontend Mentor](http://frontendmentor.io) challenge in which only the design was provided in Figma format.

View the live demo [here](https://multi-step-react.onrender.com/).

### Some notes about the project

- __Semantic HTML markup__
- - Implemented using HTML5 tags that are representational of the underlying content.
- __Vanilla CSS implementation__
- - No CSS frameworks. The entire project has minimal dependencies on external libraries.
- - Compact breakpoint styles while maintaining a very fluid mobile interface, due to the thoughtful markup structure.
- - Mobile layout is implemented using CSS flexbox.
- - Desktop layout adapts using grid for structural purposes.
- - Uses [CSS counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) for generating the step numbers.
- - Easily manageable, presentational class approach split up into multiple files and composed at build time.
- __Responsive layout__
- - The layout adapts to all screen sizes and as of early 2024 has been tested thoroughly on iOS and Android, as well as desktop Chrome.
- __Built using React__
- - Uses a context provider pattern to eliminate prop drilling.
- - The multi-step process is reusable and can be adapted to other business models.
- - Form handling and validation is provided by `react-hook-form`.
- - User data is stored using `sessionStorage` and is cleared at the end of the flow.
- - No data is persisted, the session is cleared on the success page.
- __Deployment__
- - The project deploys and builds automatically when commits are pushed to the main branch.
- - Hosting is provided courtesy of the Render platform.

### Challenges
- Creating a flexible multi step form on the front-end is difficult. I wanted to make a process that would easily allow users to return to previous steps by clicking on the step in the nav.
- If returning to a previous step, the user should not lose their progress on subsequent steps, so bidirectional navigation was implemented.
- Overall, it was a challenging project but it accelerated my understanding of React.

View the demo live [here](https://multi-step-react.onrender.com/).

Special thanks to Jason Knight for providing invaluable mentoring over the past several years in the pursuit of clean and maintainable HTML and CSS.  He encourages practices that adhere to the W3 spec, and promotes accessibility and maintainability of front-end code.  I highly recommend checking out his [CSS articles on medium](https://deathshadow.medium.com/).