import  { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

export const useCamera = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const webcamRef = useRef<Webcam>(null);

  const enableCamera = useCallback(() => {
    setIsCameraActive(true);
  }, []);

  const disableCamera = useCallback(() => {
    setIsCameraActive(false);
  }, []);

  const captureImage = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setCapturedImages(prev => [...prev, imageSrc]);
      }
    }
  }, []);

  const removeImage = useCallback((index: number) => {
    setCapturedImages(prev => prev.filter((_, i) => i !== index));
  }, []);

  return {
    isCameraActive,
    capturedImages,
    webcamRef,
    enableCamera,
    disableCamera,
    captureImage,
    removeImage
  };
};
 