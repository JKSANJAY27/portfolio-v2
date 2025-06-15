
import { TechIcon } from "./TechIcon"

export const ToolboxItems = ({items}:{
    items: {
        title: string;
        iconType: React.ElementType;
    }[];
}) => {
    return (
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none gap-4 pr-4 animate-move-left [animation-duration:30s]">
                {[...items, ...items].map((item, index) => (
                    <div key={`${item.title}-${index}`} 
                         className="inline-flex items-center gap-3 py-2 px-4 outline outline-2 outline-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 whitespace-nowrap">
                        <TechIcon component={item.iconType} />
                        <span className="text-sm font-semibold text-white/90">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}