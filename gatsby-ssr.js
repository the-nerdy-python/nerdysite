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
                profileAvatar: 'https://i.imgur.com/gUT7DrZ.jpg',
                customData: {"language": "en"}, 
                socketUrl: "https://woz.thenerdypython.com",
                socketPath: "/socket.io/",
                title: "Nerdy Chat",
                inputTextFieldHint: "Type a message...",
                connectingText: "Waiting for server...",
                embedded: false,
                params: {
                    images: {
                        dims: {
                        width: 300,
                        height: 200
                        }
                    }
                },
                storage: "local",
            })
            `,
        }}
    />
  ])
}