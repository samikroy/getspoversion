'use strict';
(function () {

    // This code runs when the DOM is ready and creates a context object which is 
    // needed to use the SharePoint object model
    $(document).ready(function () {
	 sharePointReady();
    });

    
var clientContext;
var serverVersion;

function sharePointReady() {
	// Create an instance of the current context.
    clientContext = SP.ClientContext.get_current();
    clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);
}
function onRequestSucceeded() {
    //here you get the version
serverVersion = clientContext.get_serverVersion();
console.log(serverVersion);
$('#message').text(serverVersion);
//here you print the version
$('#spversion').text(serverVersion);
}
function onRequestFailed() {
    
$('#spversion').text(serverVersion);
}

})();