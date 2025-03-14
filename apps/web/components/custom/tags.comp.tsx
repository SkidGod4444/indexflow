import { Badge } from "@/components/ui/badge";
import React, { useEffect, useState } from "react";

interface TagsCompProps {
  tags: {
    name: string;
    count: number;
  }[];
  onTagSelect?: (selectedTagName: string) => void;
}

export default function TagsComp({ tags, onTagSelect }: TagsCompProps) {
  const [tagName, setTagName] = useState("");

  useEffect(() => {
    if (onTagSelect) {
      onTagSelect(tagName);
    }
  }, [tagName, onTagSelect]);

  const handleTagClick = (tag: string) => {
    setTagName((prevTag) => (prevTag === tag ? "" : tag));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge
          key={tag.name}
          onClick={() => handleTagClick(tag.name)}
          variant={tag.name === tagName ? "default" : "secondary"}
          className="cursor-pointer"
        >
          {tag.name}
          <span className="ml-1 text-xs text-muted-foreground">
            × {tag.count}
          </span>
        </Badge>
      ))}
    </div>
  );
}
