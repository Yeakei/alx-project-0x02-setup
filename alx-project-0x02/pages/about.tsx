import Button from "@/components/common/Button";

const About = () => {
    return (
        <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">About Page</h1>

            <div className="flex gap-4 flex-wrap">
                <Button size="small" shape="rounded-sm">
                    Small - rounded-sm
                </Button>
                <Button size="medium" shape="rounded-md">
                    Medium - rounded-md
                </Button>
                <Button size="large" shape="rounded-full">
                    Large - rounded-full
                </Button>
            </div>
        </div>
    );
};

export default About;
