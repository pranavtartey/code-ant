"use client";
import Button from "@/components/Button";
import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import SearchIcon from "@/assets/search-icon.svg";
import RefreshIcon from "@/assets/refresh-icon.svg";
import PlusIcon from "@/assets/plus-icon.svg";
import ListItem from "@/components/ListItem";
import { repositories } from "@/constants/repositories";
import { useSearch } from "@/hooks/useSearch";

type InputValueType = {
  search: string;
};

type FilterDataProps = {
  name: string;
  tech: string;
  tag: string;
  storage: string;
  lastUpdated: string;
};

const Dashboard: FC = () => {
  const [inputValue, setInputValue] = useState<InputValueType>({
    search: "",
  });

  const [filterData, setFilterData] = useState<FilterDataProps[]>([
    {
      name: "",
      tech: "",
      tag: "",
      storage: "",
      lastUpdated: "",
    },
  ]);

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    const data = useSearch(repositories, inputValue.search);
    setFilterData(data);
  };

  return (
    <section className="w-full lg:ml-[250px]">
      <div className="my-2 flex flex-col gap-4 max-lg:mt-20">
        <div className="lg:flex justify-between items-center px-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold">Repositories</h1>
            <p className="text-[#414651] text-sm font-normal">
              33 total repositories
            </p>
          </div>
          <div className="max-lg:mt-4 flex items-center gap-4">
            <Button variant="secondary" icon={<RefreshIcon />}>
              Refresh All
            </Button>
            <Button variant="primary" icon={<PlusIcon />}>
              Add Repository
            </Button>
          </div>
        </div>
        <div className="inline-flex items-center gap-4 border border-[#D5D7DA] rounded-lg p-2 ml-4 lg:max-w-sm ">
          <SearchIcon />
          <input
            type="search"
            placeholder="Search Repositories"
            className="w-full bg-[#FAFAFA]"
            onChange={changeHandler}
            name="search"
            value={inputValue.search}
          />
        </div>
      </div>
      <div className="mt-6">
        {repositories.map((repo) => (
          <ListItem {...repo} />
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
