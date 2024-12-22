import { FC } from "react";
import DotIcon from "@/assets/ellipse-icon.svg";
import StorageIcon from "@/assets/database-icon.svg";
import Tag from "./Tag";

type ListItemProps = {
  name: string;
  tech: string;
  tag: string;
  storage: string;
  lastUpdated: string;
  className?: string;
};

const ListItem: FC<ListItemProps> = ({
  name,
  tech,
  tag,
  storage,
  lastUpdated,
  className,
}) => {
  return (
    <div className="border-t border-[#D5D7DA] hover:bg-[#D5D7DA] p-4 w-full flex flex-col gap-4">
      <div className="flex gap-4">
        <h2 className="text-[#181D27] text-lg font-medium">{name}</h2>
        <Tag tag={tag} />
      </div>
      <div className="flex gap-4">
        <p className="inline-flex justify-center items-center gap-2 text-[#181D27]">
          {tech}
          <DotIcon />
        </p>
        <p className="inline-flex justify-center items-center gap-2 text-[#181D27]">
          <StorageIcon />
          {storage}
        </p>
        <p className="text-[#181D27]">{lastUpdated}</p>
      </div>
    </div>
  );
};

export default ListItem;
