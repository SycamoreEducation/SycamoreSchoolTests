module.exports = {
    url: function() {

        return this.api.launch_url;
    },
    elements: {
        schoolField: 'input[name=entered_schid]',
        usernameField: 'input[name=entered_login]',
        passwordField: 'input[name=entered_password]',
        loginButton: 'div.loginLoginButtonDiv',
        toast: '#toast-container'
    }
};
