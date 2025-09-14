interface TechChipProps {
  technology: string;
}

export const TechChip = ({ technology }: TechChipProps) => {
  return (
    <span className="inline-block bg-cyan-400/10 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-400/20 hover:bg-cyan-400/20 transition-colors duration-200">
      {technology}
    </span>
  );
};