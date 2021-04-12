import sha512 from "js-sha512";

export function encrypt(unencrypted) {
     const encrypted = sha512.update(unencrypted);
     return encrypted;
  };
