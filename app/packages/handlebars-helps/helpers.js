if (typeof Handlebars !== 'undefined') {
    Handlebars.registerHelper('log', function (data) { // Deprecating
      console.log(data);
    });

    Handlebars.registerHelper('momentDate', function (date) {
        return moment(date).fromNow();
    });
}