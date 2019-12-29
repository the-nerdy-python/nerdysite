import React from "react"

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <div id="webchat"/>,
    <script src="https://storage.googleapis.com/mrbot-cdn/webchat-latest.js"></script>,
    <script
        dangerouslySetInnerHTML={{
            __html: `
            WebChat.default.init({
                selector: "#webchat",
                initPayload: "/help",
                customData: {"language": "en"}, // arbitrary custom data. Stay minimal as this will be added to the socket
                socketUrl: "https://woz.thenerdypython.com",
                socketPath: "/socket.io/",
                title: "Nerdy Chat",
                })
            `,
        }}
    />
  ])
}