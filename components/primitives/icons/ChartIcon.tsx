import Icon from "../Icon";

type ChartIconProps = {
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "thin" | "regular" | "medium" | "bold";
  className?: string;
};

export default function ChartIcon(props: ChartIconProps) {
  return (
    <Icon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
      />
    </Icon>
  );
}
