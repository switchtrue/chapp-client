import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  userInitials: function() {
    const names = this.props.message.get('author').split(' ');
    var initials = '';
    for (var i in names) {
      initials += names[i].substr(0, 1).toUpperCase();
    }
    return initials;
  },
  avatarStyle: function() {
    function hashCode(str) { // java String#hashCode
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return hash;
    }

    function intToRGB(i){
      var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

      return '00000'.substring(0, 6 - c.length) + c;
    }

    function invertColor(hexTripletColor) {
      var color = hexTripletColor;
      color = color.substring(1);           // remove #
      color = parseInt(color, 16);          // convert to integer
      color = 0xFFFFFF ^ color;             // invert three bytes
      color = color.toString(16);           // convert to hex
      color = ('000000' + color).slice(-6); // pad with leading zeros
      return color;
    }

    const backgroundColor = intToRGB(hashCode(this.props.message.get('author')));
    const foregroundColor = invertColor(backgroundColor);

    return {
      backgroundColor: '#' + backgroundColor,
      color: '#' + foregroundColor
    }
  },

  messageDateFormatted() {
    const messageDate = this.props.message.get('date');
    return messageDate.getHours() + ':' + messageDate.getMinutes();
  },

  render: function() {
    return (
      <div className="message">
        <span className="avatar" style={this.avatarStyle()}>
          {this.userInitials()}
        </span>
        <span className="author">
          {this.props.message.get('author')}
        </span>
        <span className="text">
          {this.props.message.get('message')}
        </span>
        <span className="datetime">
          {this.messageDateFormatted()}
        </span>
      </div>
    );
  }
});
