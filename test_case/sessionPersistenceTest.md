# Test Case: Validate Session Persistence After Reopening Browser Tab

**Objective:** Verify that a user remains logged in after closing and reopening a browser tab following a successful login.

**Preconditions:**
- User has valid login credentials for "https://realworld-app-nine.vercel.app/".

## Test Steps and Expected Outcomes

| Step | Action | Expected Outcome |
|------|--------|------------------|
| 1 | Open Browser: Launch a web browser and navigate to "https://realworld-app-nine.vercel.app/". | Login page should be displayed. |
| 2 | Enter Credentials: Input valid username and password into the respective fields. | Username and password should be entered successfully. |
| 3 | Click Login: Press the login button to initiate the login process. | User should be successfully logged in and redirected to the homepage or user dashboard. |
| 4 | Close Tab: Close the current browser tab without logging out. | Browser tab should close successfully. |
| 5 | Open New Tab: Open a new browser tab and navigate to "https://realworld-app-nine.vercel.app/". | New browser tab should open. |
| 6 | Check Login Status: Observe if the user is still logged in on the website. | The user should be automatically logged in, showing the homepage or user dashboard without prompting for login credentials again. |

## Post-Conditions:

- The user remains logged in across browser sessions, indicating successful session persistence.
