import React from 'react'

function Github() {
return (
    <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">Github</h1>
        <p className="mb-4">GitHub is a web-based platform used for version control. Git simplifies the process of working with other people and makes it easy to collaborate on projects. Team members can work on files and easily merge their changes in with the master branch of the project.</p>
        <h2 className="text-xl font-semibold mb-2">My GitHub Profile</h2>
        <p className="mb-4">Check out my GitHub profile <a href="https://github.com/owaiskhan-dev" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">here</a>.</p>
        <div className="flex flex-col items-center justify-center text-center">
            <img src="https://avatars.githubusercontent.com/owaiskhan-dev" alt="My GitHub Avatar" className="w-24 h-24 rounded-full mr-4" />
            <div>
                <p className="font-semibold">Username: M Owais Khan</p>
                <p>Bio: 🚀 Frontend Developer | React.js & Tailwind CSS Enthusiast.</p>
            </div>
        </div>
    </div>
)
}

export default Github
