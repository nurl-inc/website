/**
 * This module is used to verify the user's email address.
 * @module verifier
 */

interface BadVerification {
  status: false;
  email?: never;
  domain?: never;
  error: {
    code: number;
    message: string;
  };
}

interface GoodVerification {
  status: true;
  email: string;
  domain: string;
  error?: never;
}

type Verification = BadVerification | GoodVerification;

/**
 * Verify the user's email address.
 * @param email The email address to verify.
 * @returns the `status` of the invalid state and the `error` if any.
 */
export async function verify(email: string): Promise<Verification> {
  const response = await fetch(
    `https://verifyright.co/verify/${email}?token=${process.env.VERIFIER_API_KEY}`,
  );
  return await response.json();
}
