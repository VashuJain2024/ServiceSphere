import React, { useState } from "react";
import { X } from "lucide-react"; // Close button icon
import "./AIChatPopup.css";

const AIChatPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating Chat Button */}
            <button onClick={() => setIsOpen(true)} className="chatBtn">
                💬 Chat with AI
            </button>

            {/* Popup Chat Window */}
            {isOpen && (
                <div className="chatOverlay">
                    <div className="chatContainer">
                        {/* Close Button */}
                        <button onClick={() => setIsOpen(false)} className="closeBtn">
                            <X size={24} />
                        </button>

                        {/* AI Chat Iframe */}
                        <iframe
                            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/02/14/20/20250214205629-GO7GDWBL.json"
                            className="chatIframe"
                            title="AI Chat"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default AIChatPopup;
