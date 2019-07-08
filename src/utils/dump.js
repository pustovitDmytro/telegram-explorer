export function dumpUpdate(update) {
    return {
        id      : update.update_id,
        message : dumpMessage(update.message)
    };
}

export function dumpMessage(message) {
    return {
        id      : message.message_id,
        from    : dumpUser(message.from),
        to      : dumpChat(message.chat),
        payload : {
            text    : message.text,
            sticker : dumpSticker(message.sticker)
        },
        date : new Date(message.date)
    };
}

export function dumpUser(user) {
    return {
        id        : user.id,
        type      : user.is_bot ? 'BOT' : 'USER',
        firstName : user.first_name,
        lastName  : user.last_name,
        login     : user.username
    };
}

const CHAT_TYPES = {
    private    : 'PRIVATE',
    group      : 'GROUP',
    supergroup : 'SUPER_GROUP',
    channel    : 'CHANNEL'
};

export function dumpChat(chat) {
    return {
        id    : chat.id,
        type  : CHAT_TYPES[chat.type],
        title : chat.title
    };
}

export function dumpSticker(sticker) {
    return {
        id     : sticker.file_id,
        width  : sticker.width,
        height : sticker.height,
        size   : sticker.file_size
    };
}
