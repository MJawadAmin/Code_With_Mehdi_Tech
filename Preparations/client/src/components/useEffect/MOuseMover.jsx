import React, { useEffect } from 'react'

const MOuseMover = () => {
    useEffect(() => {
        const handleMouseOver = () => {
          console.log("Mouse moved");
        };
    
        // ✅ Correct event name: "mousemove" (not "mouseMove")
        window.addEventListener("mousemove", handleMouseOver);
    
        // Cleanup function to remove the event listener
        return () => {
          console.log("Component unmounted and window cleaning up");
          window.removeEventListener("mousemove", handleMouseOver);
        };
      }, []);
    
      return <div>Check the console and move your mouse</div>;
    };

export default MOuseMover
