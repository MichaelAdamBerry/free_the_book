This project pulls data from the google books api and creates a user interface to search for books by title. Users can select a book from the results to view more specific information about each title. If a free e-book is available, those titles are highlighted in the list and the user will be able to navigate to the online e-reader from the volume details view.

The App basically consists of three primary independent views or Routes.

![home component](https://github.com/blob/MichaelAdamBerry/free_the_book/master/readMe-assets/home.png)

The Home component renders the form and handles state for the user's title query. When submitted the url is updated to /views?=QUERY rendering the List component.

![list component](https://github.com/blob/MichaelAdamBerry/free_the_book/master/readMe-assets/list.png)

The list component pulls data from the url and React Router to make query the google api data base for a list of results. By default we are returned a list of ten book titles. Each book in the list contains specific volume data like an id and a VolumeInfo object as well as an onClick function which will route from /list?q=Query to /volume id?id=ID. Volume Id makes a separate api call to google books to fetch specific volume information.

![volume component](https://github.com/MichaelAdamBerry/blob/free_the_book/master/readMe-assets/volume.png)

The project was bootstrapped using Create-React-App

## Dependencies

React, React Router, Jest, React Testing Library, React Spring,

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches Jest. Currently tests are primarily unit and snapshot tests.

### `npm run build`

Builds the app for production to the `build` folder.<br>

This app is currently hosted by firebase at https://meet-your-next-book.firebaseapp.com

### `npm run eject`
