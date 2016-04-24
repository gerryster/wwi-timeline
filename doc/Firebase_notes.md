## Show the first content item by start date:

```javascript
var Firebase = require("firebase");
var ref = new Firebase("https://wwi-timeline.firebaseio.com/content");
ref.orderByChild("startDate").limitToFirst(1).on("child_added",snapshot =>  console.log(snapshot.val()))

// Events which started in July 1914:
ref.orderByChild("startDate").startAt("1914-07").endAt("1914-08").on("child_added",snapshot => console.log(snapshot.val()))
// Or by using a high Unicode code point:
ref.orderByChild("startDate").startAt("1914-07").endAt("1914-07\uf8ff").on("child_added",snapshot => console.log(snapshot.val()))
```

## React/Redux Integration Ideas

1. Simple: fbRef.once("value", ...) and then dispatch a data loaded event with snapshot.val().
1. Look into [ReactFire](https://www.firebase.com/docs/web/libraries/react/). Possibly not the best fit with Redux.
1. One of the Redux Firebase libraries?
1. This had some ideas for auth: http://blog.krawaller.se/posts/a-react-redux-firebase-app-with-authentication/

## How to store app state

```javascript
{
  currentWeek: {
    duration: // Duration instance
    content: {
      // extracted from Firebase for the current week
    }
  },
  content: {
    /* https://wwi-timeline.firebaseio.com/content
       For now listen to this using ref.on("value"...
    */
  },
  contentStatus: {
    isLoading: // true or false
  }
}
```
