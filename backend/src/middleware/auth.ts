import { auth } from "express-oauth2-jwt-bearer";

const { AUTH0_AUDIENCE, AUTH0_ISSUER_BASE_URL } = process.env;

export const jwtCheck = auth({
  audience: AUTH0_AUDIENCE,
  issuerBaseURL: AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});
