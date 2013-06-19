
var Main1 = function () {
    this.index = function (req, resp, params) {
        this.respond(params, {
            format: 'html'
            , template: 'app/views/main/index'
        });
    };
};

exports.Main = Main1;

