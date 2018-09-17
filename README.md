# [►] Movie List!

## instructions

Download a copy of the files and npm install & start
or visit https://arashkiani.github.io/movie-list/ to see the live code

## Links
* https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md

## API Pointers

* https://developers.themoviedb.org/3/movies/get-now-playing
* https://developers.themoviedb.org/3/genres/get-movie-list
* https://developers.themoviedb.org/3/getting-started/images

## Steps

* Go through the instruction and make sure I understand everything required [✓]
* Install React [✓]
* Install packages needed + Setup Linting + VScode [✓]
* Register @ TMDb & Investigate Api (thank you for the pointers) [✓]
* Deciding on components (honefully testable enough) :
  * Collection (to list all movies), options:
    1 props {selectedGenres, Range} 
    2 Build a service to filter movies and pass in end result (this way i wan use pure, easier testing)
    3 do it through redux actions
  * Movie ( to show title + details)
  * input [ range & checkbox ] : Will be used as (child/atom element )
  * selectGenresFilter : use Input / possibly toggleable  [✓]
  * selectRangeFilter : use Input  [✓]
  * App component (where everything fits together)
* Hacking a layout to get the feeling of api dataflow  [✓]
* Implementing components mentioned & Write tests [✓]
* Indulge myself with making DRY layout & typography and font sizes [✓]

## Solution

* Using React
* Axios (I understand how .fetch() works and I could use polyfill, but I feel Axios is better at handling the job )
* Redux for state management (do i really need it ?)

## Requirements

* UI : clean DRY layout + typography
* Don't over engineer, comment and test
* API's should only be called once.

## API To Use &  Tips

* TMDb Movies Now Playing API
* TMDb Movie genres API
* TMDb Image API
* Must only contain genres from the TMDb API that are in the returned movie result set.

## UI

* list of now showing movies showing their title, genres and poster image [✓]
* Minimum rating input with a range between 0 and 10, increments of 0.5 and a default set to 3. [✓]
* Movies should also be filterable by their rating (vote_average property). [✓]
* Movies should be filterable by multiple genres (checkboxes) [✓]
* Movies should be ordered by popularity (most popular first - popularity property). [✓]

# out of scope:
couple of points that I assumed are out of the scope of the project

* show a message if no movies are available
* loop through the pages / build lazy loading to fetch other pages