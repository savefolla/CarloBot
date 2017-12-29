
const messages = require('../db/messages.json');
const fs = require('fs');

exports.sendPhoto = ($, message) => {
    $.sendPhoto(message).then((res) => {
        messages.push({
            chat_id: $.message.chat.id,
            message_id: res.messageId,
            date: new Date().getTime()
        });
        fs.writeFile('db/messages.json', JSON.stringify(messages), function(err) {
            if(err) console.log(err);
            else console.log('messages db updated')
        });
    });
}

exports.sendVoice = ($, message) => {
    $.sendVoice(message).then((res) => {
        messages.push({
            chat_id: $.message.chat.id,
            message_id: res.messageId,
            date: new Date().getTime()
        });
        fs.writeFile('db/messages.json', JSON.stringify(messages), function(err) {
            if(err) console.log(err);
            else console.log('messages db updated')
        });
    });
}

exports.sendAudio = ($, message) => {
    $.sendAudio(message).then((res) => {
        messages.push({
            chat_id: $.message.chat.id,
            message_id: res.messageId,
            date: new Date().getTime()
        });
        fs.writeFile('db/messages.json', JSON.stringify(messages), function(err) {
            if(err) console.log(err);
            else console.log('messages db updated')
        });
    });
}

exports.sendVideo = ($, message) => {
    $.sendVideo(message).then((res) => {
        messages.push({
            chat_id: $.message.chat.id,
            message_id: res.messageId,
            date: new Date().getTime()
        });
        fs.writeFile('db/messages.json', JSON.stringify(messages), function(err) {
            if(err) console.log(err);
            else console.log('messages db updated')
        });
    });
}

exports.sendMessage = ($, message) => {
    $.sendMessage(message).then((res) => {
        messages.push({
            chat_id: $.message.chat.id,
            message_id: res.messageId,
            date: new Date().getTime()
        });
        fs.writeFile('db/messages.json', JSON.stringify(messages), function(err) {
            if(err) console.log(err);
            else console.log('messages db updated')
        });
    });
}

exports.sendSticker = ($, message) => {
    $.sendSticker(message).then((res) => {
        messages.push({
            chat_id: $.message.chat.id,
            message_id: res.messageId,
            date: new Date().getTime()
        });
        fs.writeFile('db/messages.json', JSON.stringify(messages), function(err) {
            if(err) console.log(err)
            else console.log('messages db updated')
        });
    });
}
