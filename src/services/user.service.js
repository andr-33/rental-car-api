const supabase = require("../config/supabase.config");
const userService = {};

userService.createUserInDB = async (user) => {
  const { data: authUser, error: authError  } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
    phone: user.phone
  });
  if (authError) throw authError;
  console.log(authUser.user);

  const { data: createdUser, error: createdError } = await supabase
    .from("users")
    .insert({
      id: authUser.user.id,
      full_name: user.full_name,
      passport: user.passport,
    });
  if (createdError) throw createdError;
};

module.exports = userService;