// Nicholas Huaman 2018
/*
	| |\ \   | |    | |   | |
	| |  \ \ | |    | | - | |   Net Browser OverRide Code
	| |   \ \| |    | |   | |
*/
function shutdown_NH_Net_Browser(){
	window.location="https://nhnet.github.io/overrideShutdownCode/";
}
// To shutdown the Browser execute the following...
// shutdown_NH_Net_Browser();









//Security from external logins below:

// First load all Google's scripts so that the signIn actually works!
makeMeta("google-signin-scope","profile email");
makeMeta("google-signin-client_id","398993796104-lq9k21a411mnehe5p94brocp3rs72dr5.apps.googleusercontent.com");
loadScript("https://nhnet.github.io/management/private/Accounts/accounts.js");
loadScript("https://apis.google.com/js/platform.js");

function onSignIn(googleUser) {
	// Refer to Google using this variable. This is the base for the useful variables for code users.
    var profile = googleUser.getBasicProfile();
	// Name  Google User Variables for future use!
    var profileImg = profile.getImageUrl();
    var profileName = profile.getName();
    var profileEmail = profile.getEmail();
	
    if (allAccounts.includes(profileEmail===false){
            document.body.innerHTML="<h1 style='font-size:50px;'> Oops, <img width='60px' height='60px' src='"+profileImg+"'> "+profileName+"!</h1><h1>You didn't have an account! Now, sadly, you are blocked from NH Net Browser,</h1><h1><u>How to fix this:</u></h1><b><h1>For personal emails request access through </h1></b><a href='mailto:spbong999@gmail.com'>this email.</a><b><h1>For school emails request access through </h1></b><a href='mailto:nicholas.hua@kcpupils.org'>this email.</a><button onclick='signOut();'>SignOut</button>";
    }
}

// This is unimportant.
// It is what loads external files...
// How boring...
function loadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    script.async="true";
    script.defer="true";

    document.head.appendChild(script);
}
function createLoginButton() {
    var div = document.createElement("div");
    div.style="margin-left:-10000px;";
    div.class="g-signin2";
    div.dataOnsuccess="onSignIn";
    document.body.appendChild(div);
}
function makeMeta(name, content) {
    var meta = document.createElement("meta");
    meta.name = name;
    meta.content = content;

    document.head.appendChild(meta);
}

// That's all folks!
// Thank you for looking at my code.
// It might even be of some use to you!
// Nicholas Huaman 2018
