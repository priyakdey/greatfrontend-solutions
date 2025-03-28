import "./Action.css";

function Action({ IconComponent, count }) {
  return (
    <div className="action">
      <IconComponent className="action-icon" />
      <span className="action-count">{count}</span>
    </div>
  );
}

export default Action;