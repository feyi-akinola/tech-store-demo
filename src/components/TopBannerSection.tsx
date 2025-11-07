interface TopBannerSectionProps {
  title: string;
  description: string;
  icon: string;
}

const TopBannerSection = ({ title, description, icon }: TopBannerSectionProps) => {
  return (
    <div className="flex gap-2 items-start justify-center">
      <div className="text-2xl font-bold">{icon}</div>
      <div className="flex flex-col">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-sm font-medium text-blue-400">{description}</div>
      </div>
    </div>
  )
};

export default TopBannerSection;