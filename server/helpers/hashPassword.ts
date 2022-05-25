import bcrypt from 'bcryptjs';

//bcrypt
async function cryptPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return hash;
}
export default cryptPassword;
