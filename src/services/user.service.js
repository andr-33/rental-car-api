const supabase = require("../config/supabase.config");
const userService = {};

userService.getUserFromDB = async (id) => {
  const { data, error } = await supabase
    .from("users")
    .select("full_name, passport, phone")
    .eq("id", id)
    .single();
    
  if (error) throw error;
  return data;
};

userService.getUserEmailFromDB = async (id) => {
  const { data, error } = await supabase
    .from("user_email")
    .select("email")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data.email;
};

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

userService.loginInDB = async (email, password) => {
  const { data: authUser, error: authError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (authError) throw authError;
  
  return authUser.session.access_token;
};

module.exports = userService;