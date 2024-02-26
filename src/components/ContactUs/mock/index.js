import {
  ContactLocationIcon,
  ContactMainIcon,
  ContactPhoneIcon,
} from "@/assets/icons";

export const contactUs = [
  {
    id: 1,
    title: "Email",
    text: "Our friendly team is here to help",
    link: {title: 'support@zeromaxeld.com',link:"mailto:support@zeromaxeld.com"},
    icon: <ContactMainIcon />,
  },
  {
    id: 2,
    title: "Phone",
    text: "Mon-Sat from 8am to 5pm EST",
    link: {title: '1-717-703-0201',link:"tel:1-717-703-0201"},
    icon: <ContactPhoneIcon />,
  },
  {
    id: 3,
    title: "Office",
    text: "Visit our office",
    link: {link: 'https://maps.app.goo.gl/1B9pDuWwZE1uxGAi6',title: "222 Katie Dr Feasterville Trevose, PA  19053"},
    icon: <ContactLocationIcon />,
  },
];
