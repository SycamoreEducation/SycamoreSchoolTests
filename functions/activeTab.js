exports.command = function(tab) {
    this
        .assert.visible('.active')
        .assert.containsText('.active', tab)
    return this;
};
