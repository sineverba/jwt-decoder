/**
 * Parses a JWT (JSON Web Token) and returns its payload as a JavaScript object.
 * @param {string} token The JWT string to parse.
 * @returns {object | null} The payload of the JWT as a JavaScript object, or null if parsing fails.
 */
const { Buffer } = require("buffer");

export const parseJwt = (token: string): object | null => {
  try {
    if (!token || typeof token !== "string") {
      throw new Error("Invalid token");
    }

    const [, payloadBase64] = token.split(".");
    if (!payloadBase64) {
      throw new Error("Invalid token format");
    }

    return JSON.parse(
      Buffer.from(
        payloadBase64.replace(/-/g, "+").replace(/_/g, "/"),
        "base64"
      ).toString("binary")
    );
  } catch (error) {
    return null;
  }
};
