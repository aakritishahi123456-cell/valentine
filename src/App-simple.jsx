import React, { useState } from 'react';

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = Math.min(noCount * 20 + 18, 50);
  
  // Cache busting for new image
  const imageUrl = `/valentine/couple-photo.jpg?v=20260204`;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Kbhi tu soch lia karo!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  if (yesPressed) {
    return (
      <div style={{
        minHeight: '100vh',
        background: `url('${imageUrl}') center/cover, linear-gradient(45deg, #ff6b6b, #ff8e8e)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 107, 107, 0.7)',
          zIndex: 1
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '30px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            I love you so much! ❤️
          </h1>
          
          <div style={{ 
            fontSize: '120px', 
            animation: 'beat 0.8s infinite',
            marginBottom: '30px'
          }}>
            💕
          </div>
          
          <p style={{ fontSize: '24px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            You made my day! 🌹
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: `url('${imageUrl}') center/cover, linear-gradient(45deg, #ff6b6b, #ff8e8e)`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px',
      position: 'relative'
    }}>
      {/* Background overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 107, 107, 0.4)',
        zIndex: 1
      }}></div>
      
      {/* Falling hearts animation */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animation: `fall ${3 + Math.random() * 2}s linear infinite`
            }}
          >
            💖
          </div>
        ))}
      </div>
      
      <div style={{ position: 'relative', zIndex: 3 }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          🌹 Happy Valentine's Day 🌹
        </h1>
        
        <div style={{ 
          fontSize: '100px', 
          animation: 'beat 1s infinite',
          marginBottom: '30px'
        }}>
          💕
        </div>
        
        <h2 style={{ fontSize: '2rem', marginBottom: '30px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
          Will you be my Valentine?
        </h2>
        
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button 
            onClick={() => setYesPressed(true)}
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              fontSize: `${yesButtonSize}px`,
              borderRadius: '10px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease',
              transform: noCount > 0 ? 'scale(1.1)' : 'scale(1)'
            }}
          >
            Yes! 💖
          </button>
          
          <button 
            onClick={handleNoClick}
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              fontSize: '18px',
              borderRadius: '10px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            {getNoButtonText()}
          </button>
        </div>
        
        <p style={{ marginTop: '40px', fontSize: '18px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
          Made with Love & Code ❤️
        </p>
      </div>
      
      <style>{`
        @keyframes beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default App;