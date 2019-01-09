# Maze Runner


## Background and Overview
Maze Runner is an interactive JavaScript game that pits human against computer, benchmarking maze solving performance against classic algorithms. "Algorithm players" will include DFS, BFS, and A*.

Users will enter the maze with no knowledge of the maze layout except the direction of the exit. As the maze is explored, the map will expand to reveal newly explored areas.

The maze will consist of a grid of squares with solid walls in between them. Each time the user enters a new square (or revisits a previous square), each computer player will also advance one square as governed by its algorithm. These computer players' positions will display on the user's map, but map terrain will only be illuminated for areas that the user themself has explored.

The three.js library will be used to render a first-person maze exploration experience (with all the maze logic itself still handled internally). This will add a lot of style to the game and will not detract from any of the game logic complexity. If this fails, a 2D version can be built with vanilla JavaScript.


## Functionality & MVP
In Maze Runner, users will be able to:

* Start the game and understand the instructions
* View an explanation of the algorithms used
* First-person freely navigate the maze free of bugs or glitches
* View a map with:
  * Already explored terrain visible
  * Unexplored terrain invisible
  * The exit clearly marked
  * Algorithm players' positions clearly marked
* Receive notifications when an algorithm player has completed the maze
* Receive an ending menu upon maze completion
  * Menu shows number of moves each player took to complete the maze

## Wireframes
This app will consist of a single screen with the simulation canvas, playback controls, probabilities controls, instrument selectors and nav links to the Github, my LinkedIn, and the About and Details modals.

The simulation canvas will include a dropdown for selecting the initial color of the creation object. Users will click and drag to create objects of a certain size and vector angle.

Playback controls along the top will include Start, Pause, Restart and Reset buttons.

On the left, there will be an expandable menu allowing the user to control the sound event transition matrix and the color evolution matrix.

On the left near the bottom, will be an expandable menu allowing users to select the 'instruments'.

wireframes

Architecture and Technologies
This project will be implemented with the following technologies:

Vanilla JavaScript for overall structure and game logic,
HTML5 Canvas for DOM manipulation and rendering,
Web Audio API for sound generation, processing and control. WebAudioAPI allows for simultaneous sounds with more dependable time triggering
Webpack to bundle and serve up the various scripts.
In addition to the webpack entry file, there will be four scripts involved in this project:

board.js: this script will handle the logic for creating and updating the necessary DOM elements.

asteroids.js: this script will house the physics logic for the asteroids.

audio.js: this script will handle the audio logic and the creation of AudioEvents based on the input parameters outlined above. The programming paradigm will be an audio graph consisting of buffers and processing nodes, all connected into a master bus, and referencing a global AudioContext with its own timeline.

evolutions.js: this lightweight script will house the constructor and update functions for the Evolutions objects.

Implementation Timeline
Day 1: - [x] Finished momentum collision physics on my version of the Asteroids project - [x] Completed WebAudioAPI Tutorial and loaded basic sound from static assets

Day 2: Setup all necessary Node modules, including getting webpack up and running. Create webpack.config.js as well as package.json. Write a basic entry file and the bare bones of all 4 scripts outlined above. Learn the basics of Web Audio API. Goals for the day:

[x] Get webpack serving files and frame out index.html
[x] Learn enough Web Audio to render an object to the Canvas element and create a sound
[x] Port over the relevant pieces of my Asteroids(with collision physics) project and implement Asteroid creation
Day 3: Dedicate this day to learning the Web Audio API. First, build out the AudioEvent object to connect to the Board object. Then, use board.js to create and render Asteroids and AudioEvents. Goals for the day:

[x] Complete the asteroids.js module (constructor, update functions, colors)
[x] Get sounds to play on collisions
[x] Build first sound library
[x] Get collision graphics working
[x] Make the Asteroids able to be created with mouse. Set vectors on mouse release.
Day 4: Create the logic backend. Build out modular functions for handling the different evolutions. Goals for the day:

[x] Build Markov Matrix object and link it with collisions
[x] Export an AudioEvent object with correct type and handling logic
[x] Have a functional screen on the Canvas frontend that correctly handles creation and running of the simulation.
[x] Make sure that starting, stopping, and resetting works.
Day 5: Install the controls for the user to interact with the game. Style the frontend, making it polished and professional. Goals for the day:

[x] Create controls for game speed, stop, start, restart, reset
[x] Build out list of instruments
[x] Have a styled Canvas, nice looking controls and title
Over the weekend:

[x] Test the project for bugs
[x] Deploy the project on GitHub Pages
Bonus features
There are many directions in which this project could evolve.

[ ] Alter the Markov matrix governing sound events
[ ] Alter the Markov matrix governing color state evolutions
[ ] Add recording and saving of output
[ ] Allow users to import their own sounds
[ ] Allow users to draw obstacles and restrictive spaces into the interaction environment.
