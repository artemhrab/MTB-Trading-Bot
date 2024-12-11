import mongoose, { Document, Schema } from "mongoose";

interface IWallet {
    pubkey: string; // Example property for currency
    privkey: string; // Example property for amount
}

export interface IUser extends Document {
    userId: string;
    username: string;
    wallets: any[];
}

const UserSchema: Schema = new Schema({
    userId: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    wallets: {type: Object},
});

const User = mongoose.model<IUser>("User", UserSchema, "users");
export default User;
