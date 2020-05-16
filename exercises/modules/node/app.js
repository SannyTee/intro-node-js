const userFunction = require('./api');

const App = {}

App.showPostsForCurrentUser = (userId, cb) => {
    userFunction.getPostsForUser(userId, posts => {
        const postTemplates = posts.map(post => {
            return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`
        })
        cb(postTemplates)
    })
}

App.showUserProfile = (userId, cb) => {
    userFunction.getUserById(userId, user => {
        const profile = `
      <div>
        ${user.name}
      </div>
    `
        cb(user)
    })
}

module.exports = App;

