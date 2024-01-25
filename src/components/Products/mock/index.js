import { BoxIcon, CameraIcon, LocationIcon, ProductIcon } from "@/assets/icons";

export const productsData = [
  {
    id: 1,
    title: "ELD Compliance",
    text: "FMCSA-certified ELD compliance solution provides drivers with a significant variety of tools to be on top of their Hours of Service",
    icon: <ProductIcon />,
    coming_soon: false,
  },
  {
    id: 2,
    title: "GPS Tracking",
    text: "Monitor vehicle's all types of movement and use a wide variety of our tools to be on the edge of decisions",
    icon: <LocationIcon />,
    coming_soon: false,
  },
  {
    id: 3,
    title: "Dispatch Board",
    text: "Streamline day-to-day operations by easily keeping track of your loads",
    icon: <BoxIcon />,
    coming_soon: true,
  },
  {
    id: 4,
    title: "AI Dash Camera",
    text: "With AI Dash Camera, you save on your insurance rates and improve your safety scores",
    icon: <CameraIcon />,
    coming_soon: true,
  },
];
