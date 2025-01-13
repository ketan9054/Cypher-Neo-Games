import React from "react";

const PasswordPolicyPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>PasswordPolicyPage</h1>
      <ul>
        <li>Your password must be at least 8 characters long.</li>
        <li>It should contain at least one uppercase letter (A-Z).</li>
        <li>It should include at least one lowercase letter (a-z).</li>
        <li>It must have at least one numeric digit (0-9).</li>
        <li>
          It should include at least one special character (e.g., @, #, $,
          etc.).
        </li>
        <li>
          Your password should not contain your username or email address.
        </li>
      </ul>
    </div>
  );
};

export default PasswordPolicyPage;
