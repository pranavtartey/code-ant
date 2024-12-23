type useSearchProps = {
    name: string;
    tech: string;
    tag: string;
    storage: string;
    lastUpdated: string;
}[]


const useSearch = (repositories: useSearchProps, search: string) => {

    if (search === "") return repositories;

    return repositories.filter(({ name }) => name.includes(search))
}

export { useSearch,  }