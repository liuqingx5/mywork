function Message(activity, name, phone) {
    this.activity = activity;
    this.name = name;
    this.phone = phone;
}

Message.received_name = function (json_message) {
    return json_message.messages[0].message.substr(2).replace(/\s/g, '');
}

Message.received_phone = function (json_message) {
    return json_message.messages[0].phone;
}

Message.save_message = function (json_message) {
    var messages = JSON.parse(localStorage.getItem('messages')) || [];
    var message = new Message(localStorage.starting_activity, Message.received_name(json_message), Message.received_phone(json_message));
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}