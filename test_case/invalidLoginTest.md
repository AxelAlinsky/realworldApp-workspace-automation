# Test Case: Validate Unsuccessful Login

**Objective:** Ensure that users cannot log in with invalid credentials.

**Preconditions:**
- The user is at the login page with access to the input fields for username and password.

## Test Procedure and Expected Results

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open the Browser: Launch the browser and navigate to "https://realworld-app-nine.vercel.app/". | The login page of "https://realworld-app-nine.vercel.app/" should be displayed. |
| 2 | Enter Invalid Username: Locate the username input field and enter an invalid username like `invalid`. | The invalid username `invalid` should be entered into the username field. |
| 3 | Enter Invalid Password: Locate the password input field and enter an invalid password like `invalid`. | The invalid password `invalid` should be entered into the password field. | 
| 4 | Initiate Login: Locate the login button and click it. | The login should fail. The user should remain on the login page, possibly with an error message indicating invalid login credentials. |

## Post-Conditions:

- No changes should be made to the system state, as the login should not be successful.
