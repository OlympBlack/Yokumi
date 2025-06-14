import { useState } from 'react';

const FaqElement = ({ question, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-marron w-full border-[2px] py-4 px-3 rounded-[15px] shadow-[3px_4px_10px_2px_rgba(64,21,13,0.25)]">
      <button 
        className="w-full text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-sm">{question}</h3>
        <span className="text-xl ml-4">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      {isOpen && (
        <div className={`mt-3 text-sm animate-fadeIn transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default FaqElement;