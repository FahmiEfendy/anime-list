const Gallery = ({ images, title }) => {
  const imageDetailHandler = (url) => {
    window.open(url);
  };

  const centerImage = (index) => {
    const imageLeft = images.length % 4;
    const row = Math.floor(images.length / 4);

    if (row * 4 < index && imageLeft) return `col-span-2`;
    return null;
  };

  return (
    <div className="grid gap-5 grid-cols-4 place-items-center">
      {images.map((image, index) => {
        return (
          <img
            key={`${title}-${index}`}
            alt={`${title}-${index}`}
            className={`cursor-pointer border-8 border-white ${centerImage(
              index + 1
            )}`}
            src={image.medium}
            onClick={() => imageDetailHandler(image.large)}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
