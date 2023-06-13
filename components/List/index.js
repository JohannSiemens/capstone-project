import styled from "styled-components";

const UnsortedList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 0;

  @media screen and (min-width: 500px) {
    width: 400px;
  }
`;

const UnsortedListLeft = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  padding: 0;
`;

const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  height: 150px;
  border-radius: 5px;
  background: var(--secondary-color);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 10px;
  padding: 0;
`;

const List = ({ children, left, item, component, ...props }) => {
  if (item) {
    return (
      <ListItem as={component} {...props}>
        {children}
      </ListItem>
    );
  } else if (left) {
    return (
      <UnsortedListLeft as={component} {...props}>
        {children}
      </UnsortedListLeft>
    );
  } else {
    return (
      <UnsortedList as={component} {...props}>
        {children}
      </UnsortedList>
    );
  }
};

export default List;
