import React from 'react';

const f = window.fabric.Image.filters;
const filterOptions = {
  none: () => undefined,
  grayscale: () => new f.Grayscale(),
  invert: () => new f.Invert(),
  sepia: () => new f.Sepia(),
  brownie: () => new f.Brownie(),
  vintage: () => new f.Vintage(),
  pixelate: () => new f.Pixelate({ blocksize: 10 }),
  technicolor: () => new f.Technicolor(),
  polaroid: () => new f.Polaroid(),
  kodachrome: () => new f.Kodachrome(),
  blackwhite: () => new f.BlackWhite()
}

export const Filters = ({images, setImages}) => (
  <div>
    <select onChange={(event) => setImages(filterImages(images, event.target.value))}>
      <option value="none">None</option>
      <option value="grayscale">Grayscale</option>
      <option value="invert">Invert</option>
      <option value="sepia">Sepia</option>
      <option value="brownie">Brownie</option>
      <option value="vintage">Vintage</option>
      <option value="pixelate">Pixelate</option>
      <option value="technicolor">Technicolor</option>
      <option value="poloroid">Poloroid</option>
      <option value="kodachrome">Kodachrome</option>
      <option value="blackwhite">Black and White</option>
    </select>
  </div>
);

function filterImages(images, filter) {
  return images.map((image) => {
    image.filters = [filterOptions[filter]()];
    image.applyFilters();
    return image;
  });
}
