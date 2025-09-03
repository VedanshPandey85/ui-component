import React from 'react';

const MovingBorderCard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="relative">
        {/* Animated border container */}
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-sm"></div>
          
          {/* Content card */}
          <div className="relative bg-white rounded-2xl px-12 py-8 shadow-lg">
            <h2 className="text-xl font-medium text-gray-800 text-center">
              Borders are cool
            </h2>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MovingBorderCard;