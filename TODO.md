# Immediate
* [ ] display current week content
  * [x] extract the currentWeek reducer into its own file
  * [x] create a unit test which verifies that when content is loaded, the data structure looks correct
  * [ ] embed the videos correctly: figure out how to pass through custom attributes.
* [ ]removed unused mocha and chi dependencies

# Features/Roadmap
* [ ] create a GUI for inputting videos
  * [ ] get auth working
* [ ] currentWeek reducer's initial state is last week minus 100 years
* [ ] battles
* [ ] soft launch on firebase (no custom domain)
* [ ] Prelude to War and Aftermath sections
* [ ] WYSIWYG content editing
* [ ] TimelineWeek should remain highlighted when it is selected
* [ ] Casualties graph

# UI
* [ ] clean up the week display labels in Timeline/Week. See http://jsbin.com/qeluce/3/edit?html,css,output
* [ ] improve typeface

# Tech
* [ ] move the connect logic into Timeline/Week
* [ ] setup the Redux devtools: https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md
* [ ] upgrade to the latest React
* [ ] upgrade to the latest Node
* [ ] get `npm run test:dev` working
* [ ] DRY up resolve in config/test.js
* [ ] use ES6 classes
* [ ] hook up a URL router
 * https://github.com/reactjs/react-router-redux seems to do some automatic synching between the URL and Redux state.

# Done
* [x] Start pulling content from a DB
* [x] move Timeline sub elements to a sub directory
* [x] create weeks!
* [x] configure jslint to prefer trailing commas
* [x] setup [redux-cli](https://www.npmjs.com/package/redux-cli)
