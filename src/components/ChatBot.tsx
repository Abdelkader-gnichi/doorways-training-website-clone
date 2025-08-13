'use client';

import { useEffect } from 'react';

export default function ChatBot() {
  useEffect(() => {
    // Load the n8n chat styles
    const styleLink = document.createElement('link');
    styleLink.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    styleLink.rel = 'stylesheet';
    document.head.appendChild(styleLink);

    // Custom styles to match the website theme
    const customStyles = document.createElement('style');
    customStyles.textContent = `
      /* Customize n8n chat to match Doorways theme */
      .n8n-chat {
        --chat-color-primary: #9333ea !important; /* Purple-600 */
        --chat-color-primary-shade-50: #f3e8ff !important; /* Purple-50 */
        --chat-color-primary-shade-100: #e9d5ff !important; /* Purple-100 */
        --chat-color-secondary: #d8aaf2 !important; /* Light purple */
        --chat-color-white: #ffffff !important;
        --chat-color-light-gray: #f3f4f6 !important;
        --chat-color-medium-gray: #6b7280 !important;
        --chat-color-dark-gray: #374151 !important;
        --chat-border-radius: 12px !important;
        --chat-window-width: 400px !important;
        --chat-window-height: 600px !important;
      }

      /* Chat bubble styling */
      .n8n-chat .chat-message-from-bot {
        background: linear-gradient(135deg, #9333ea, #a855f7) !important;
        border-radius: 18px 18px 18px 4px !important;
        color: white !important;
        box-shadow: 0 2px 8px rgba(147, 51, 234, 0.2) !important;
      }

      .n8n-chat .chat-message-from-user {
        background: #f3f4f6 !important;
        border-radius: 18px 18px 4px 18px !important;
        color: #374151 !important;
        border: 1px solid #e5e7eb !important;
      }

      /* Chat input styling */
      .n8n-chat .chat-input {
        border: 2px solid #9333ea !important;
        border-radius: 24px !important;
        padding: 12px 20px !important;
        font-size: 14px !important;
      }

      .n8n-chat .chat-input:focus {
        outline: none !important;
        border-color: #7c3aed !important;
        box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1) !important;
      }

      /* Send button styling */
      .n8n-chat .chat-send-button {
        background: linear-gradient(135deg, #9333ea, #a855f7) !important;
        border: none !important;
        border-radius: 50% !important;
        width: 40px !important;
        height: 40px !important;
        color: white !important;
        box-shadow: 0 2px 8px rgba(147, 51, 234, 0.3) !important;
        transition: all 0.2s ease !important;
      }

      .n8n-chat .chat-send-button:hover {
        transform: scale(1.05) !important;
        box-shadow: 0 4px 12px rgba(147, 51, 234, 0.4) !important;
      }

      /* Chat header styling */
      .n8n-chat .chat-header {
        background: linear-gradient(135deg, #9333ea, #a855f7) !important;
        color: white !important;
        border-radius: 12px 12px 0 0 !important;
        padding: 16px 20px !important;
        font-weight: 600 !important;
      }

      /* Chat toggle button styling */
      .n8n-chat .chat-toggle {
        background: linear-gradient(135deg, #9333ea, #a855f7) !important;
        border: none !important;
        border-radius: 50% !important;
        width: 60px !important;
        height: 60px !important;
        color: white !important;
        box-shadow: 0 4px 16px rgba(147, 51, 234, 0.3) !important;
        transition: all 0.3s ease !important;
        bottom: 24px !important;
        right: 24px !important;
      }

      .n8n-chat .chat-toggle:hover {
        transform: scale(1.1) !important;
        box-shadow: 0 6px 20px rgba(147, 51, 234, 0.4) !important;
      }

      /* Chat window positioning and styling */
      .n8n-chat .chat-window {
        bottom: 100px !important;
        right: 24px !important;
        border-radius: 12px !important;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15) !important;
        border: 1px solid #e5e7eb !important;
        overflow: hidden !important;
      }

      /* Scrollbar styling */
      .n8n-chat .chat-messages::-webkit-scrollbar {
        width: 6px !important;
      }

      .n8n-chat .chat-messages::-webkit-scrollbar-track {
        background: #f3f4f6 !important;
      }

      .n8n-chat .chat-messages::-webkit-scrollbar-thumb {
        background: #9333ea !important;
        border-radius: 3px !important;
      }

      .n8n-chat .chat-messages::-webkit-scrollbar-thumb:hover {
        background: #7c3aed !important;
      }

      /* Typing indicator */
      .n8n-chat .typing-indicator {
        color: #9333ea !important;
      }

      /* Welcome message styling */
      .n8n-chat .welcome-message {
        background: linear-gradient(135deg, #f3e8ff, #e9d5ff) !important;
        border: 1px solid #d8b4fe !important;
        border-radius: 12px !important;
        padding: 16px !important;
        margin-bottom: 16px !important;
        color: #581c87 !important;
      }
    `;
    document.head.appendChild(customStyles);

    // Load and initialize the n8n chat
    const initChat = () => {
      try {
        // Load the script dynamically
        const script = document.createElement('script');
        script.type = 'module';
        script.innerHTML = `
          import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

          createChat({
            webhookUrl: 'https://mywebhook.ngrok.app/webhook/a889d2ae-2159-402f-b326-5f61e90f602e/chat',
            target: '#n8n-chat',
            mode: 'window',
            chatInputPlaceholder: 'Ask us about our training programs...',
            chatWindowTitle: 'Doorways Assistant',
            welcomeMessage: 'Hello! I\\'m here to help you learn about our entrepreneurship training programs. How can I assist you today?',
            defaultHeight: 600,
            defaultWidth: 400,
            showWelcomeScreen: true,
          });
        `;
        document.head.appendChild(script);
      } catch (error) {
        console.error('Failed to load n8n chat:', error);
      }
    };

    // Initialize chat after a short delay to ensure DOM is ready
    setTimeout(initChat, 1000);

    // Cleanup function
    return () => {
      document.head.removeChild(styleLink);
      document.head.removeChild(customStyles);
    };
  }, []);

  return <div id="n8n-chat" className="fixed bottom-6 right-6 z-50" />;
}
