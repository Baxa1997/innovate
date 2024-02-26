import PartnerShipView from "@/views/PartnerShipView";

export const metadata = {
    title: "Our partnership is designed to deliver excellence",
    description: "Resell Fleet Management system under your brand name and be in the edge of innovations",
    openGraph: {
        type: "website",
        locale: "uz_UZ",
        url: "https://zeromaxeld.com/partnership",
        site_name: "ZeromaxEld Fleet Management",
        title: "Our partnership is designed to deliver excellence",
        // https://www.dropbox.com/scl/fi/2bp0l6nefm26d0gza5tw3/banner_admin_panel.png?rlkey=u06g55qowdrcbzn84qgjpqtr9&dl=0
        images: ["https://dl.dropboxusercontent.com/scl/fi/2bp0l6nefm26d0gza5tw3/banner_admin_panel.png?rlkey=u06g55qowdrcbzn84qgjpqtr9&dl=0"],
        description: "Resell Fleet Management system under your brand name and be in the edge of innovations",
    },
};
export default function Home() {
    return <PartnerShipView/>
}
