import { useEffect, useState } from "react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Durée : 2 secondes

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500">
      <img
        src="/assets/main-logo.png" 
        alt="Logo Yokumi"
        className="h-20 w-20 animate-pulse opacity-0"
        style={{
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          opacity: 1,
          transform: 'scale(0.5)',
          transition: 'transform 1.5s ease-out, opacity 1.5s ease-out'
        }}
        onLoad={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.opacity = '1';
        }}
      />
    </div>
  );
};

export default Loader;