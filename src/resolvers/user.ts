import User, { UserDoc } from "../models/User";

type Args = {
    email: string,
    name:string,
};

const userResolver = async (
  parent: unknown,
  args: Args
): Promise<UserDoc | null> => {
  const { email, name } = args

  if (name && email) {
    const user = await User.findOne({ email, name })
    return user
  }
  if (email && !name) {
    const user = await User.findOne({ email })
    return user
  }
  const user = await User.findOne({ name })
  return user
}

export default userResolver;