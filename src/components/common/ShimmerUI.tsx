import { ShimmeringText } from '../ui/shadcn-io/shimmering-text';

const ShimmerUI = () => {
  return (
    <ShimmeringText className="text-xl font-semibold" text="Loading..." wave />
  );
};

export default ShimmerUI;
