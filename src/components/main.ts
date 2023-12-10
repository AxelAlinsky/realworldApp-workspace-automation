export class Main {

    // Login Page Selectors
    get userNameInput() {return '[placeholder="Username"]';}
    get userPassInput() {return '[placeholder="Password"]';}
    get loginButton() {return '[data-testid="login-button"]';}

    // Logout Selectors
    get logoutButton() {return '[data-testid="logout-button"]';}

    // Register Page Selectors
    get registerLink() {return '[data-testid="register-link"]';}
    get userRegInput() {return '[data-testid="register-username-input"]';}
    get emailRegInput() {return '[data-testid="register-email-input"]';}
    get passRegInput() {return '[data-testid="register-password-input"]';}
    get submitRegButton() {return '[data-testid="register-button"]';}
    

    get errorMsg() {return '[data-testid="error-message"]';}
   
}