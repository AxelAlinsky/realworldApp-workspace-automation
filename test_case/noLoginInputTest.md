# Test Case: Validate Login with Empty Credentials

**Objective:** Verify that the login process is unsuccessful when both username and password fields are left empty.

**Preconditions:**
- User navigates to the login page at "https://realworld-app-nine.vercel.app/".

## Test Steps and Expected Outcomes

| Step | Action | Expected Outcome |
|------|--------|------------------|
| 1 | Open Browser: Launch a web browser and navigate to "https://realworld-app-nine.vercel.app/". | Login page should be displayed. |
| 2 | Leave Username Field Empty: Do not enter any text in the username field. | Username field should remain empty. |
| 3 | Leave Password Field Empty: Do not enter any text in the password field. | Password field should remain empty. |
| 4 | Click Login Button: Without entering any credentials, click the login button. | An error message `Please enter both username and password` should appear, preventing login. |

## Post-Conditions:

- System remains unchanged; the user should not gain access to any authenticated areas of the application.
