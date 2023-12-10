# Test Case: Validate New User Registration and Automatic Login

## Objective:
To verify that a new user can successfully register and is automatically logged in after registration.

## Preconditions:
- The user is on the registration page of "https://realworld-app-nine.vercel.app/".

## Test Steps and Expected Outcomes

| Step | Action | Expected Outcome |
|------|--------|------------------|
| 1 | Open Browser: Navigate to the registration page of the site. | Registration page should be displayed. |
| 2 | Enter Registration Details: Fill in all necessary fields (username, email, password) with valid information. | Registration details should be entered correctly. |
| 3 | Submit Registration: Click the registration/submit button. | Registration should be successful, and the user should be redirected to a post-registration page (dashboard or profile). |
| 4 | Verify Automatic Login: Confirm that the user is logged in without requiring manual login post-registration. | The user should be logged in automatically, indicated by the presence of user-specific elements on the page (like a user profile icon or a logout button). |

## Post-Conditions:
- A new user account is created and the user is logged in automatically.
