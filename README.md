# GameShelf Web App
GameShelf is a web application born from my love of video games and 
my desire for a better way to keep track of the titles I own and play. 
The application's primary goal is to help gamers who use multiple platforms—such as 
Xbox, PlayStation, PC, or Nintendo—organize their games in one place. 
Instead of having to remember which games they own on each platform, 
users can create a personal library to add their games and their experiences with each one.

Each user can add a game to their library using a search bar which shows game results from an external API,
this API will provide the title of the game, an API id and the cover of the game, therefore the user will
provide their experience with each game such as, playtime, the platform they are playing on, status, personal 
ratings, and comments.
This allows users to track details of the games they own.
For instance, a user can mark a game as "Playing" while playing it and later switch the status to "Completed" upon finishing. 
They can also update playtime, ratings, or comments as they progress through the game.

The web application is also designed to help gamers who have limited free time or 
simply face an overwhelming number of choices. 
A large collection can make it difficult to decide what to play, 
especially when titles are spread across different platforms. 
By keeping everything organized in a single library, users can see what games they have available, 
track completed games, and decide which ones to prioritize. 

GameShelf will also feature a wishlist where users can list games 
they do not yet own but would like to buy or play in the future. 
Users will be able to search for their desired games through a search bar, 
same search bar used to add a game to their library.

This web application is designed for individual users; 
each user will have their own account, personal game library, and personal wishlist.
Users can create an account, log in, add games to their library, view and manage their games, 
update information on specific titles, remove games they no longer wish to keep, and maintain a separate wishlist. 
These would be the basic functions of the project for now, 
but I would like to enhance it further by adding different features over time.

## Business Rules
* A user may add zero or many user_game records.
* Each user_game record must belong to exactly one user.
* A game may appear in zero or many user_game records.
* Each user_game record must refer to exactly one game.
* A user may add zero or many games to their wishlist.
* Each wishlist record must belong to exactly one user.
* A game may appear in zero or many wishlist.
* Each wishlist record must refer to exactly one game.


Here is an `ERD` that illustrates better the entities and attributes of this project.

![ERD of gameshelf](/Images/GameShelf-Chart.jpeg)

Here are my database relations.
![Relations for gameshelg](/Images/Relations-for-gameshelf.jpeg)