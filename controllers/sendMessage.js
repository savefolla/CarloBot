
const milliseconds = 1000*60*60*24;

module.exports = ($, message) => {
    $.sendMessage(message).then((res) => {
        // $.api.call as a workaround for the absence of deleteMessage method
        setTimeout(() => $.api.call('deleteMessage', Object.assign({
            chat_id: $.message.chat.id,
            message_id: res.messageId
        })), milliseconds);
    });
}