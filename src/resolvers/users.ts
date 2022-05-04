import User, { UserDoc } from "../models/User";

const usersResolvers = async ():  Promise<
	(UserDoc & {
		_id: any;
	})[]> => {
    const users = await User.find({});

    return users;
}

export default usersResolvers