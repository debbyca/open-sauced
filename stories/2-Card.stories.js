import React from "react";
import Card from "../src/components/DumbCard";
import Background from "../src/styles/Background";
import List from "../src/styles/List";
import Avatar from "../src/styles/Avatar";
import {chevronRight} from "../src/icons";
import Octicon, {getIconByName} from "@primer/octicons-react";
import RepoListItem from "../src/components/RepoListItem.js";

export default {
  title: "Cards",
};

const goal = {
  title: "webpack",
};

export const Sample = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <Card>
      <div style={{minHeight: 35}}>
        <h1>Sample Card</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </Card>
  </Background>
);

export const Fitted = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <Card fitted>
      <div style={{minHeight: 35}}>
        <h1>Sample Card</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </Card>
  </Background>
);

export const RepoCard = () => (
  <Card>
    <RepoListItem stars={138} goal={goal} />
  </Card>
);

export const RepoCardList = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <Card fitted>
      <List>
        <li>
          <RepoListItem stars={138} goal={goal} />
        </li>
        <li>
          <RepoListItem stars={381} goal={goal} />
        </li>
      </List>
    </Card>
  </Background>
);
