import { ArrowUp } from 'lucide-react';

type ImageBadgeProps = {
  type: 'arrow';
  color: string;
  top: string;
  left: string;
  size: number;
  rotate?: number;
};

export default function ImageBadge({
  color,
  top,
  left,
  size,
  rotate = 0,
}: ImageBadgeProps) {
  const Icon = ArrowUp;

  return (
    <div
      className="absolute"
      style={{
        top,
        left,
        width: `${size}%`,
        height: `${size}%`,
        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
      }}
    >
      <Icon color={color} size="100%" />
    </div>
  );
}
