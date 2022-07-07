# Flick Freak
A self-reported movie tracking database. Note the movies you want to see, and track the number of times you've seen a movie. Never forget if you've seen a movie again!

**Link to project:** coming soon

![alt tag](http://placecorgi.com/1200/210)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React

Build with React.js framework, leveraging @MUI for style components and Axios to handle http request to the FlickFreak API. First, I built the API to handle the updates to the MongoDB that tracks a movie's name, if it's been watched or not, and the watch count. This info is then rendered on the front end, with filters on the watched boolean, to place a movie in the "WatchList" or the "WatchedList". No movie that has been seen can be deleted, as you can't unsee a movie no matter how hard you might try.

## Optimizations
Need to work on the style of the app, currently working towards base features.
Need to re-work the renders for the WatchList and WatchedList to re-render when a new movie is submitted, or an existing movie from the WatchList is seen.
Need to build import feature to pull in .CSV of existing movies watched, with a default watch counter of 1.

## Lessons Learned:

Originally started this project storing the date the movie was watched. Scrapped the idea as storing the dates as strings and converting back to dates for the front end was posing some unique challenges, and created some issues with future features of importing existing movies watched. Learned some of the unique workings of Axios and @MUI, and how to style existing components on the fly.