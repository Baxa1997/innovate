import DownloadView from "@/views/DownloadView";

export const metadata = {
    title: "Download our app",
    description: "Zero Max ELD™ delivers an innovative Fleet Management and Electronic Logging system that empowers carriers and drivers with various advanced features.",
    openGraph: {
        type: "website",
        locale: "uz_UZ",
        url: "https://zeromaxeld.com/download",
        site_name: "ZeromaxEld Fleet Management",
        title: "Download our app",
        // https://www.dropbox.com/scl/fi/2bp0l6nefm26d0gza5tw3/banner_admin_panel.png?rlkey=u06g55qowdrcbzn84qgjpqtr9&dl=0
        images: ["https://dl.dropboxusercontent.com/scl/fi/2bp0l6nefm26d0gza5tw3/banner_admin_panel.png?rlkey=u06g55qowdrcbzn84qgjpqtr9&dl=0"],
        description: "Zero Max ELD™ delivers an innovative Fleet Management and Electronic Logging system that empowers carriers and drivers with various advanced features.",
    },
};
export default function Home() {
    return <DownloadView/>
}