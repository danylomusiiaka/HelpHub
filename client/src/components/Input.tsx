import "../form.css";
type InputProps = {
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ label, value, onChange }: InputProps) {
  return (
    <>
      <div className="input-field">
        <input
          className="auth-input"
          type="email"
          value={value}
          placeholder=""
          onChange={onChange}
        />
        <label className="input-label">{label}</label>
      </div>
    </>
  );
}
