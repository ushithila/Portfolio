import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    generateStars();
    generatePetals();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  /* COME BACK TO LATER */

  const generatePetals = () => {
    const numberOfPetals = 4;
    const newPetals = [];

    for (let i = 0; i < numberOfPetals; i++) {
      newPetals.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        animationDelay: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setPetals(newPetals);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal animate-petal"
          style={{
            width: petal.size * 5 + "px",
            height: petal.size * 6 + "px",
            left: petal.x + "%",
            top: 0,
            animationDelay: petal.delay,
            animationDuration: petal.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};