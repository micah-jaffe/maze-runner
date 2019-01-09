# maze-runner

First Week Goals
This project was originaly a one week challenge. The planning that went into the first week of work is listed here

Functionality and MVP
Basic game: 
Ship movement, shooting, sprite
enemy hit-box/death particle effect animation
score displayed
BoxBox: first enamy type  
Intermediate goals; Enemy types:
Pinwheel: moves in a random direction while spinning
Arrow: moves in one known direction
Grunt: moves towards player's ship, sprite geometry is animated
Weaver: moves towards player ship, and away from ship bullets  
Challenge Goals; Tougher enemy types:
Snake: moves like a snake, can only be killed when hit in the head
Singularity: When activated by a bullet, it pulls in pieces nearby including the player's ship. 
Alien ships: When the Singularity has pulled in enough enemy ships, it explodes and a bunch of alien ships arrive from the portal that move like Grunts, but faster.
Enemy Types

GEOWars production steps: 
Weekend/Monday
The first step is to make a functional base on which to build the rest of the game. This will include the ship movement mechanics, shooting mechanics, and the simplist enemy type. Visuals for the ship and explosions will also be included.

Tuesday
Enemy spawning mechanics will be added. Arrow and Pinwheel will be added with their sprites, movement logic, and hit boxes. Grunt's movement logic will be completed.

Wednesday
Grunt and Weaver will be completed, and Singularity effects started.

Thursday
Thursday will be devoted to gameplay. This includes how, how many, and at what moment enemies will spawn as a game round progresses over time. The particle effects and controlls will become more polished, and a game menu will be added.

Tuesday-Thursday
The next steps will include the addition of more challenging/smarter enemies. Each enemy will become more and more challenging to add to the game, scaling nicely with how much work I can finish this week since each step after the base game will be playable and relatively complete.

Functional MVPs
Base MVPs
 Game has a menu, pause/play feature.
 Player Ship Mechanics: Ship moves and sprite changes orientation depending on mouse/joystick position
 Bullets: Ship shoots bullets in direction the mouse is pointing relative to the ship/ direction the stick is pointing.
 BoxBox: Simplest enemy spawns repeatedly in random positions and doesn't move. When hit by a bullet, it explodes with a colorful particle effect
Content MVPs
 Pinwheel
 Arrow
 Grunt
 Weaver
Challenge Goals
 Snake
 Singularity
 Alien
 Grid Warping Effect
Architecture
This is the original archetecture that was proposed before I ported the game over to my game engine

Game managment
game_view.js: listens for user input and commands game.js to reposition and render things. game.js: stores every visible element, commands them to render when asked, detects collisions. /particles: stores all of the files needed for the game's particle effects. game.js determines when particles are added.

Nonparticle elements
moving_object.js: All non particle elements inherit from moving_object for rendering and movement logic. /Enemies: stores the files for each enemy type. Any modifications that are needed for their movement logic and rendering will be included here.

Technologies
JavaScript for overall structure and game logic
HTML5 Canvas for DOM manipulation and rendering
Web Audio API for sound generation, processing and control
Gamepad API to allow for controller use
Weekend Progress:
