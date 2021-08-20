module.exports = {
    generate_random_email() {
        let mail = (Math.random() + 1).toString(36).substring(3)
        mail += "@gmail.com"
        return mail
    }
}