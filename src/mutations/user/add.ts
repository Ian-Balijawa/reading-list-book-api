import User, { UserDoc } from "../../models/User";

type Args = {
    name: string,
    email: string,
    password:string,
};

const addUserMutation = async (parent: unknown, args: Args):Promise<UserDoc> => {
    
    const { name, email,password } = args;

    const userExits = await User.findOne({email});

    if (userExits) {
        console.error('Invalid Credentials. Email already in use');
        return;
    }

    let user = User.build({
    name, email,
    password,
    });
    
    //TODO: user.password = Password.toHash(user.password)
    user = await user.save();

    return user;
};

export default addUserMutation;