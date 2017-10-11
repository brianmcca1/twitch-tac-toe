import React from 'react';

class Post extends React.Component {
  constructor() {
    super()
    this.RenderName = this.RenderName.bind(this)
  }

  RenderName(name) {
    if (name === ""){
      return <span><b>Username:</b> Anonymous </span>
    }
    return <span><b>Username:</b> {name} </span>
    
  }
  

  render() {
     const { details } = this.props;
     return (
       <li className="menu-post">
        <div className="post-details">
          <p className="post-name">
            {this.RenderName(details.name)}
            <b> session ID:</b> {details.sessionID}
            <b> post ID:</b> {details.postID}
          </p>
          <p>
            {details.desc}
          </p>

          {/*<button onClick={() => this.props.removePost(key)}>Remove Post</button>
        */}</div>
        </li>
     )
   }
}

export default Post;

