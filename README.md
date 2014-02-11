# angular-lorem-image 

This directive provides lorem image generation for your website by using the great lorempixel service to generate images.
Options:
<ul>
  <li>width: in px(default value at 300 px)</li>
  <li>height:in px(default value at 200 px)</li>
  <li>count: number of images</li>
  <li>text: vertical text on the left border of your image </li>
  <li>category: specific to lorem images (ex:sports,animals)</li>
</ul>
Really simple to use :

<div class="highlight highlight-html">

```html
<lorem width='200' height='200'  count='3' text='titi' category='sports'></lorem>
```
JSFiddle example : http://jsfiddle.net/xMuB9/1/ 
<br />
PR accepted so Have Fun!

## Directory Layout

    app/                --> all of the files to be used in production
      index.html        --> app layout file (the main html template file of the app)
      js/              --> javascript files
        app.js          --> application
        directives.js   --> application directives
        services.js     --> custom angular services
      partials/             --> angular view partials (partial html templates)
        partial1.html

    config/karma.conf.js        --> config file for running unit tests with Karma
    config/karma-e2e.conf.js    --> config file for running e2e tests with Karma

    scripts/            --> handy shell/js/ruby scripts
      e2e-test.sh       --> runs end-to-end tests with Karma (*nix)
      e2e-test.bat      --> runs end-to-end tests with Karma (windows)
      test.bat          --> autotests unit tests with Karma (windows)
      test.sh           --> autotests unit tests with Karma (*nix)
      web-server.js     --> simple development webserver based on node.js

    test/               --> test source files and libraries
      e2e/              -->
        runner.html     --> end-to-end test runner (open in your browser to run)
        scenarios.js    --> end-to-end specs
      lib/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
          version.txt           --> version file
      unit/                     --> unit level specs/tests
        controllersSpec.js      --> specs for controllers
        directivessSpec.js      --> specs for directives
        filtersSpec.js          --> specs for filters
        servicesSpec.js         --> specs for services
