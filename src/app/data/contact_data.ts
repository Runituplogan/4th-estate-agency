export const contactPageData = {
  content: [
    {
      type: "banner",
      content: [
        {
          title: "Get In Touch",
          background_image: {
            url: "/images/bg_hero1.png",
            alt: null,
          },
        },
      ],
    },
    {
      type: "section1",
      content: {
        title: "Let\u2019s Level Up Your Brand Together",
        description: "Our friendly team would love to hear from you.",
        form: [
          { label: "First name", type: "text", placeholder: "First name" },
          { label: "Last name", type: "text", placeholder: "Last name" },
          { label: "Email", type: "email", placeholder: "you@company.com" },
          { label: "Phone number", type: "phone_number", placeholder: "Phone number" },
          { label: "Message", type: "text", placeholder: "Leave us a message..." },
          { label: "You agree to our friendly privacy policy.", type: "checkbox", placeholder: "You agree to our friendly privacy policy." },
          { label: "Send Message", type: "button", placeholder: null },
        ],
        map: {
          title: "Headquarters",
          address: "218 S Tower Dr #207, Beverly Hills, CA 90211",
          timezone: "(Sun to Fri 8:00AM - 5:00PM PST)",
          details: "test",
          image: "/images/location.png",
        },
      },
    },
  ],
};
