import React from 'react';
const fabric = window.fabric;

export const Upload = ({ setImages }) => (
  <div>
    <input id="imageUploadInput" type="file" accept="image/*" multiple></input>
    <button onClick={() => uploadImages(setImages)}><i className="material-icons">file_upload</i></button>
  </div>
);

function uploadImages(setImages) {
  const input = document.getElementById('imageUploadInput');
  if (input && input.files.length > 0) {
    Promise.all(Array.from(input.files).map(uploadImage))
    .then(setImages);
  }
};

function uploadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image(100, 100);
    image.onload = () => resolve(new fabric.Image(image));
    image.src = window.URL.createObjectURL(url);
  });
}
