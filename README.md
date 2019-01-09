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
* Freely navigate the maze in first-person POV without bugs or glitches
* View a map with:
  * Already explored terrain visible
  * Unexplored terrain invisible
  * The exit clearly marked
  * Algorithm players' positions clearly marked
* Receive notifications when an algorithm player has completed the maze
* Receive an ending menu upon maze completion
  * Menu shows number of moves each player took to complete the maze

## Wireframes
The app will consist of a single screen with the simulation canvas taking up the entire screen. The canvas will have several items on it besides the environment rendering:
  * The minimap containing positions and computers
  * Buttons to toggle sound, open information modals, and potentially configure game settings

![wireframe](https://github.com/micah-jaffe/maze-runner/blob/master/wireframe.jpg)

## Architecture and Technologies
This project will be implemented with the following technologies:

* Vanilla JavaScript for overall structure and game logic
* three.js for 3D visualization
* HTML5 Canvas for DOM manipulation and rendering
* Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be several files involved in this project:
* `game.js`: this file will be the top level host of all game logic and visualization
* `environment.js`: this file will display a 3D rendering of `maze.js` for the main gameplay
* `map.js`: this file will display a 2D rendering of `maze.js` for the minimap
* `maze.js`: this file will hold information about the maze, including its structure and `players`
* `player.js`: this file will be an abstract class that the following classes will inherit from:
  * `human_player.js`: this will handle all the user's actions
  * `computer_player.js`: this will be another abstract class that will handle the logic for the algorithms and will delegate to:
    * `dfs_player.js`
    * `bfs_player.js`
    * `a_star_player.js`
* 

## Implementation Timeline
Day 1:
  * Configure project, including boilerplate and webpack entry
  * Build maze graph in `maze.js`

Day 2:
  * Build `player.js` and `human_player.js`
  * Make `human_player.js` able to navigate `maze.js` by checking for walls, edges, finish
  
Day 3: 
  * Build `map.js` and get simple human-navigable maze working in browser
  * Add JS event listeners for arrow keys to control movement
  
Day 4:
  * Build `environment.js` using three.js library
  * Visualize 3D POV representation of `map.js` using raycasting
  * Sync minimap with environment map so that navigation accurately impacts both
  * Have working single-player maze game

Day 5: 
  * Add `computer_player.js` and `bfs_player.js`
  * Implement logic for BFS using given maze graph from `maze.js`
  * Add `bfs_player` to minimap and synchronize to move when `player` enters new square
  
Day 6: 
  * Add `dfs_player.js` and `a_star_player.js` algorithms
  * Add new players to minimap using same logic as `bfs_player`
  * Test and debug game

Day 7:
  * Add modals for game start and finish, algorithm info, about me
  * Style
  * Add sound
  * Test and debug
  

### Bonus features:
 * Display computer players on `environment` in addition to `map`
 * Support various maps rather than just one hardcoded one
 * Add different themes to `environment`: space maze, tron maze, etc.
