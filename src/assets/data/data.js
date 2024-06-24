const today = new Date();
const options = { day: "numeric", month: "short", year: "numeric" };
const formattedDate = today.toLocaleDateString("en-GB", options); // 'en-GB' for day-month-year order

const data = [
    {
        id: 1,
        title: "The Rise of AI in Healthcare",
        subtitle: "Transforming Diagnostics and Treatment",
        image: require("../images/car.png"),
        category: "healthcare",
        date: formattedDate,
        description:
            "Artificial intelligence is revolutionizing healthcare, from early disease detection to personalized treatment plans. Explore how AI is shaping the future of medicine.",
    },
    {
        id: 2,
        title: "Quantum Breakthroughs",
        subtitle: "Unlocking Unprecedented Processing Power",
        image: require("../images/car.png"),
        category: "technology",
        date: formattedDate,
        description:
            "Recent advancements in quantum computing promise to solve problems that were once considered impossible. Learn about the potential impact on various industries.",
    },
    {
        id: 3,
        title: "Sustainable Cities of Tomorrow",
        subtitle: "Building a Greener Urban Future",
        image: require("../images/car.png"),
        category: "environment",
        date: formattedDate,
        description:
            "Discover innovative solutions for creating sustainable cities, from renewable energy sources to smart transportation systems. Explore the challenges and opportunities ahead.",
    },
    {
        id: 4,
        title: "The Metaverse is Here",
        subtitle: "Immersive Virtual Worlds and Experiences",
        image: require("../images/car.png"),
        category: "virtual reality",
        date: formattedDate,
        description:
            "The metaverse is blending the physical and digital worlds, creating new ways to connect, work, and play. Learn about the latest developments and their potential impact on society.",
    },
    {
        id: 5,
        title: "Biotechnology Innovations",
        subtitle: "Improving Health and Agriculture",
        image: require("../images/car.png"),
        category: "science",
        date: formattedDate,

        description:
            "Biotechnology is advancing at a rapid pace, offering solutions for everything from gene editing to sustainable agriculture. Explore the exciting possibilities on the horizon.",
    },
    {
        id: 6,
        title: "Space Exploration: The Next Frontier",
        subtitle: "Private Companies and New Missions",
        image: require("../images/car.png"),
        category: "space",
        date: formattedDate,

        description:
            "Private companies are leading the charge in space exploration, with ambitious plans for lunar missions, Mars colonization, and beyond. Discover the latest developments and the future of space travel.",
    },
    {
        id: 7,
        title: "The Future of Work",
        subtitle: "Adapting to Automation and Remote Collaboration",
        image: require("../images/car.png"),
        category: "work",
        date: formattedDate,

        description:
            "The way we work is changing rapidly due to automation, AI, and the rise of remote work. Explore the challenges and opportunities facing the workforce of tomorrow.",
    },
    {
        id: 8,
        title: "Ethical AI: Building Trust and Transparency",
        subtitle: "Addressing Bias and Fairness Concerns",
        image: require("../images/car.png"),
        category: "technology",
        date: formattedDate,

        description:
            "As AI becomes more integrated into our lives, it's crucial to address ethical concerns like bias and discrimination. Learn about efforts to create more trustworthy AI systems.",
    },
    {
        id: 9,
        title: "Climate Change Solutions",
        subtitle: "From Renewable Energy to Carbon Capture",
        image: require("../images/car.png"),
        category: "environment",
        date: formattedDate,

        description:
            "The fight against climate change requires a multi-faceted approach. Explore innovative solutions for reducing emissions, adapting to changing conditions, and protecting the planet.",
    },
    {
        id: 10,
        title: "The Evolution of Robotics",
        subtitle: "From Industrial Automation to Personal Assistants",
        image: require("../images/car.png"),
        category: "technology",
        date: formattedDate,

        description:
            "Robots are becoming more sophisticated and integrated into various aspects of our lives. Learn about the latest advancements in robotics and the potential impact on society.",
    },
];

export default data;
