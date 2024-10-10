import React from "react";
import FacebookLogin, { ReactFacebookLoginInfo } from "react-facebook-login";

const FacebookLoginComponent: React.FC = () => {
  const responseFacebook = (response: ReactFacebookLoginInfo) => {
    console.log(response);
    if (response?.status === "unknown") {
      console.error("Sorry!", "Something went wrong with facebook Login.");
      return;
    }
  };

  return (
    <FacebookLogin
      appId="your-facebook-app-id" // Replace with your App ID
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      icon="fa-facebook"
    />
  );
};

export default FacebookLoginComponent;
