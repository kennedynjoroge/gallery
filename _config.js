var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://weekoneIP:NAzw07ugQGxopGr0@weekoneip.qao9luc.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://weekoneIP:NAzw07ugQGxopGr0@weekoneip.qao9luc.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://weekoneIP:NAzw07ugQGxopGr0@weekoneip.qao9luc.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
