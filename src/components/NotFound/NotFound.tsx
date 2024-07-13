import './NotFound.css';
import image from '../../assets/not-found.jpg';

export const NotFound = () => {
  return (
    <section className="not-found">
      <p className="not-found__text">Page not Found</p>
      <img className="not-found__image" src={image} alt="not found" />
    </section>
  );
};
