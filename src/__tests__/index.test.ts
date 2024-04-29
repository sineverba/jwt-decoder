import { parseJwt } from "../index";

const validToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const anotherValidToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJ1c2VyLmNvbXBhbnkiLCJzZXJ2aWNlaWQiOiJjb21wYW55X2ZpZWxkcyIsInJlZGlyZWN0dXJsIjoiaHR0cDovLzE5Mi4xNjguMS4xMDEvbG9nb3V0LnBocCIsInJvb3R1cmwiOiJodHRwczovL3d3dy5leGFtcGxlLmNvbTo2MTQ4IiwibWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJwcm9maWxlIjoidXNlcl9iYXNpYyIsInRpbWVzdGFtcCI6IjQwNzA5MDUyMDAifQ.MULvj-zTkQdw6Ojw9gvTbbLMjJRH-LPtuvPvGgmi44E";

describe("Test parseJwt", () => {
  it("Should return null when token is not a string", () => {
    const token = 12345; // Non una stringa
    // @ts-ignore
    const result = parseJwt(token);
    expect(result).toBeNull();
  });

  it("Should return null when token is not provided", () => {
    const token = undefined; // Token non fornito
    // @ts-ignore
    const result = parseJwt(token);
    expect(result).toBeNull();
  });

  it("Should return null when token is not valid", () => {
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

  it("Should decode a second token", () => {
    const expectedResult = {
      userid: "user.company",
      serviceid: "company_fields",
      redirecturl: "http://192.168.1.101/logout.php",
      rooturl: "https://www.example.com:6148",
      mail: "user@example.com",
      profile: "user_basic",
      timestamp: "4070905200"
    };
    expect(parseJwt(anotherValidToken)).toStrictEqual(expectedResult);
  });
});
