<p align="center">
  <h1 align="center">Welcome to<strong> DINO-SORE</strong>!</h1>

  <p align="left">
    Goodbye memorizing what trainer plan for Workout & Nutrition, hello <strong> DINO-SORE</strong>!
    <br /><br />
    Paper dive logs are difficult to keep track of. Which dives have all my shark photos? Where are all my Australia dives? What equipment did I wear when the water was 48º?
    <br /><br />
    That's where diverr comes in, a multi-functional storage and library application with a social component. At the core, it provides an intuitive form to submit logs into an electronic, searchable, & filterable dive log book that is an extension of traditional paper records.
    <br /><br />
    Upload your photos to your dive log and instantly share them with a worldwide community of divers who understand the thrill of swimming with manta rays, setting a new personal depth record, and passing the 24-hours-underwater mark.
    <br /><br />
  Built by a six-person dev team with <em>Next.js</em>, <em>React</em>, <em>Material-UI</em>, <em>NextAuth</em>, <em>Formik</em>, and <em>Postgres</em>, diverr boasts a simple and intuitive UI while providing a highly performant back end constructed with complex queries that abstract away the front end workload.
    <br /><br />
    <img src="gifs/about.gif" alt="diverr homepage" />
    <h3 align="center">
      <strong>Contributors »</strong>
      <br />
      <hr />
      <a href="https://github.com/anthony3662" target="_blank">Anthony Ye</a>
      •
      <a href="https://github.com/austinm2040" target="_blank">Austin Miller</a>
      •
      <a href="https://github.com/daveanue" target="_blank">David Wang</a>
      •
      <a href="https://github.com/markPVale" target="_blank">Mark Vale</a>
      •
      <a href="https://github.com/marcpetrecca1" target="_blank">MarcAnthony Petrecca</a>
      •
      <a href="https://github.com/varunchillara" target="_blank">Varun Chillara</a>
      <hr />
    </h3>
  </p>
</p>
<br />
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#stack">Built With</a></li>
    <li><a href="#workflow">Workflow</a></li>
    <li><a href="#feature">Features</a></li>
     <ul>
    <li><a href="#login-page">Login Page</a></li>
    <li><a href="#Chat">Chat</a></li>
    <li><a href="#Navigation">Navigation</a></li>
    <li><a href="#Calendar">Calendar</a></li>
    <li><a href="#Workout">Workout</a></li>
    <li><a href="#Meal">Meal</a></li>
    <li><a href="#Journal">Journal</a></li>
    </ul>
    <li><a href="#back-end">Back End</a></li>
    <li>
     <a href="#workflow">Workflow</a>
     <ul>
      <li><a href="#trello">Trello</a></li>
      <li><a href="#version-control">Version Control</a></li>
     </ul>
    </li>
    <li>
     <a href="#development-and-deployment">Development and Deployment</a>
     <ul>
      <li><a href="#repo">Repo</a></li>
      <li><a href="#install">Install</a></li>
      <li><a href="#start-scripts">Start Scripts</a></li>
      <li><a href="#google-oauth-token">Google OAuth Token</a></li>
      <li><a href="#cicd">CI/CD</a></li>
     </ul>
    </li>
    <li><a href="#challenges-and-learning">Challenges and Learning</a></li>
  </ol>
</details>

<hr />
<br />

# Stack

<table>
  <tbody>
    <tr>
      <td>Front End Languages</td>
      <td>
        <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
        <img alt="HTML" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />
        <img alt="CSS" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
        <img alt="SASS" src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <td>Frameworks & Libraries</td>
      <td>
        <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
        <img alt="Material-UI" src="https://img.shields.io/badge/-Material--UI-%230081CB?&style=for-the-badge&logo=material-ui&logoColor=white" />
      </td>
    </tr>
      <td>Database & Back End</td>
      <td>
        <img alt="Firebase" src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"/>
        <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
        <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>
        <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
      </td>
    </tr>
      <td>Design</td>
      <td>
        <img alt="Figma" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
      </td>
    </tr>
    <tr>
      <td>Utilities</td>
      <td>
        <img alt="Webpack" src="https://img.shields.io/badge/webpack%20-%2320232a.svg?&style=for-the-badge&logo=webpack&logoColor=%2361DAFB" />
        <img alt="Babel" src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black" />
        <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red" />
        <img alt="Git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
        <img alt="yarn" src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white"/>
      </td>
    </tr>
         <tr>
      <td>Testing</td>
      <td>
        <img alt="Jest" src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"/>      </td>
    </tr>
     <tr>
      <td>Workflow</td>
      <td>
        <img alt="Github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
        <img alt="Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?&style=for-the-badge&logo=Trello&logoColor=white"/>
        <img alt="Slack" src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"/>
        <img alt="Zoom" src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <td>Deployment</td>
      <td>
        <img alt="GitHub Actions" src="https://img.shields.io/badge/githubactions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white"/>
        <img alt="AWS" src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" />
      </td>
    </tr>
  </tbody>
</table>

<hr />

# Front End

## Login Page
  The site theme was inspired by a photo of a manta ray where sunlight hit the top of the water, and loses permeation of that sunlight as you descend deeper underwater. So, our palette consisted of a range of blues, from an almost white, light blue, to pure black with a touch of blue.

**Features:**

  * *Authentication*: OAuth sign in with Google built using Firebase
  * *Redirects*: Authentication checks to dynamically render and redirect to home page
  * *Never Lost*: Descriptive and Assertive page routing to lead users to accessible areas


## Chat
**Features:**

  * *Display Public Dive Log Photos*: renders feed of photos from public dive logs uploaded by users across the planet
  * *Filter By Search Bar*: Can enter search terms in a search bar to filter posts visible in the feed
  * *Filter By Image Tag*: Can click on a tag on an image to filter posts visible in the feed



## Navigation
**Features:**

  * *Display Public Dive Log Photos*: renders feed of photos from public dive logs uploaded by users across the planet
  * *Filter By Search Bar*: Can enter search terms in a search bar to filter posts visible in the feed
  * *Filter By Image Tag*: Can click on a tag on an image to filter posts visible in the feed


## Calendar
**Features:**

  * *Add New Modal*: Clicking whitespace opens a modal that links to the workout/meal planner for the day clicked on
  * *Events*: Event elements links to workout/meal planners. For shorter time blocks, mouse hover expands the box for readability.
  * *Mobile Display Calendar*: Simplified mobile layout for calendar



## Workout
**Features:**

  * Viewing an individual's workouts for the day
  ![](dist/images/Meals/Workout-Initial-Page.png)
    * When the user lands on this page, the user can see what workout sessions the trainer has assignmed him/her. The user can also add workouts and delete them.
    * When the user clicks on the 'info' button, it turns yellow to indicate which workout has been selected. The right side shows the individual workouts inside of the session.
    * The user can select which items to include by a check mark, or delete it entirely by selecting the X.
  ![](dist/images/Workout/Workout-All-Open.png)
    * Ideally, the trainer will have logged all the sessions for the user for a given day. However, the user can add sessions with the '+' button on the left-hand side.
    * On selecting this button, a form appears to enter the session name, and time range. When the user selects 'ADD', the session gets posted to the calendar, and immediately renders on the page without needing to refresh.
  ![](dist/images/Workout/Workout-Session-Form.png)
    * The individual items for each workout have a similar form that can be selected from the '+' button on the right hand side.
    * This allows the user to add individual items for a certain session, which is selected from the main workout's information.
    * When this form is submitted with the 'ADD' button, it too renders immediately on the page without need for refresh.
  ![](dist/images/Workout/Workout-Exercise-Form.png)


<hr />

## Meal
**Features:**
  * Viewing an individual day's meals
    * When the user lands on the meal-planning widget, the logged meals for the day are dynamically rendered with basic information, such as time of day and meal name.
  ![](dist/images/Meals/Meals-Initial-Page.png)
    * When the user clicks on the 'info' button, it turns yellow to indicate which meal has been selected. What appears to the right are the individual items that comprise the meal on the left-hand side.
    * The user can select which items to include by a check mark, or delete it entirely by selecting the X.
  ![](dist/images/Meals/Meals-All-Open.png)
    * Ideally, the trainer will have logged all meals for the user for a given day. However, the user can add meals with the '+' button on the left-hand side.
    * On selecting this button, a form appears to enter the meal name, and time range. When the user selects 'ADD', the meal gets posted to the calendar, and immediately renders on the page without needing to refresh.
  ![](dist/images/Meals/Meals-Meal-Form.png)
    * The individual items for each meal have a similar form that can be selected from the '+' button on the right hand side.
    * This allows the user to add individual items for a certain meal, which is selected from the main meal's information button.
    * When this form is submitted with the 'ADD' button, it too renders immediately on the page without need for refresh.
  ![](dist/images/Meals/Meals-Food-Form.png)


<hr />

## Journal
**Features:**

  * *Data Collection Fields*: combination of 31 different text fields, radio buttons, and checkboxes
  * *Add Tags*: ability to include tags to make logs and photos searchable
  * *Add Media*: ability to add photos with each dive log and share on the feed


<hr />

# Back End - API & Database

**Back End Features:**
  * *Database*: Designed schema in Postgres to store log users and log information, including dive photos and user-created tags, along with relevant meta data
  * *Integrity*: Used relational tables, foreign keys, and unique constraints to maintain data integrity
  * *API*: Created a serverless NextJS API to interact with database
  * *Docs*: Supplied the front-end team with documents explaining the data they can expect to receive and what url to request from for that data

<hr />

# Workflow
Our team used Agile workflow for this sprint.

## Trello
A Trello board was used to create and track tickets.  We held daily scrum meetings to discuss accomplishments, challenges, and upcoming tickets.  To effectively collaborate remotely while allowing for quick communication if needed, we utilized Discord, Slack, and Zoom.

## Version Control
We implemented Git Feature Branch Workflow.  All pull requests in Github were reviewed by another team member before being merged into the main branch.

<hr />

# Development and Deployment

## AWS


# Challenges and Learning

