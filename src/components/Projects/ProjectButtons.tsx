import { useTheme } from '../../contexts/ThemeContext';

type ProjectButtonsProps = {
    activeTab: "personal" | "client";
    setActiveTab: (tab: "personal" | "client") => void;
}

export function ProjectButtons({ activeTab, setActiveTab }: ProjectButtonsProps) {
    const projectsButtons = [
        { label: "Personal Projects", value: "personal" },
        { label: "Client Projects", value: "client" },
    ];
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        projectsButtons.map((button) => (
            <button
                key={button.value}
                onClick={() => setActiveTab(button.value as "personal" | "client")}
                className={`relative z-10 flex-1 px-6 py-1 text-sm font-medium w-[40%] transition-colors rounded-md ${isDark ? "text-white" : "text-gray-700"} ${activeTab === button.value ? "text-white" : "text-gray-700"}`}
            >
                {button.label}
            </button>
        ))
    );
}