import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ search, changeSetSearch }) => {
  const handleSearch = (e) => {
    changeSetSearch(e.target.value);
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        value={search}
        onChange={handleSearch}
        placeholder="Search Movie Title"
        mb={4}
      />
    </InputGroup>
  );
};

export default SearchBar;
