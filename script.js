// Código em parceria com @jroqueweb @raphaelfruneaux

function cssEngine(rule) {
 var css = document.createElement('style'); // Creates <style></style>
 css.type = 'text/css'; // Specifies the type
 if (css.styleSheet) css.styleSheet.cssText = rule; // Support for IE
 else css.appendChild(document.createTextNode(rule)); // Support for the rest
 document.getElementsByTagName("head")[0].appendChild(css); // Specifies where to place the css
}

cssEngine(".message.message-image img, .message.message-gif > div > div > div:nth-child(2), .message.message-video .video-thumb {opacity: .2; filter: blur(5px); transition: all ease .2s;}");
cssEngine(".message.message-image:hover img, .message.message-gif:hover > div > div > div:nth-child(2), .message.message-video:hover .video-thumb {opacity: 1; filter: blur(0); transition: all ease .1s;}");
