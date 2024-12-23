type Repository = {
    name: string;
    tech: string;
    tag: string;
    storage: string;
    lastUpdated: string;
  };
  
  const filterRepositories = (repositories: Repository[], search: string) => {
    if (search === "") return repositories;
  
    return repositories.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  };
  
  export { filterRepositories };