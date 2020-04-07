import bcrypt from "bcryptjs";
/**
 * Password Encryption
 * @param password
 * @returns {?string|string}
 *
 * uses bcrypt algorithm to hash the user password synchronously a total of 12 times.
 * The longer you run the encrypting process, the harder it is to break the password.
 * This password is basically unsolvable at this point.
 */
const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export default hashPassword;
