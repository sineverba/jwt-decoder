import { parseJwt } from "../index";

const validToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

describe("Test parseJwt", () => {
  it("should return null when token is not a string", () => {
    const token = 12345; // Non una stringa
    // @ts-ignore
    const result = parseJwt(token);
    expect(result).toBeNull();
  });

  it("should return null when token is not provided", () => {
    const token = undefined; // Token non fornito
    // @ts-ignore
    const result = parseJwt(token);
    expect(result).toBeNull();
  });

  it("should return null when token is not valid", () => {
    const token = "a1b2c3"; // Token non fornito
    // @ts-ignore
    const result = parseJwt(token);
    expect(result).toBeNull();
  });

  it("Should decode a token", () => {
    const expectedResult = {
      sub: "1234567890",
      name: "John Doe",
      iat: 1516239022
    };
    expect(parseJwt(validToken)).toStrictEqual(expectedResult);
  });
});
