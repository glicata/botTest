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
({appId: '7bdf415a-3560-4188-b738-e9c841225830', appPassword: 'OMeA0ytUZ6td2Fshe0cfbps'});

var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

// create bot dialogs

bot.dialog('/' function (session){
	session.send("Hello World");
	
});

