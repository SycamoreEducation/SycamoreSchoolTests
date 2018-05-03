module.exports = {
    url: function() {

        return this.api.launch_url + '/index.php?schoolid=1';
    },
    elements: {
        usernameField: 'input[name=entered_login]',
        passwordField: 'input[name=entered_password]',
        loginButton: 'div.loginLoginButtonDiv',
        toast: '#toast-container'
    }
};
