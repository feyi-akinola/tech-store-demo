interface TopBannerSectionProps {
  title: string;
  description: string;
  icon: string;
}

const TopBannerSection = ({ title, description, icon }: TopBannerSectionProps) => {
  return (
    <div className="w-48 flex gap-2 items-start justify-center">
      <div className="text-4xl font-bold">{icon}</div>
      <div className="flex flex-col gap-0.5">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-sm font-medium text-blue-400">{description}</div>
      </div>
    </div>
  )
};

export default TopBannerSection;