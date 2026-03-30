import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(null);
  const [showIcon, setShowIcon] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setAccepted(consent === "true");
      setShowIcon(true);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setAccepted(true);
    setVisible(false);
    setShowIcon(true);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false");
    setAccepted(false);
    setVisible(false);
    setShowIcon(true);
  };

  const handleIconClick = () => {
    setVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      {visible && (
        <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:right-6 md:left-auto max-w-full md:max-w-xs p-5 rounded-2xl 
                        shadow-2xl z-50 bg-[#1E293B] border border-[#3D4B5E] transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            {/* changed from red to blue */}
            <div className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <p className="text-sm font-bold text-white uppercase tracking-wider">
              Cookie Settings
            </p>
          </div>
          
          <p className="text-xs mb-4 text-[#CBD5E1] leading-relaxed">
            We use cookies to enhance your experience. You can manage your preferences or 
            <button 
              onClick={() => navigate('/privacy')}
              className="text-[#3B82F6] hover:underline ml-1 font-medium bg-transparent border-none p-0 cursor-pointer"
            >
              read our policy.
            </button>
          </p>

          <div className="flex gap-3">
            <button
              onClick={handleReject}
              className="flex-1 bg-transparent border border-[#3D4B5E] text-[#CBD5E1] px-4 py-2 rounded-lg text-xs font-bold uppercase hover:bg-white/5 transition-colors"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 bg-[#3B82F6] text-white px-4 py-2 rounded-lg text-xs font-bold uppercase hover:bg-blue-400 transition-all shadow-lg shadow-blue-500/20"
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Revisit Icon */}
      {showIcon && !visible && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
          <button
            onClick={handleIconClick}
            className="w-12 h-12 rounded-full bg-[#1E293B] shadow-xl border border-[#3D4B5E] 
                       flex items-center justify-center hover:scale-110 hover:border-[#3B82F6] transition-all cursor-pointer group"
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg"
              alt="Cookie Icon"
              className="w-6 h-6 object-contain group-hover:rotate-12 transition-transform"
            />
            {/* changed indicator to blue */}
            <span className="absolute top-0 right-0 w-3 h-3 bg-[#3B82F6] rounded-full border-2 border-[#1E293B]" />
          </button>
        </div>
      )}
    </>
  );
}