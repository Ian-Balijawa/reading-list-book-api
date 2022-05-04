import User, { UserDoc } from '../../models/User';

type Args = {
	id:string
};

const deleteUserMutation = async (
	parent: unknown,
	args: Args
): Promise<UserDoc> => {

	const userExits = await User.findById(args.id);

	if (userExits) {
        console.error('User does not exist.');
        return;
	}

    const deletedUser = await User.findByIdAndRemove(args.id)
    
    return deletedUser;
};

export default deleteUserMutation;
