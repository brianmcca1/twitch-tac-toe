import React from 'react';

class PostInventory extends React.Component {
 constructor() {
   super();
   this.renderPostForm = this.renderPostForm.bind(this);
 }
 renderRemoveChoice(key, UserID) {
   if (this.props.posts[key].sessionID === UserID) {
    return <button onClick={() => this.props.removePost(key)}>Remove Post</button>
   }
 }
 handleChange(e, UserID, key) {
   const post = this.props.posts[key]
   const updatedPost = { ...post, [e.target.name]: e.target.value }
   this.props.updatePost(key, UserID, updatedPost);
 }
 renderPostForm(key) {
   const post = this.props.posts[key]
   return(
    <div className='post-form' key={key}>

      <br />
      <p className="post-name">
            {this.RenderName(this.props.posts[key].name)}
            <b> session ID:</b> {this.props.posts[key].sessionID}
            <b> post ID:</b> {this.props.posts[key].postID}<br />
          {this.renderRemoveChoice(key, this.props.UserID)}
      </p>
      <input name='desc' className="topboxput" 
      value={post.desc} 
      type='text'
      placeholder='Post Desc'
      onChange={(e) => this.handleChange(e, this.props.UserID, key)}
      />
    </div>
   )
 }
 RenderName(name) {
  if (name === ""){
    return <span><b>Username:</b> Anonymous </span>
  }
  return <span><b>Username:</b> {name} </span>
  
}
 render() {
    return (
       <div>
       <h2>/r/a7 </h2>
       {Object.keys(this.props.posts).map(this.renderPostForm)}
       
       </div>
    )
  }
 }

export default PostInventory;
