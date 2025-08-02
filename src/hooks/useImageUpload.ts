import  { useState, useCallback } from 'react';

export const useImageUpload = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      
      reader.onload = () => {
        setUploadedImages(prev => [...prev, reader.result as string]);
      };
      
      reader.readAsDataURL(file);
    });
  }, []);

  const removeImage = useCallback((index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  }, []);

  return {
    uploadedImages,
    handleFileUpload,
    removeImage
  };
};
 