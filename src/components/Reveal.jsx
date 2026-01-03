import React, { useEffect, useRef, useState } from "react";

export const Reveal = ({
  children,
  delay = 0,
  width = "fit-content",
  variant = "up",
  triggerOnce = false,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // 1. Capture the current element in a variable
    const currentElement = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
            observer.disconnect();
          }
        } else {
          if (!triggerOnce && !hasTriggered) {
            setIsVisible(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (currentElement) {
      if (!(triggerOnce && hasTriggered)) {
        observer.observe(currentElement);
      }
    }

    return () => {
      // 2. Use the captured variable in cleanup, NOT ref.current
      if (currentElement) {
        observer.disconnect();
      }
    };
  }, [triggerOnce, hasTriggered]);

  const getHiddenState = () => {
    switch (variant) {
      case "left":
        return "opacity-0 -translate-x-20";
      case "right":
        return "opacity-0 translate-x-20";
      case "down":
        return "opacity-0 -translate-y-10";
      case "zoom":
        return "opacity-0 scale-90";
      case "up":
      default:
        return "opacity-0 translate-y-20";
    }
  };

  const getVisibleState = () => {
    return variant === "zoom"
      ? "opacity-100 scale-100"
      : "opacity-100 translate-x-0 translate-y-0";
  };

  const currentClass =
    (triggerOnce && hasTriggered) || isVisible
      ? getVisibleState()
      : getHiddenState();

  return (
    <div
      ref={ref}
      style={{ width, transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${currentClass}`}
    >
      {children}
    </div>
  );
};
