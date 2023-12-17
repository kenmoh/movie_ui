import { Chip } from "@nextui-org/react";

type CastProps = {
  name: string;
};

const CastChip = ({ name }: CastProps) => {
  return (
    <div className="flex gap-4">
      <Chip color="default" size="md" variant="flat">
        {name}
      </Chip>
    </div>
  );
};

export default CastChip;
