import User from "./models/User";

export const resolvers = {

    Query: {
        async allUsers() {
            return await User.find()
        },
        async userById(_, { _id } ){
            return await User.findById(_id)
        }
    },

    Mutation: {
        async createUser( _, { input } ) {
            const newUser = new User( input )
            await newUser.save()
            return newUser
        },

        async deleteUser(_,  { _id }){
            return await User.findByIdAndDelete(_id)
        },

        async updateUser(_, { _id, input }){
            return await User.findByIdAndUpdate( _id, input, { new: true })
        }
    }

}