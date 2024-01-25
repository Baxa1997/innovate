import {
  AccessIcon,
  CheckIcon,
  MessagesIcon,
  MoonIcon,
  ProductIcon,
  ScannerIcon,
} from "@/assets/icons";

export const complianceGrid1 = [
  {
    id: 1,
    title: "Compliance",
    text: "Fully FMCSA compliant to pass your roadside inspections",
    icon: <CheckIcon />,
    coming_soon: false,
  },
  {
    id: 2,
    title: "Maintain and audit records",
    text: "Monitor and maintain your records and exercise e-log flexibility",
    icon: <ProductIcon />,
    coming_soon: false,
  },
  {
    id: 3,
    title: "Driver Messaging",
    text: "Send messages, images or files directly through the app",
    icon: <MessagesIcon />,
    coming_soon: true,
  },
];

export const complianceGrid2 = [
  {
    id: 4,
    title: "Night Mode",
    text: "Darkened design to ease strain on your eyes. Power saving for your device",
    icon: <MoonIcon />,
    coming_soon: false,
  },
  {
    id: 5,
    title: "Easy Access",
    text: "Easily access most used pages and using certify, bulk certify all your past uncertified records",
    icon: <AccessIcon />,
    coming_soon: false,
  },
  {
    id: 6,
    title: "Document Scanner",
    text: "Easily scan documents like a professional",
    icon: <ScannerIcon />,
    coming_soon: true,
  },
];
