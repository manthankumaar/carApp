// components/GoogleLoginButton.js
import { useEffect } from 'react';

const GoogleLoginButton = ({ onLoginSuccess, onLoginFailure }) => {
  // Replace with your actual client ID
  const handleGoogleLogin = () => {
    gapi.load('auth2', () => {
      gapi.auth2
        .init({
          client_id: clientId,
        })
        .then(() => {
          const auth2 = gapi.auth2.getAuthInstance();
          auth2.signIn().then(
            (googleUser) => {
              const idToken = googleUser.getAuthResponse().id_token;
              // Handle successful login
              console.log('Google login success:', idToken);
              // Call a function to handle the token (e.g., send it to the server)
              // handleToken(idToken);
              onLoginSuccess(idToken);
            },
            (error) => {
              // Handle login failure
              console.error('Google login failure:', error);
              onLoginFailure(error);
            }
          );
        });
    });
  };
  useEffect(() => {
    // Dynamically load the Google API script
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.async = true;
    script.defer = true;
    script.onload = handleGoogleLogin;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.head.removeChild(script);
    };
  }, [clientId, onLoginSuccess, onLoginFailure]);

  return <button onClick={handleGoogleLogin}>Login with Google</button>;
};

export default GoogleLoginButton;
