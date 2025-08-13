"use client";

import { useEffect, useRef } from "react";

export default function ChatBot() {
  const initialized = useRef(false);
  const cleanupRefs = useRef<{
    styleLink?: HTMLLinkElement;
    customStyles?: HTMLStyleElement;
  }>({});

  useEffect(() => {
    // Prevent multiple initializations
    if (initialized.current) return;

    const initializeChat = () => {
      try {
        // Load CSS first
        const styleLink = document.createElement("link");
        styleLink.href =
          "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
        styleLink.rel = "stylesheet";
        styleLink.type = "text/css";
        document.head.appendChild(styleLink);
        cleanupRefs.current.styleLink = styleLink;

        // Apply custom theme styles
        const customStyles = document.createElement("style");
        customStyles.textContent = `
          /* Doorways theme for n8n chat */
          :root {
            --chat--color-primary: #9333ea;
            --chat--color-primary-shade-50: #8b5cf6;
            --chat--color-primary-shade-100: #7c3aed;
            --chat--color-secondary: #a855f7;
            --chat--color-white: #ffffff;
            --chat--color-light: #f8fafc;
            --chat--color-light-shade-50: #f1f5f9;
            --chat--color-light-shade-100: #e2e8f0;
            --chat--color-medium: #94a3b8;
            --chat--color-dark: #1e293b;
            --chat--color-disabled: #64748b;
            --chat--color-typing: #6366f1;

            --chat--spacing: 1rem;
            --chat--border-radius: 12px;
            --chat--transition-duration: 0.2s;

            --chat--window--width: 400px;
            --chat--window--height: 600px;

            --chat--header--background: linear-gradient(135deg, #9333ea, #a855f7);
            --chat--header--color: #ffffff;
            --chat--header--padding: 1.25rem;

            --chat--message--bot--background: linear-gradient(135deg, #9333ea, #a855f7);
            --chat--message--bot--color: #ffffff;
            --chat--message--bot--border-radius: 18px 18px 18px 4px;

            --chat--message--user--background: #f1f5f9;
            --chat--message--user--color: #374151;
            --chat--message--user--border: 1px solid #e2e8f0;
            --chat--message--user--border-radius: 18px 18px 4px 18px;

            --chat--toggle--background: linear-gradient(135deg, #9333ea, #a855f7);
            --chat--toggle--hover--background: linear-gradient(135deg, #7c3aed, #9333ea);
            --chat--toggle--size: 60px;
          }

          /* Enhanced UI styling */
          .n8n-chat .chat-input {
            border: 2px solid var(--chat--color-primary) !important;
            border-radius: 24px !important;
            padding: 12px 20px !important;
            font-size: 14px !important;
            transition: all var(--chat--transition-duration) ease !important;
            background: var(--chat--color-white) !important;
          }

          .n8n-chat .chat-input:focus {
            outline: none !important;
            border-color: var(--chat--color-primary-shade-100) !important;
            box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1) !important;
          }

          .n8n-chat .chat-send-button {
            background: var(--chat--toggle--background) !important;
            border: none !important;
            border-radius: 50% !important;
            width: 40px !important;
            height: 40px !important;
            color: white !important;
            transition: all var(--chat--transition-duration) ease !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .n8n-chat .chat-send-button:hover {
            transform: scale(1.05) !important;
            box-shadow: 0 4px 12px rgba(147, 51, 234, 0.4) !important;
          }

          .n8n-chat .chat-toggle {
            box-shadow: 0 4px 16px rgba(147, 51, 234, 0.3) !important;
            transition: all 0.3s ease !important;
            bottom: 24px !important;
            right: 24px !important;
            border: none !important;
          }

          .n8n-chat .chat-toggle:hover {
            transform: scale(1.1) !important;
            box-shadow: 0 6px 20px rgba(147, 51, 234, 0.4) !important;
          }

          .n8n-chat .chat-window {
            bottom: 100px !important;
            right: 24px !important;
            border-radius: var(--chat--border-radius) !important;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15) !important;
            border: 1px solid var(--chat--color-light-shade-100) !important;
            overflow: hidden !important;
          }

          /* Header styling */
          .n8n-chat .chat-header {
            background: var(--chat--header--background) !important;
            color: var(--chat--header--color) !important;
            border-radius: 12px 12px 0 0 !important;
            padding: 16px 20px !important;
            font-weight: 600 !important;
          }

          /* Message styling */
          .n8n-chat .chat-message-from-bot {
            background: var(--chat--message--bot--background) !important;
            color: var(--chat--message--bot--color) !important;
            border-radius: var(--chat--message--bot--border-radius) !important;
            box-shadow: 0 2px 8px rgba(147, 51, 234, 0.2) !important;
          }

          .n8n-chat .chat-message-from-user {
            background: var(--chat--message--user--background) !important;
            color: var(--chat--message--user--color) !important;
            border-radius: var(--chat--message--user--border-radius) !important;
            border: var(--chat--message--user--border) !important;
          }

          /* Scrollbar styling */
          .n8n-chat .chat-messages::-webkit-scrollbar {
            width: 6px !important;
          }

          .n8n-chat .chat-messages::-webkit-scrollbar-track {
            background: var(--chat--color-light) !important;
          }

          .n8n-chat .chat-messages::-webkit-scrollbar-thumb {
            background: var(--chat--color-primary) !important;
            border-radius: 3px !important;
          }

          .n8n-chat .chat-messages::-webkit-scrollbar-thumb:hover {
            background: var(--chat--color-primary-shade-100) !important;
          }

          /* Welcome message styling */
          .n8n-chat .welcome-message {
            background: linear-gradient(135deg, #f3e8ff, #e9d5ff) !important;
            border: 1px solid #d8b4fe !important;
            border-radius: var(--chat--border-radius) !important;
            color: #581c87 !important;
            padding: 16px !important;
            margin-bottom: 16px !important;
          }

          /* Typing indicator */
          .n8n-chat .typing-indicator {
            color: var(--chat--color-typing) !important;
          }

          /* Loading animation */
          .n8n-chat .chat-loading {
            color: var(--chat--color-primary) !important;
          }
        `;

        document.head.appendChild(customStyles);
        cleanupRefs.current.customStyles = customStyles;

        // Wait for CSS to load, then initialize chat
        styleLink.onload = () => {
          initializeChatWidget();
        };

        // Fallback in case onload doesn't fire
        setTimeout(() => {
          if (!initialized.current) {
            initializeChatWidget();
          }
        }, 2000);
      } catch (error) {
        console.error("Failed to load chat styles:", error);
        showFallbackMessage();
      }
    };

    const initializeChatWidget = () => {
      try {
        // Create and load the chat script
        const script = document.createElement("script");
        script.type = "module";
        script.innerHTML = `
          (async () => {
            try {
              const { createChat } = await import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js');

              createChat({
                webhookUrl: 'https://65db1bfee181.ngrok-free.app/webhook/a889d2ae-2159-402f-b326-5f61e90f602e/chat',
                target: '#n8n-chat',
                mode: 'window',
                loadPreviousSession: true,
                showWelcomeScreen: true,
                enableStreaming: false,
                defaultLanguage: 'en',
                chatInputKey: 'chatInput',
                chatSessionKey: 'sessionId',
                allowFileUploads: false,
                metadata: {
                  source: 'doorways-website',
                  version: '1.0.0',
                  timestamp: new Date().toISOString()
                },
                i18n: {
                  en: {
                    title: 'Doorways Assistant 👋',
                    subtitle: 'I\\'m here to help you learn about our entrepreneurship training programs.',
                    footer: 'Powered by Doorways',
                    getStarted: 'Start Conversation',
                    inputPlaceholder: 'Ask us about our training programs...',
                  },
                },
                initialMessages: [
                  'Hello! 👋',
                  'I\\'m here to help you learn about our entrepreneurship training programs. How can I assist you today?'
                ],
                webhookConfig: {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true'
                  }
                }
              });

              console.log('n8n chat initialized successfully');
            } catch (chatError) {
              console.error('Failed to initialize chat:', chatError);
              document.getElementById('n8n-chat-fallback')?.remove();
              document.getElementById('n8n-chat').innerHTML = \`
                <div id="n8n-chat-fallback" style="
                  position: fixed;
                  bottom: 24px;
                  right: 24px;
                  background: linear-gradient(135deg, #9333ea, #a855f7);
                  color: white;
                  padding: 12px 16px;
                  border-radius: 8px;
                  font-size: 14px;
                  box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
                  z-index: 50;
                  cursor: pointer;
                  transition: all 0.2s ease;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                  💬 Chat (Click to reload)
                </div>
              \`;

              document.getElementById('n8n-chat-fallback').onclick = () => {
                window.location.reload();
              };
            }
          })();
        `;

        document.head.appendChild(script);
        initialized.current = true;
      } catch (error) {
        console.error("Failed to create chat script:", error);
        showFallbackMessage();
      }
    };

    const showFallbackMessage = () => {
      const chatContainer = document.getElementById("n8n-chat");
      if (chatContainer) {
        chatContainer.innerHTML = `
          <div style="
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: linear-gradient(135deg, #9333ea, #a855f7);
            color: white;
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 14px;
            box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
            z-index: 50;
            cursor: pointer;
          " onclick="window.location.reload()">
            💬 Chat (Click to reload)
          </div>
        `;
      }
    };

    // Initialize with small delay for DOM readiness
    const timeoutId = setTimeout(initializeChat, 500);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);

      // Clean up DOM elements
      if (cleanupRefs.current.styleLink) {
        cleanupRefs.current.styleLink.remove();
      }
      if (cleanupRefs.current.customStyles) {
        cleanupRefs.current.customStyles.remove();
      }

      // Reset initialization flag
      initialized.current = false;
    };
  }, []);

  return (
    <div
      id="n8n-chat"
      className="fixed bottom-6 right-6 z-50"
      role="complementary"
      aria-label="Chat assistant"
    />
  );
}
