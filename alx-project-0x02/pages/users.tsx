import { GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
    users: UserProps[];
}

const Users = ({ users }: UsersPageProps) => {
    return (
        <div>
            <Header />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Users</h1>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {users.map((user) => (
                        <UserCard key={user.id} {...user} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: UserProps[] = await res.json();

    return {
        props: {
            users: data,
        },
        revalidate: 60, // Optional: revalidate every 60 seconds
    };
};

export default Users;
