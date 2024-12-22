import { FC } from "react";

type TagProps = {
  tag: string;
};

const Tag: FC<TagProps> = ({ tag }) => {
  return (
    <p className="bg-[#EFF8FF] rounded-full p-1 text-[#175CD3] w-16 text-center leading-none border border-[#B2DDFF]">
      {tag}
    </p>
  );
};

export default Tag;
