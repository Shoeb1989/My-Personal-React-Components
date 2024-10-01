import React, { useState } from 'react';

const Insert = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setImages((prevImages) => prevImages.concat(imageUrls));
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData('text/plain');
    
    if (draggedIndex !== index.toString()) {
      const updatedImages = [...images];
      const draggedImage = updatedImages[draggedIndex];

      // Remove the dragged image and insert it at the new position
      updatedImages.splice(draggedIndex, 1);
      updatedImages.splice(index, 0, draggedImage);

      setImages(updatedImages);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default to allow drop
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Image Upload</h1>
      <label className="flex items-center justify-center w-32 h-32 border-2 border-dashed rounded-lg cursor-pointer mb-4">
        <input 
          type="file" 
          accept="image/*" 
          multiple 
          onChange={handleImageChange} 
          className="hidden" 
        />
        <span className="text-4xl text-gray-500">+</span>
      </label>
      <div className="grid grid-cols-3 gap-4 transition-all duration-300 ease-in-out">
        {images.map((url, index) => (
          <div 
            key={index} 
            className="relative border-2 border-gray-300 rounded overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105" 
            draggable 
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            <img 
              src={url} 
              alt={`img-${index}`} 
              className="w-24 h-24 object-cover"
              draggable="false"
            />
            <button 
              onClick={() => removeImage(index)} 
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insert;
