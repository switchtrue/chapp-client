import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import PersonInfo from './PersonInfo';

export default React.createClass({
  render: function() {
    var people = this.props.people.map(function(person) {
      return (
        <PersonInfo key={person.get('_id')} name={person.get('name')} />
      )
    });
    return (
      <div className="person-list">
        {people}
      </div>
    );
  }
});
