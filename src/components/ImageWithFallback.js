import { useState } from 'react';

const ImageWithFallback = ({ src, alt, className, fallbackSrc, ...props }) => {
  const [hasError, setHasError] = useState(false);
  
  const handleError = () => {
    setHasError(true);
  };

  const finalSrc = hasError 
    ? (fallbackSrc || `https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop`)
    : src;

  return (
    <img 
      src={finalSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithFallback;