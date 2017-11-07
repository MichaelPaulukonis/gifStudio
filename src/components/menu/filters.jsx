import React from 'react';

const f = window.fabric.Image.filters;
const filterOptions = {
  none: () => undefined,
  grayscale: () => new f.Grayscale(),
  invert: () => new f.Invert(),
  sepia: () => new f.Sepia(),
  pixelate: () => new f.Pixelate({ blocksize: 3 })
}

export const Filters = ({images, setImages}) => (
  <div>
    <select onChange={(event) => setImages(filterImages(images, event.target.value))}>
      <option value="none">None</option>
      <option value="grayscale">Grayscale</option>
      <option value="invert">Invert</option>
      <option value="sepia">Sepia</option>
      <option value="pixelate">Pixelate</option>
    </select>
  </div>
);

function filterImages(images, filter) {
  const filterObject = filterOptions[filter]();
  return images.map((image) => {
    image.filters = [filterObject];
    return image;
  });
}
