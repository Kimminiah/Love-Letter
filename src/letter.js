import React, { useState } from 'react';

const Letter = () => {
  const [step, setStep] = useState(0);
  const [showLetter, setShowLetter] = useState(false);

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      setShowLetter(true);
    }
  };

  const handleSkip = () => {
    alert(
      step === 0
        ? 'Please...'
        : step === 1
        ? 'Please read it...'
        : 'PLEAASSEEE!!!'
    );
  };

  return (
    <div style={styles.container}>
      {!showLetter ? (
        <div style={styles.interactiveSection}>
          <h1 style={styles.title}>For You 💌</h1>
          <p style={styles.prompt}>
            {step === 0
              ? 'You have a letter waiting for you!'
              : step === 1
              ? 'Are you sure you want to read it?'
              : 'Last chance to open it!'}
          </p>
          <div style={styles.buttonContainer}>
            <button onClick={handleNext} style={styles.button}>
              {step === 0 ? 'Open Letter' : step === 1 ? 'Yes, open it!' : 'Okay, fine!'}
            </button>
            <button onClick={handleSkip} style={styles.skipButton}>
              {step === 0 ? 'Not interested' : step === 1 ? 'Maybe later' : 'Nah, skip it'}
            </button>
          </div>
        </div>
      ) : (
        <div style={styles.letter}>
          <h2>To Shana Faith Valencia,</h2>
          <p>
            Ang tagal na din pala. It feels like parang... habang hindi ako nakikipag-usap sayo kasi
            pinili ko ang peace na para sa atin, parang nakakaramdam lang uli ako ng melancholic feeling.
            I don't need or to expect anything from you btw, napagawa lang ako ng letter kasi namimiss ko
            lang yung feeling ng dati. I am happy naman ngayon na ganto yung naging outcome kasi i finally
            learned to be myself again, kasi dati parang 2 years pa ako bago maka move-on to anything.
            I guess i'm finally healing, step by step AHAHAH. I just hope that we could be friends again,
            of course yung hindi katulad nung dati, but a newer version of ourselves. Simula nung pumasok
            ang bagong taon, parang sabi ko kailangan ko na din siguro itapon sa basurahan yung nakaraan, lahat
            ng bad memories, and turn it into a seed that needs to be watered every day --- to blossom into
            a beautiful flower. Hindi ko na rin gagawing peke lahat ng sasabihin ko, but i genuinely miss you. 
            Happy Birthday, btw. You will forever always in my heart, my kazuha. 
          </p>
         {/* Polaroid-Style Images */}
         <div style={styles.polaroidContainer}>
            <div style={styles.polaroid}>
              <img
                src="MeandYou2.jpg" // Replace with your image URL
                alt="Memory 1"
                style={styles.polaroidImage}
              />
              <p style={styles.polaroidCaption}>Our First Memory</p>
            </div>
            <div style={styles.polaroid}>
              <img
                src="MostMemorable.jpg" // Replace with your image URL
                alt="Memory 2"
                style={styles.polaroidImage}
              />
              <p style={styles.polaroidCaption}>A Special Day</p>
            </div>
            <div style={styles.polaroid}>
              <img
                src="MeandYou.jpg" // Replace with your image URL
                alt="Memory 3"
                style={styles.polaroidImage}
              />
              <p style={styles.polaroidCaption}>Us. Just Us.</p>
            </div>
          </div>

          <h3>Forever Yours,</h3>
          <h3>Patricia(Kimminiah)</h3>
        </div>
      )}
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#e6e6fa', // Lavender background
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
    },
    interactiveSection: {
      textAlign: 'center',
    },
    title: {
      fontSize: '2.5rem',
      color: '#4b0082', // Indigo text
      marginBottom: '20px',
    },
    prompt: {
      fontSize: '1.2rem',
      color: '#6a5acd', // Slate blue text
      marginBottom: '20px',
    },
    buttonContainer: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: '#9370db', // Medium purple
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    skipButton: {
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: '#d8bfd8', // Thistle
      color: '#4b0082', // Indigo text
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    letterContainer: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        width: '90%', // Adjust width to fit screen
        maxHeight: '80vh', // Limit height to fit screen
        overflowY: 'auto', // Make content scrollable
        textAlign: 'left',
      },
      polaroidContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        margin: '20px 0',
      },
      polaroid: {
        backgroundColor: '#fff',
        padding: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '5px',
        textAlign: 'center',
      },
      polaroidImage: {
        width: '150px', // Smaller images
        height: 'auto',
        borderRadius: '5px',
      },
      polaroidCaption: {
        margin: '10px 0 0',
        fontSize: '0.9rem',
        color: '#333',
      },
    };
  
  export default Letter;