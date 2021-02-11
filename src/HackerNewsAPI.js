import React, { Component } from "react";
import "./HackerNews.css";

const DEFAULT_QUERY = "redux";
const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";

const isSearched = (searchTerm) => (item) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class HackerNewsAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
  }

  setSearchTopStories(result) {
    this.setState({ result });
  }

  onDismiss(id) {
    const isNotId = (item) => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }
  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then((response) => response.json())
      .then((result) => this.setSearchTopStories(result))
      .catch((error) => error);
  }

  render() {
    const { searchTerm, result } = this.state;
    if (!result) {
      return null;
    }
    return (
      <div className="body">
        <div className="page">
          <div>
            <HackerNewsSearch
              value={searchTerm}
              onChange={this.onSearchChange}
            />
          </div>
          <HackerNewsTable
            list={result.hits}
            pattern={searchTerm}
            onDismiss={this.onDismiss}
          />
        </div>
      </div>
    );
  }
}

class HackerNewsSearch extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <form>
        <input type="text" value={value} onChange={onChange} />
      </form>
    );
  }
}

class HackerNewsTable extends Component {
  render() {
    const { list, pattern, onDismiss } = this.props;
    return (
      <div className="table">
        {list.filter(isSearched(pattern)).map((item) => (
          <div key={item.objectID} className="table-row">
            <span style={{ width: "40%" }}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={{ width: "30%" }}>{item.author}</span>
            <span style={{ width: "10%" }}>{item.num_comments}</span>
            <span style={{ width: "10%" }}>{item.points}</span>
            <span style={{ width: "10%" }}>
              <button
                onClick={() => onDismiss(item.objectID)}
                type="button"
                className="button-inline"
              >
                Dismiss
              </button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default HackerNewsAPI;
