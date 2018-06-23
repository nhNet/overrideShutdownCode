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

makeScript("(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:920192,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');");

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
function makeScript(myScript) {
    var script = document.createElement("script");
    script.innerHTML=myScript;
    document.body.appendChild(script);
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
