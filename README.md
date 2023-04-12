# Project 1: Tetris

Hi there, 
This is my first full coding project completed for the General Assembly Software Engineering Immersive Part-Time Course (Nov 2022 - May 2023).

## Time Frame

14 days (35 course hours)

# Goal

After getting my feet wet with JavaScript, I was asked to build a browser-based game of my choice using vanilla JavaScript.

## Project Brief

- Render in the browser

- Be built on a grid

- Possess logic for winning and visually display which player won

- Allow for restarting the game without reloading the browser

- Include separate HTML / CSS / JavaScript files

- Demonstrate KISS (keep it stupid simple) and DRY code principles

- Use JavaScript for DOM manipulation

- Use semantic markup for HTML and CSS (adhere to best practices)

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

Since this was the first project that I'd ever coded, I took time to think about what the stages of the coding process would be. I did not use any planning apps, such as Trello, but decided in all following projects to use some form of planning app.

I broke the work into phases which made developing the game doable in the 2 weeks I had to work:

- Phase I: Research

- Phase II: Setting up the Grid, Drawing, Rotating and Moving the pieces

- Phase III: Managing collisions and movement at the edge of the board

- Phase IV: Keeping score

- Phase V: Adding Sound Effects

- Phase VI: Wrapping up loose ends, cleaning up my code, and reflecting

## Phase I: Research

I took a day or two to read several articles and watch a few tutorials about coding Tetris to get an idea of how I'd like to set up my game. I settled on using a grid where tetrominoes were displayed as arrays of blocks on the grid that were drawn and redrawn as they moved down the grid.

## Phase II: Setting up the grid and drawing the piecesand dom manupilations.

<img width="632" alt="Screenshot 2023-04-12 at 11 33 07" src="https://user-images.githubusercontent.com/116434578/231432701-888447f7-579f-475f-be13-074622c189eb.png">

The Pieces are set up with a series of arrays mapped onto the array of divs in the grid. The Pieces are continuously redrawn on the board so all orientations of the pieces are housed in one constant/ the version of the piece that appears at the start of its journey down the screen will be rotation index[0].

I decided to get the tPiece moving down the board first. Once the functions were in place for moving left and right and rotating the tpiece were in place, I started with randomization of the other pieces.

<img width="702" alt="Screenshot 2023-04-12 at 11 33 44" src="https://user-images.githubusercontent.com/116434578/231433121-d9072c73-fac1-4a9c-810a-14cd6bd25b5f.png">

The following functions show drawing and redrawing the piece as it moves down the screen as well as the nextStep() function that automatically moves the piece down the grid at a set time interval and is called when a player clicks the Level 1 button.

<img width="645" alt="Screenshot 2023-04-12 at 11 40 57" src="https://user-images.githubusercontent.com/116434578/231434170-45e9e993-15ed-449c-a0a9-5884c35b807a.png">


