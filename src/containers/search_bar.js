import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form class="input-group">
        <input />
        <span class="input-group-btn">
          <button type="submit" class="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
