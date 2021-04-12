export function validateLoginForm(email, password) {
    if (email.length === 0) {
        throw new Error('login.noEmail');
    }
    if (password.length === 0) {
        throw new Error('login.noPassword');
    }
    return true;
}
