## Show the first content item by start date:

  var Firebase = require("firebase");
  var ref = new Firebase("https://wwi-timeline.firebaseio.com/content");
  ref.orderByChild("startDate").limitToFirst(1).on("child_added",snapshot => console.log(snapshot.val()))
