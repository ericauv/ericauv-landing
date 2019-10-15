import React from 'react';
import styled from 'styled-components';
const Course = ({ course }) => {
  const { title, href, description } = course;
  const descriptionIsArray = Array.isArray(description);
  return (
    <div>
      <a href={href}>
        <h3>{title}</h3>
      </a>
      {description && descriptionIsArray && (
        <ul>
          {description.map((item, index) => (
            <li key={`description-item-${index}`}>{item}</li>
          ))}
        </ul>
      )}
      {description && !descriptionIsArray && <p>{description}</p>}
    </div>
  );
};

export default Course;
