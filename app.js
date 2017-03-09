// add the requirements

var restify = require('restify')
var builder = require('botbuilder');

// setup restify server

var server = restify.createServer();
server.listen(process.env.PORT || 3000, function()
{
	console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot

var connector = new builder.ChatConnector
({ appId: '04b36580-41da-413d-8397-5f263d46dbcf', appPassword: 'Cw7461gt65Dvb4tjJOnKS8u' });

var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

// create bot dialogs

bot.dialog('/' function (session){
	session.send("Hello World");
	
});

