const FeatureCard = ({ icon, alt, title, paragraph }) => (
  <div className='features__card'>
    <figure className='card__picture'>
      <img src={icon} alt={alt} className='card__img' />
    </figure>
    <h3 className='card__title'>{title}</h3>
    <p className='card__text'>{paragraph}</p>
  </div>
);

export default FeatureCard;
