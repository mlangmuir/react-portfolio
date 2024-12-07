const logotext = "CL";
const meta = {
    title: "Corinne Langmuir",
    description: "I’m Corinne Langmuir",
};

const introdata = {
    title: "Corinne Langmuir",
    description: "Director, screenwriter and editor.",
    your_img_url: "https://res.cloudinary.com/didxdrmjj/image/upload/v1732252836/Screenshot_2024-11-22_at_12.16.29_AM_slkkuh.png",
};

const dataabout = {
    title: "My Story",
    aboutme: "I’m Corinne Langmuir, a Taiwanese-Canadian filmmaker based in Vancouver, Canada. I began my journey in experimental dance film but have since transitioned into the captivating world of narrative filmmaking. My current work explores themes of impermanence and the boundaries of personal agency.",
};

const filmfestivals = [
    {
        title: "Vancouver Asian Film Festival (VAFF)",
        where: "Vancouver",
        date: "2024",
    },
    {
        title: "IGNITE! Youth Arts Festival",
        where: "Vancouver",
        date: "2024",
    },
    {
        title: "Toronto Reel Asian International Film Festival",
        where: "Toronto",
        date: "2023",
    },
    {
        title: "Femme Fatale Film Festival",
        where: "Toronto",
        date: "2022",
    },
    {
        title: "Concordia Film Festival (CFF)",
        where: "Montreal",
        date: "2022",
    },
    {
        title: "Cascadia Dance & Cinema Festival",
        where: "Vancouver",
        date: "2021",
    },
    {
        title: "Festival of Recorded Movement (F-O-R-M)",
        where: "Vancouver",
        date: "2020",
    },
];

const awards = [
    {
        title: "Audience Choice Award (Festival of Recorded Movement)",
        date: "2020",
    },
]

const dataportfolio = [{
        title: "The Official Guidebook to Lying",
        img: "https://res.cloudinary.com/didxdrmjj/image/upload/v1733607553/Screenshot_2024-12-07_at_4.38.23_PM_jfpi9s.png",
        description: "A lifetime of abusing his natural talent for making up stories has led an arrogant serial liar to quit his deceiving ways forever. As a final hurrah, this scrappy university student shares an epic 11-minute masterclass on how to execute the perfect lie.",
        link: "https://vimeo.com/881243374",
    },
    {
        title: "Forest Fire",
        img: "https://res.cloudinary.com/didxdrmjj/image/upload/v1733607254/Screenshot_2024-12-07_at_3.33.54_PM_wlnpai.png",
        description: "Forest Fire follows the story of a young girl trying to move on from her self-destructive tendencies. Performer Erin Lum dances to Mitski’s “A Burning Hill” in an enclosed forest, mirroring the feeling of the world closing in. Throughout this restorative time of growth and understanding, she begins to appreciate the “littler things” in life: the way the rustling leaves seem to dance with her, or how the soil under her feet seem to guide her. She is grounded, dignified, and stands tall alongside the trees.",
        link: "https://vimeo.com/523452963",
    },
    {
        title: "Zì Jǐ",
        img: "https://res.cloudinary.com/didxdrmjj/image/upload/v1733607493/Screenshot_2024-12-07_at_4.37.45_PM_ixvtxe.png",
        description: "Zì Jǐ [zìjǐ, 自己], meaning ‘Self’ in Mandarin, is an introspective dance short depicting the ambiguous beauty of solitude. The film explores a sense of racial melancholia that follows our protagonist as she navigates an intimately distant relationship with numbness. She is pushed into a period of self-reflection felt as bleak, lonely, and permanent, yet through emotional exploration the feeling of permanence wavers. This harrowing journey demands more of her than she has to offer. Surrendering, she comes to find loneliness is natural and solitude is man-made.",
        link: "https://vimeo.com/457042549",
    }
];

const contactConfig = {
    YOUR_EMAIL: "corinnelangmuir@gmail.com",
    description: "Thank you for visiting my portfolio! Whether you're interested in collaborating on a film, hiring me for a project, or just want to share your thoughts, I’d love to hear from you.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

export {
    meta,
    dataabout,
    dataportfolio,
    filmfestivals,
    awards,
    introdata,
    contactConfig,
    logotext,
};