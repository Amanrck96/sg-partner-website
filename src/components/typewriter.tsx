"use client";

import React, { useState, useEffect } from 'react';

export function Typewriter({ text, speed = 100 }: { text: string, speed?: number }) {
  const [displayedText, setDisplayedText] = useState(text); // Initialize with full text to avoid animation issues
  
  // Commenting out typewriter effect temporarily to debug display issues
  /*
  useEffect(() => {
    let i = 0;
    setDisplayedText(''); // Reset on text change
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);
  */

  return <span>{displayedText}</span>;
}
