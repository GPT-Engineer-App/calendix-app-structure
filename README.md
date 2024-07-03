# calendix-app-structure

Set up the project structure:


Create a src folder inside the project folder.
Inside the src folder, create the following subfolders:

components: Contains reusable React components.

Header: Navbar component with CalendIX logo and navigation menu.
Footer: Footer component with copyright information and links.
CalendarImport: Component for importing events from multiple calendar providers.
LifestyleQuestions: Component for asking lifestyle questions.
ImportantDates: Component for adding and managing important dates.
PlannerView: Component for displaying the main planner interface.
AIAssistant: Component for the AI assistant interaction.


pages: Contains individual page components.

LandingPage: Hero component with introduction and "Sign Up" button.
RegistrationPage: Registration form with input fields and "Create Account" button.
VerificationPage: Alert component for displaying verification email notification.
LifestylePromptPage: Page with lifestyle questions and summary confirmation.
CalendarImportPage: Page for importing calendar events from multiple providers.
ImportantDatesPage: Page for adding and managing important dates.
PlannerPage: Page with the main planner interface and AI assistant.


styles: Contains CSS or Sass files for styling.
utils: Contains utility functions or helpers.
models: Contains data models and schemas.

User: User data model with fields for name, email, password, and lifestyle details.
Event: Event data model with fields for title, date, time, and description.
ImportantDate: Important date data model with fields for date and description.


controllers: Contains controller functions for handling business logic.

UserController: Controller for user registration, login, and profile management.
EventController: Controller for creating, reading, updating, and deleting events.
ImportantDateController: Controller for creating, reading, updating, and deleting important dates.


services: Contains services for external integrations (e.g., Supabase, Google Calendar).

SupabaseService: Service for interacting with Supabase database and authentication.
GoogleCalendarService: Service for integrating with Google Calendar API.
OutlookCalendarService: Service for integrating with Outlook Calendar API.
AppleCalendarService: Service for integrating with Apple Calendar API.




Create an index.html file in the project root and add the necessary HTML structure.
Create an index.js file inside the src folder and set up the React application entry point.


Develop the frontend components:

LandingPage:

Use the Hero component from Daisy UI to display a welcome message and introduction to CalendIX.
Include a prominent "Sign Up" button that navigates to the registration page.


RegistrationPage:

Use Input components from Daisy UI for name, email, password, and password confirmation fields.
Include a "Create Account" button that submits the form data to the backend.


VerificationPage:

Use the Alert component from Daisy UI to display a notification about the verification email.


LifestylePromptPage:

Use the LifestyleQuestions component to ask a series of questions about the user's lifestyle.
Display a summary of the user's lifestyle details using the Card component from Daisy UI.
Include an option to edit or confirm the details.


CalendarImportPage:

Use the CalendarImport component to allow users to import events from multiple calendar providers (Google Calendar, Outlook Calendar, Apple Calendar).
Display a list of connected calendar providers using the Dropdown component from Daisy UI.
Use the Checkbox component from Daisy UI to allow users to select which calendars to import.


ImportantDatesPage:

Use the ImportantDates component to allow users to add and manage important dates.
Display a form with date and description fields using the Input and Textarea components from Daisy UI.
Use the Table component from Daisy UI to display an overview of added important dates.


PlannerPage:

Use the PlannerView component to display the main yearly planner interface.
Implement a calendar grid using the Table component from Daisy UI.
Allow users to navigate through months, weeks, and days using the Pagination component from Daisy UI.
Display event highlights and important dates using the Badge component from Daisy UI.
Use the Drawer component from Daisy UI to display the AIAssistant component for tips and recommendations.


Header:

Use the Navbar component from Daisy UI to create a responsive navigation bar.
Include the CalendIX logo and navigation menu items.


Footer:

Use the Footer component from Daisy UI to display copyright information and relevant links.




Set up Supabase backend:

Sign up for a Supabase account and create a new project.
Set up the necessary database tables for users, events, important dates, and user lifestyle data using Supabase's web interface or SQL editor.

users table: Fields for user ID, name, email, password (hashed), and lifestyle details.
events table: Fields for event ID, user ID (foreign key), title, date, time, and description.
important_dates table: Fields for date ID, user ID (foreign key), date, and description.


Configure the authentication settings in Supabase to enable OAuth authentication with the desired providers (e.g., Google, Facebook).
Obtain the Supabase project URL and API key for integration.


Implement authentication using Supabase OAuth:

Install the Supabase JavaScript client library in your project:
Copynpm install @supabase/supabase-js

Create an authentication service (SupabaseAuthService) in the services folder to handle Supabase OAuth integration.
Implement login and logout functionality using Supabase's OAuth authentication methods.
Store user authentication tokens securely using Supabase's built-in session management.


Develop the backend controllers and models:

Create controller functions in the controllers folder for handling business logic.

UserController:

register: Create a new user account with the provided details.
login: Authenticate user credentials and generate an access token.
updateLifestyle: Update the user's lifestyle details.


EventController:

createEvent: Create a new event with the provided details.
getEvents: Retrieve a list of events for the authenticated user.
updateEvent: Update an existing event.
deleteEvent: Delete an event.


ImportantDateController:

createImportantDate: Create a new important date with the provided details.
getImportantDates: Retrieve a list of important dates for the authenticated user.
updateImportantDate: Update an existing important date.
deleteImportantDate: Delete an important date.




Define data models and schemas in the models folder for users, events, and important dates.

User model:

Fields: id, name, email, password (hashed), lifestyleDetails.
Methods: hashPassword, comparePassword.


Event model:

Fields: id, userId, title, date, time, description.
Methods: isOwnedByUser.


ImportantDate model:

Fields: id, userId, date, description.
Methods: isOwnedByUser.




Implement CRUD operations in the controllers for interacting with the data models using Supabase's realtime database API.


Integrate with Google Calendar:

Use the Google Calendar API or a library like react-google-calendar-api to integrate with Google Calendar.
Create a GoogleCalendarService in the services folder to handle calendar-related operations.

getEvents: Fetch the user's calendar events from Google Calendar.
createEvent: Create a new event in the user's Google Calendar.
updateEvent: Update an existing event in the user's Google Calendar.
deleteEvent: Delete an event from the user's Google Calendar.


Implement the OAuth flow for user authorization and obtain access tokens.
Store the user's Google Calendar access token securely in Supabase's database.
Fetch the user's calendar events from Google Calendar and store them in Supabase's database.


Implement notifications and reminders:

Utilize Supabase's real-time subscriptions or database triggers to send notifications and reminders.
Create a notification service (NotificationService) in the services folder to handle sending notifications and reminders.

sendEmailNotification: Send an email notification using a third-party email service provider.
sendPushNotification: Send a push notification to the user's device.


Integrate with a notification service provider (e.g., SendGrid, Mailgun) for sending email notifications.
Trigger notifications for upcoming events, important dates, and reminders based on the user's preferences stored in Supabase's database.
Allow users to customize their notification preferences using the Select and Checkbox components from Daisy UI.



This detailed plan covers the development of the CalendIX application using the specified technology stack (Vite, React, Daisy UI, JavaScript) and integrating with Supabase for authentication and backend. The frontend components are structured based on the provided storyboards and utilize various Daisy UI components for a consistent and visually appealing user interface.
The backend controllers handle the business logic and interact with the data models using Supabase's realtime database API. Integration with Google Calendar is included to allow users to import and sync their calendar events.
Notifications and reminders are implemented using Supabase's real-time subscriptions or database triggers, and a third-party email service provider is used for sending email notifications.
Remember to handle error scenarios gracefully, implement loading states, and ensure a smooth user experience throughout the application. Additionally, make sure to follow security best practices and protect sensitive user data.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with Daisy UI and Tailwind CSS.

- Vite
- React
- Daisy UI
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/calendix-app-structure.git
cd calendix-app-structure
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
