import { TechIcon } from "./TechIcon"

export const ToolboxItems = ({ items }: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
}) => {
  const half = Math.ceil(items.length / 2);
  const firstRow = items.slice(0, half);
  const secondRow = items.slice(half);

  return (
    <div className="w-full space-y-4">
      {/* First Row - Left to Right */}
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex flex-none gap-4 pr-4 animate-move-left [animation-duration:30s]">
          {[...firstRow, ...firstRow].map((item, index) => (
            <div key={`first-${item.title}-${index}`}
              className="inline-flex items-center gap-3 py-2 px-4 outline outline-2 outline-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 whitespace-nowrap">
              <TechIcon component={item.iconType} />
              <span className="text-sm font-semibold text-white/90">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex flex-none gap-4 pr-4 animate-move-right [animation-duration:30s]">
          {[...secondRow, ...secondRow].map((item, index) => (
            <div key={`second-${item.title}-${index}`}
              className="inline-flex items-center gap-3 py-2 px-4 outline outline-2 outline-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 whitespace-nowrap">
              <TechIcon component={item.iconType} />
              <span className="text-sm font-semibold text-white/90">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
