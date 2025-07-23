import { type CardProps } from "@/interfaces";

const Card = ({ title, content }: CardProps) => {
    return (
        <div>
            {title}: {content}
        </div>
    );
};

export default Card;
