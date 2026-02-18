const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ background: 'rgba(9, 21, 47, 0.85)' }}>
      <img
        src="/favicon.ico"
        alt="Loading..."
        className="w-24 h-24 animate-pulse-zoom"
        style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 1)) drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))' }}
      />
      <style>{`
        @keyframes pulseZoom {
          0% {
            transform: scale(0.6);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(0.6);
            opacity: 0.5;
          }
        }
        .animate-pulse-zoom {
          animation: pulseZoom 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
