const useFilter = () => {
  const filterValue = (value: string, searchTerm: string) =>
    value.toLowerCase().includes(searchTerm.toLowerCase());

  return { filterValue };
};

export { useFilter };
