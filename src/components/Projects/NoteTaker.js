import React from 'react';

// import Images from './Images';
import ScribbleImg from './Images/ScribbleImg';


const NoteTaker = () =>(
<div className="ProjectNoteTaker"
style={{ margin: '2px', padding: '2px' }}>
    <div className="card">
        <div className="columns">
            <div className="columns">
                <figure className="image">

                    <img className="NoteTakePic" src='https://collegeinfogeek.com/wp-content/uploads/2020/01/best-note-taking-apps-for-ipad-featured.jpg?raw=true
                        ' alt="NoteTaker" />

                </figure>
            </div>
            <div className="column">
                    <h3>Note Taker</h3>
                    <a className="project-link" href="https://erik-jpg.github.io/Note-Taker/">
                        Deployed
                    </a>
                
                <a className="project-link" href="https://github.com/Erik-jpg/Note-Taker">
                    Github Repository Link
                </a>
                <br />
                <p>
                    An App that allows the user to write down notes, edit, save and, delete past notes. 
                <br />
                    Technologies used:
                    Vanilla JavaScript, CSS, Express, Node and, nodemon.
                </p>
            </div>
        </div>
    </div>
</div>
);



export default NoteTaker;



