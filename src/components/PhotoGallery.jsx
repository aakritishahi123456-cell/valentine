import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const PhotoGallery = () => {
    const [photos, setPhotos] = useState([]);

    const handlePhotoUpload = (e) => {
        if (e.target.files) {
            const newPhotos = Array.from(e.target.files).map(file => URL.createObjectURL(file));
            setPhotos(prev => [...prev, ...newPhotos]);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <h2 className="text-3xl font-heading text-center text-rose-800 mb-6">Our Cherished Moments</h2>

            <div className="flex justify-center mb-8">
                <label className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-white/60 hover:bg-white/80 transition-colors rounded-lg text-rose-700 font-semibold shadow-sm border border-rose-200">
                    <Upload size={20} />
                    <span>Upload Memories</span>
                    <input type="file" multiple accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                </label>
            </div>

            {photos.length === 0 ? (
                <div className="text-center text-gray-500 italic bg-white/30 p-8 rounded-lg">
                    No photos yet. Add some specific to your love story!
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {photos.map((src, index) => (
                        <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white p-2 transform hover:-rotate-1">
                            <img src={src} alt="Memory" className="w-full h-full object-cover rounded" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PhotoGallery;
