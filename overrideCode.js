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
//shutdown_NH_Net_Browser();

makeScript('<script type="text/javascript"> window._mfq = window._mfq || []; (function() { var mf = document.createElement("script"); mf.type = "text/javascript"; mf.async = true; mf.src = "//cdn.mouseflow.com/projects/e16909d6-15ae-47a9-83a1-958c353d6520.js"; document.getElementsByTagName("head")[0].appendChild(mf); })(); </script>');

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
