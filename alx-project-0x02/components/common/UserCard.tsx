import { type UserProps } from "@/interfaces";

const UserCard = ({ name, email, address }: UserProps) => {
    return (
        <div className="border p-4 rounded shadow bg-white">
            <h2 className="text-xl font-bold mb-1">{name}</h2>
            <p className="text-gray-700 mb-1">📧 {email}</p>
            <p className="text-gray-600 text-sm">
                🏠 {address.street}, {address.city}
            </p>
        </div>
    );
};

export default UserCard;
