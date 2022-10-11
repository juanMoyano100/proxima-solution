import "./img.styles.css";

const Image = ({ src, alt, width, height }) => {
  return (
    <img
      className="image"
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Image;
