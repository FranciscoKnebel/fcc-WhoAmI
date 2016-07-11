var useragent = require("useragent");

module.exports = function(app) {
    
    app.get('/', function(req, res) {
        var ip = req.headers['x-forwarded-for'] 
        var language = req.headers["accept-language"].split(',')[0];
        var os = useragent.parse(req.headers['user-agent']).os.toString() ||
        req.headers['user-agent'].split(') ')[0].split(' (')[1];
       
        var information = {
            ip: ip,
            language: language,
            os: os
        };
        
        res.contentType('application/json');
        res.send(information);
    });
};
