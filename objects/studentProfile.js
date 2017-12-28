module.exports = {
  url: function() {
    return this.api.launchUrl + '/students.php';
  },
  elements: {
    searchBar: {
        selector: 'div#ccdiv'
    }
  }
};
