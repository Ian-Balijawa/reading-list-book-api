import User, { UserDoc } from '../../models/User';

type Args = {
  name: string;
  email: string;
  password: string;
};

const addUserMutation = async (
  parent: unknown,
  args: Args
): Promise<UserDoc | null> => {
  const { name, email, password } = args;

  const userExits = await User.findOne({ email });

  if (userExits) {
    console.error('Invalid Credentials. Email already in use');
    return null;
  }

  // let user = User.build({
  //   name,
  //   email,
  //   password
  // });

  let user = new User({
    name,
    email,
    password
  });

  //TODO: user.password = Password.toHash(user.password)
  return user;
};

const deleteUserMutation = async (
  parent: unknown,
  args: { email: string }
): Promise<UserDoc | null> => {
  const userExits = await User.findOne({ email: args.email });

  if (userExits) {
    console.error('User does not exist.');
    return null;
  }

  const deletedUser = await User.remove({ email: args.email });

  return deletedUser;
};

export { addUserMutation, deleteUserMutation };
