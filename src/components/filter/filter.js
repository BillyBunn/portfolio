import React from 'react';
import { List, TagButton } from './filter.css';
const Filter = ({ tags, defaultTag, currentTag, setCurrentTag }) => {
  const initTag = defaultTag || tags[0];
  // const [currentTag, setCurrentTag] = React.useState(initTag);
  const handleClick = e => {
    e.preventDefault();
    console.log(e.target.value)
    setCurrentTag(e.target.value);
  };

  const isCurrent = tag => tag === currentTag;

  return (
    <List>
      <li>
        <TagButton
          onClick={handleClick}
          value={initTag}
          current={isCurrent(initTag)}
        >
          {initTag}
        </TagButton>
      </li>
      {tags.map((tag, idx) => (
        <li key={idx}>
          <TagButton onClick={handleClick} value={tag} current={isCurrent(tag)}>
            {tag}
          </TagButton>
        </li>
      ))}
    </List>
  );
};

export default Filter;
