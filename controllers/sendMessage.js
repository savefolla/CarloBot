
const milliseconds = 1000//*60*60*24;

exports.sendPhoto = ($, message) => {
    $.sendPhoto(message).then((res) => {
        // $.api.call as a workaround for the absence of deleteMessage method
        setTimeout(() => $.api.call('deleteMessage', Object.assign({
            chat_id: $.message.chat.id,
            message_id: res.messageId
        })), milliseconds);
    });
}

exports.sendVoice = ($, message) => {
    $.sendVoice(message).then((res) => {
        // $.api.call as a workaround for the absence of deleteMessage method
        setTimeout(() => $.api.call('deleteMessage', Object.assign({
            chat_id: $.message.chat.id,
            message_id: res.messageId
        })), milliseconds);
    });
}

exports.sendAudio = ($, message) => {
    $.sendAudio(message).then((res) => {
        // $.api.call as a workaround for the absence of deleteMessage method
        setTimeout(() => $.api.call('deleteMessage', Object.assign({
            chat_id: $.message.chat.id,
            message_id: res.messageId
        })), milliseconds);
    });
}

exports.sendVideo = ($, message) => {
    $.sendVideo(message).then((res) => {
        // $.api.call as a workaround for the absence of deleteMessage method
        setTimeout(() => $.api.call('deleteMessage', Object.assign({
            chat_id: $.message.chat.id,
            message_id: res.messageId
        })), milliseconds);
    });
}

exports.sendMessage = ($, message) => {
    $.sendMessage(message).then((res) => {
        // $.api.call as a workaround for the absence of deleteMessage method
        setTimeout(() => $.api.call('deleteMessage', Object.assign({
            chat_id: $.message.chat.id,
            message_id: res.messageId
        })), milliseconds);
    });
}

exports.sendSticker = ($, message) => {
    $.sendSticker(message).then((res) => {
        // $.api.call as a workaround for the absence of deleteMessage method
        setTimeout(() => $.api.call('deleteMessage', Object.assign({
            chat_id: $.message.chat.id,
            message_id: res.messageId
        })), milliseconds);
    });
}