import { IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const BookmarkButton = ({ isBookmarked, onToggle }) => {
  const colorScheme = isBookmarked ? "yellow" : "gray";

  return (
    <IconButton
      aria-label="Bookmark movie"
      icon={<StarIcon />}
      colorScheme={colorScheme}
      onClick={onToggle}
    />
  );
};

export default BookmarkButton;