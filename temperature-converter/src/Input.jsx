function Input({ name, temp, onChange }) {
  return (
    <div className="input-container">
      <input className="input" type="number" value={temp} onChange={onChange} />
      <span className="input-name">{name}</span>
    </div>

  );
}

export default Input;