import React, { useState } from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const StyledTree = styled.div`
  line-height: 1.5;
`;
const StyledLeaf = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;
const StyledBranch = styled.div`
  padding-left: 20px;

  .branch--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;
const Collapsible = styled.div`
  height: ${(p) => (p.isOpen ? "auto" : "0")};
  overflow: hidden;
`;

const paths = ['C1:a/b/c:d|e', 'C2:f/c:h|i|j', 'C3:k/l/m:n|o|p|q'];

function buildTree(paths) {
    const root = { type: "branch", name: "", childrens: [] };
    for (let path of paths) {
      let current = root;
      let identifierEnd = path.indexOf(':');
      path = path.substring(identifierEnd + 1);
      const [pathStr, nodesStr] = path.split(":");
      const parts = pathStr.split("/");
      for (let part of parts) {
        let existingChild = current.childrens.find((child) => child.name === part);
        if (!existingChild) {
          const newChild = { type: "branch", name: part, childrens: [] };
          current.childrens.push(newChild);
          current = newChild;
        } else {
          current = existingChild;
        }
      }
      const nodes = nodesStr.split("|");
      for (let node of nodes) {
        const newChild = { type: "leaf", name: node };
        current.childrens.push(newChild);
      }
    }
    return root.childrens;
  }

const Leaf = ({ name }) => {
  let ext = name.split(".")[1];

  return (
    <StyledLeaf>
      {/* render the extension or fallback to generic Leaf icon  */}
      {<ExpandMoreIcon fontSize='small' style={{ color: "white" }} />}
      <Link to={`/`}>
          {name}
        </Link>
    </StyledLeaf>
  );
};

const Branch = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledBranch>
      <div className="branch--label">
        {isOpen? <ExpandMoreIcon fontSize='small' onClick={handleToggle} />: <ChevronRightIcon fontSize='small' onClick={handleToggle} />}
        <Link to={`/`}>
          {name}
        </Link>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledBranch>
  );
};

const TreeRecursive = ({ data }) => {
  // loop through the data
  return data.map((item) => {
    // if its a Leaf render <Leaf />
    if (item.type === "leaf") {
      return <Leaf name={item.name} />;
    }
    // if its a branch render <Branch />
    if (item.type === "branch") {
      return (
        <Branch name={item.name}>
          {/* Call the <TreeRecursive /> component with the current item.childrens */}
          <TreeRecursive data={item.childrens} />
        </Branch>
      );
    }
  });
};
const Tree = (props) => {
  const structure = buildTree(props.meshpaths);
  return (
    <StyledTree>
      <TreeRecursive data={structure} />
    </StyledTree>
  );
};

Tree.Leaf = Leaf;
Tree.Branch = Branch;

export default Tree;
