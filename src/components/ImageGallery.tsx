import  { X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  onRemove: (index: number) => void;
  title: string;
}

const ImageGallery = ({ images, onRemove, title }: ImageGalleryProps) => {
  if (images.length === 0) return null;
  
  return (
    <div>
      <h4 className="font-semibold mb-3">{title} ({images.length})</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img 
              src={image} 
              alt={`Image ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg" 
            />
            <button
              onClick={() => onRemove(index)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Remove image"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button className="btn-primary">
          Submit Images for Review
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
 