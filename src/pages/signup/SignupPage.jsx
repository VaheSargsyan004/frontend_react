export default function SignupPage() {
  return (
    <main className="page signup-page">
      <div className="signup-card">
        <p className="back">← Back to Home</p>
        <div className="logo-center">AI</div>
        <h2>Join HireAI Armenia</h2>
        <p className="muted">Create your account to start transforming your hiring process</p>
        <div className="grid-2">
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
        </div>
        <input placeholder="Email" />
        <select><option>I am a...</option></select>
        <input placeholder="Password" type="password" />
        <input placeholder="Confirm Password" type="password" />
        <label className="terms"><input type="checkbox" /> I agree to the Terms of Service and Privacy Policy</label>
        <button className="btn-dark full">Create Account</button>
      </div>
    </main>
  );
}
