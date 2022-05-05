import User, { UserDoc } from "../models/User";

const usersResolvers = async (): Promise<UserDoc[]> => {
  const users = await User.find({})

  return users
}

export default usersResolvers