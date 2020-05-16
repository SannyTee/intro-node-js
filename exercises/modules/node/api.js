const data = require('./data');

const api = {}
const usersData = data.users;
const postsData = data.posts;

api.getUserById = (id, cb) => {
    // simulate API call
    setTimeout(() => {
        const user = usersData.find(user => user.id === id)
        cb(user)
    }, 150)
}

api.getPostsForUser = (userId, cb) => {
    // simulate API call
    setTimeout(() => {
        const posts = postsData.filter(post => post.createdBy === userId)
        cb(posts)
    }, 150)
}

module.exports = api;