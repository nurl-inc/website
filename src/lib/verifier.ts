/**
 * This module is used to verify the user's email address.
 * @module verifier
 */

/**
 * Verify the user's email address.
 * @param email The email address to verify.
 * @returns the `status` of the invalid state and the `error` if any.
 */
export async function verify(email: string) {
  return await fetch(
    `https://verifyright.co/verify/${email}?token=${process.env.VERIFIER_API_KEY}`,
  );
}
