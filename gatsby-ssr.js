import React from "react";
export function onRenderBody(
  { setPostBodyComponents }) {
    setPostBodyComponents([
     <div id="webchat"/>,
     <script
        type="text/javascript"
        src="https://storage.googleapis.com/mrbot-cdn/webchat-latest.js"
      />,
     <script
     dangerouslySetInnerHTML={{
        __html:`
        WebChat.default.init({
            selector: "#webchat",
            initPayload: "/help",
            customData: {"language": "en"}, // arbitrary custom data. Stay minimal as this will be added to the socket
            socketUrl: "https://woz.thenerdypython.com",
            socketPath: "/socket.io/",
            title: "Nerdy Chat",
          })
   	 `
     }}
     />,
]);
}