# Test Case: Validate Logout Across Multiple Tabs

**Objective:** To verify that logging out from one tab logs the user out in all other open tabs upon refresh.

**Preconditions:**
- User has valid login credentials for "https://realworld-app-nine.vercel.app/".
- The application should be capable of handling sessions across multiple tabs.

## Test Steps and Expected Outcomes

| Step | Action | Expected Outcome |
|------|--------|------------------|
| 1 | Open Browser: Launch a web browser and navigate to "https://realworld-app-nine.vercel.app/". | Login page should be displayed. |
| 2 | Enter Credentials: Input valid username and password into the respective fields and login. | User should be successfully logged in and redirected to the dashboard. |
| 3 | Open New Tab: In the same browser, open a new tab and navigate to "https://realworld-app-nine.vercel.app/". | New tab should open with the user still logged in, showing the dashboard or a similar authenticated page. |
| 4 | Logout in New Tab: Perform a logout action in the new tab. | User should be logged out in the new tab, typically redirected to the login page. |
| 5 | Switch to Original Tab: Return to the first tab without refreshing. | The original tab should still display the dashboard or authenticated page. |
| 6 | Refresh Original Tab: Refresh the original tab. | The page should update to reflect the logout action, redirecting the user to the login page or indicating they are no longer logged in. |

## Post-Conditions:

- The user's session should be terminated across all tabs, maintaining consistent session status across the application.
