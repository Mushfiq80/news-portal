import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2 className='mb-3'>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error tenetur delectus, hic assumenda quaerat vitae aliquid asperiores culpa nobis corporis, maiores nemo, qui sed nam necessitatibus repudiandae molestiae a tempore enim maxime consequuntur eaque. Qui harum fugiat laborum quidem ut consequatur dolores odit repudiandae, minima non fuga voluptate sunt delectus iste commodi! Impedit asperiores iure officiis placeat repellendus! Quaerat nam molestias omnis, sed vitae at sapiente doloribus quibusdam consequuntur aspernatur, nisi modi saepe laudantium tempore eum? Rem iusto consectetur quibusdam, ratione quis est. Id accusamus assumenda esse, saepe porro repudiandae veniam corrupti ad quibusdam enim, nesciunt explicabo cum quis.</p>

            <h2 className="mt-4">Go back to <Link to="/register">registration</Link></h2>
        </div>
    );
};

export default Terms;