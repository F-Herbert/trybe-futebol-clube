
const validUser = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  // password: secret_admin
};

const userWithoutEmail = {
  password: 'any-password'
}

const userWithoutPassword = {
  email:'any-email'
}

export { 
  validUser,
  userWithoutEmail,
  userWithoutPassword
 };