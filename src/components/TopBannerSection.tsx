
interface TopBannerSectionProps {
  title: string;
  description: string;
  icon: string;
}

const TopBannerSection = ({ title, description, icon }: TopBannerSectionProps) => {
  return (
    <div className="w-48 flex gap-4 items-center justify-center">
      {icon}

      <div className="flex flex-col gap-0.5">
        <div className="font-semibold">{title}</div>
        <div className="font-medium text-blue-400">{description}</div>
      </div>
    </div>
  )
};

export default TopBannerSection;