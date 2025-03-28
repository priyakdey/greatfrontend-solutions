function ProgressBar({ progressPerc }) {

  return (
    <div className="progress-container">
      <div className="progress" style={{ width: `${progressPerc}%` }} >
        <span className="progress-perc-text">
          {progressPerc !== 0 ? `${progressPerc} %` : null}
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
