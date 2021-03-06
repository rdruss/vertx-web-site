import "./FeaturesItem.scss";

export default ({ icon, title, children }) => {
  let newIcon = React.cloneElement(icon, {
    size: 46
  });

  return (
    <div className="features-item">
      <span className="features-item-icon">{newIcon}</span>
      <h5>{title}</h5>
      {children}
    </div>
  );
};
