import Chance from 'chance';

const chance = new Chance();

export enum pageUrl {
    realworld = 'https://realworld-app-nine.vercel.app/',
    realworldDhashboard = "https://realworld-app-nine.vercel.app/dashboard",
    realWrodlRegister = "https://realworld-app-nine.vercel.app/register",
}

export const UserCredentials = {
    standardUser: {
        username: 'test',
        password: 'test',
    },
    invalidUser: {
        username: 'invalid',
        password: 'invalid',
    },
    randomUser: {
        // Use a combination of first and last name for a username, or a random string
        username: chance.first() + chance.last(),
        // Generate a random password string
        password: chance.string({ length: 8 }),
        // Generate a random email
        email: chance.email(),
    }
};

export const ErrorMsg = {
    noCredentialInput: `Please enter both username and password`,
    invalidCredential: `Invalid credentials`,

};