export const Upload = ({ setImages }) => (
  <div>
    <input id="imageUploadInput" type="file" accept="image/*" multiple></input>
    <button onClick={this.uploadImages(setImages)}>Upload</button>
  </div>
);

function uploadImages(setImages) {
  const input = document.getElementById('imageUploadInput');
  if (input.length > 0) {
    Promise.all(input.files.map(uploadImage))
    .then(setImages);
  }
};

function uploadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = window.URL.createObjectURL(url);
    image.onLoad(resolve(image));
  });
}
