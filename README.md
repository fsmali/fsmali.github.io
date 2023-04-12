# Project 1: Tetris

Hi there, 
This is my first full coding project completed for the General Assembly Software Engineering Immersive Part-Time Course (Nov 2022 - May 2023).

## Time Frame

14 days (35 course hours)

# Goal

Once I gained some experience with JavaScript, I was given the task of creating a web-based game of my choosing using plain JavaScript.

## Project Brief

- It should be displayed on the browser.
- The game should be built on a grid.
- It should have a logic for determining the winner and should provide a visual representation of the winning player.
- The game should allow for restarting without reloading the browser.
- The project should have separate files for HTML, CSS, and JavaScript.
- The code should be kept simple and concise and follow the DRY (Don't Repeat Yourself) principle.
- DOM manipulation should be done using JavaScript.
- Semantic markup should be used for HTML and CSS following the best practices.

## Technologies Used

- HTML5 with HTML5 audio

- CSS3

- JavaScript (ES6)

- Git

- GitHub

- Google Fonts

- Sound Website

- Netlify

## Planning

As this was my first coding project, I spent considerable time contemplating the different stages of the coding process. Although I did not employ any planning applications like Trello, I recognized the value of using some form of planning app for my future projects.

I broke the work into phases which made developing the game doable in the 2 weeks I had to work:

- Phase I: Researching and gathering information about the game's requirements and mechanics.
- Phase II: Creating the grid and implementing the functionality to draw, rotate, and move the game pieces.
- Phase III: Developing the logic to handle collisions and movement at the board's edge.
- Phase IV: Adding scorekeeping functionality to the game.
- Phase V: Incorporating sound effects to enhance the user's experience.
- Phase VI: Concluding the project by addressing any outstanding issues, refining the code, and reflecting on the development process.

## Phase I: Research

To gain a better understanding of how to approach the task of coding Tetris, I dedicated a day or two to reading various articles and watching tutorials. After careful consideration, I decided to use a grid-based system for displaying tetrominoes. The tetrominoes were represented by arrays of blocks on the grid, which were redrawn as they moved down the grid during gameplay.

## Phase II: Setting up the grid and drawing the piecesand dom manupilations.

<img width="632" alt="Screenshot 2023-04-12 at 11 33 07" src="https://user-images.githubusercontent.com/116434578/231432701-888447f7-579f-475f-be13-074622c189eb.png">

The game pieces are configured using arrays that are mapped onto the array of divs within the grid. These pieces are dynamically redrawn on the board to accommodate all possible orientations of the pieces, which are stored within a constant array. The initial orientation of a piece when it appears on the screen is represented by the rotation index[0].

To begin the development process, I focused on getting the tPiece to move down the game board. Once I had established the necessary functions for left and right movement, as well as rotation, I shifted my attention towards implementing a system for randomizing the appearance of the remaining game pieces.

<img width="702" alt="Screenshot 2023-04-12 at 11 33 44" src="https://user-images.githubusercontent.com/116434578/231433121-d9072c73-fac1-4a9c-810a-14cd6bd25b5f.png">

The functions below depict the drawing and redrawing of the game piece as it descends down the screen. Additionally, the nextStep() function is responsible for automatically moving the piece down the grid at a predetermined time interval. This function is triggered when a player clicks the Level 1 button.

<img width="645" alt="Screenshot 2023-04-12 at 11 40 57" src="https://user-images.githubusercontent.com/116434578/231434170-45e9e993-15ed-449c-a0a9-5884c35b807a.png">

# Phase III: Managing collisions and movement at the edge of the board

The stopMovement() function is responsible for managing collisions between game pieces. If a component of a piece is detected to contain the "filled" class, then all corresponding pieces are considered to be filled. To address this, the function also considers the bottom row of the grid, which has the class "bottom". However, since the undrawBoard() function clears the "filled" class, I had to devise a solution to prevent pieces from falling off the bottom of the grid. Overcoming this challenge was a particularly enjoyable aspect of the development process.

<img width="680" alt="Screenshot 2023-04-12 at 21 31 01" src="https://user-images.githubusercontent.com/116434578/231577410-befdcbeb-5482-4b54-8bdf-92937b603344.png">

# Phase IV: Keeping score

<img width="736" alt="Screenshot 2023-04-12 at 21 33 44" src="https://user-images.githubusercontent.com/116434578/231578066-b5ae4426-faac-40ef-a321-5fcc6960bdf9.png">

# Phase VI: Wrapping up loose ends, cleaning up my code, and reflecting

In an effort to prepare for our project presentation, I made a conscious effort to complete all major features at least one or two days in advance. This enabled me to devote time to cleaning up my code and inserting relevant comments for future reference. Moreover, this approach allowed me to avoid working up until the deadline and instead provided me with the opportunity to reflect on the development process. As a result, I was able to identify what had worked well and what required improvement, and consider how I would approach similar projects differently in the future.

# Fun Stuff

Here are some possible ways to rephrase the text:

- As an artist, I found it as enjoyable to develop a process for managing this project as it was to code Tetris itself. Defining my MVP and prioritizing features helped me stay on track and avoid rushing at the last minute.
- I had a lot of fun exploring various approaches to coding Tetris and learning about its history. Mapping the tetromino arrays onto my grid was also a satisfying challenge.
- Adding styling and sound was a highlight for me. I loved choosing a playful font and creating sound effects that fit the game's atmosphere.
- It was satisfying to wrap up loose ends and find a stopping point for the game the day before my presentation. Knowing that I had accomplished what I set out to do was a great feeling.

# The following are aspects of the project that I had fun with:

Developing a process for taking on this type of project. As an artist, I think a lot about the creative process and how decisions are made. So for me, just as important as figuring out how to code Tetris was figuring out how to manage my time so that I'd be able to deliver an MVP that looked good. This meant clearly defining my MVP and knowing what features I might need to stop working on so I wasn't working right up until the final deadline.
Researching different approaches to coding the game and reading up on the game's origin story.
Figuring out how to map the tetromino arrays onto my grid.
Adding styling and sound => I really enjoyed choosing a fun font and sound effects for my game.
Finding a stopping point and tying up loose ends of the game the day before I needed to present.


# Challenges
- While working on the project, I considered implementing a feature where the next piece to drop would be displayed in a small grid beside the playing board. However, as the deadline approached, I decided to focus on other features and let this one go as a stretch goal.

- I put in a lot of effort into getting the button that played the iconic Tetris theme song to work properly. Despite spending many hours on it and consulting with my instructors, I was unable to figure out how to make it stop once it started.

# Key learnings

- One of the challenges I faced was creating a gameboard using CSS grid. It required some setup, but I found it to be a useful tool for organizing the different elements of the game.

- To control the movement of the tetrominos, I used keyCodes in the keyControl() function. This allowed the player to use the arrow keys to move and rotate the pieces.

- I learned the importance of researching a project thoroughly before diving into coding. This helps to clarify the goals and scope of the project and ensures that the final product meets the desired outcomes.

- While working on the project, I had many ideas for additional features, such as the nextPiece() function that would display the next random tetromino to appear. However, I had to be mindful of the project's timeline and scope, and some of these features may not have made the final cut.

# If I'd had more time...


If I had more time,

- I would have liked to add some additional features to the game, such as changing the background color of the screen to indicate changes in the player's level.

- Another feature that I would have liked to implement is an option for players to save their high score, which would add an extra layer of engagement and competition to the game.

- I also attempted to add a function that would allow the player to drop a piece immediately using the space bar, but encountered some difficulties with it. If I had more time, I would have liked to revisit this feature and work out the kinks.

- Lastly, one issue that I was not able to resolve in the given timeframe was figuring out how to stop the Tetris theme song once it had started playing. With more time, I would have liked to troubleshoot this and find a solution.



