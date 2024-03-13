import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const {
  VITE_AUTH0_DOMAIN,
  VITE_AUTH0_CLIENT_ID,
  VITE_AUTH0_CALLBACK_URL,
  AUTH0_AUDIENCE,
} = import.meta.env;

export default function Auth0ProviderWithNavigate({ children }: Props) {
  const domain = VITE_AUTH0_DOMAIN;
  const clientID = VITE_AUTH0_CLIENT_ID;
  const redirect_uri = VITE_AUTH0_CALLBACK_URL;
  const audience = AUTH0_AUDIENCE;

  const navigate = useNavigate();

  const onRedirectCallback = () => {
    navigate("/auth-callback");
  };

  if (!domain || !clientID || !redirect_uri || !audience) {
    throw new Error("Unable to initialise auth");
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{ redirect_uri, audience }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}
