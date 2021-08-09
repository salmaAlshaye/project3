const Chat = require('./model');

module.exports = {
    save: async msg => {
        let chatMessage = new Chat({ message: msg, sender: "Anonymouse" });

        return await chatMessage.save();
    },
    getAll: async () => {
        return await Chat.find({});
    }
}