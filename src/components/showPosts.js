import React from 'react';

const ShowPosts = ({posts, loading}) => {

    if(loading) {
        return <h2> Loading... </h2>
    }

    return <div className="card-container mt-4 mb-4"> 
        {posts.map(post => (
            <div key={post.id} className="card">
                <div className="card-image">
                    <img src={post.image} alt={post.name}/>
                </div>                
                <div className="content">
                    <p className="title is-4"> {post.name} </p>
                    <p> <strong> Status: </strong> {post.status} <i className={post.status === 'Alive' ? "green fas fa-check-circle" : post.status === 'Dead' ? "red far fa-times-circle" : "yellow fas fa-exclamation-circle"} ></i> </p>
                    <p> <strong> Species: </strong> {post.species} </p>
                    <p> <strong> Location: </strong> {post.location.name} </p>
                </div>
            </div>
        ))}
    </div>;
}
 
export default ShowPosts;