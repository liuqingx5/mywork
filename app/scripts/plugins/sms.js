//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        console.log(phone, message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },

    process_received_message: function (json_message) {
        var get_bm = json_message.messages[0].message.substr(0, 2).toUpperCase();
        if (get_bm == 'BM') {
            reply_message(json_message);
        }
        if (get_bm == 'JJ') {
            bid_message_reply(json_message);
//            BidMessage.save(json_message);
        }
    }
};


function reply_message(json_message) {
    if (Activity.start_activity()) {
        success_or_repeat_reply(json_message);
    }
    else {
        error_reply();
    }
}

function success_or_repeat_reply(json_message) {
    if (!Message.judge_repeat(json_message)) {
        Message.save_message(json_message);
        Message.refresh_sign_up();
        console.log("恭喜！报名成功");
        return;
    } else {
        console.log("您已经报过此活动!");
        return;
    }
}

function error_reply() {
    if (Activity.current().status == "end") {
        console.log("Sorry，活动报名已结束");
        return;
    }
    if (Activity.current().status == "un_start") {
        console.log("活动尚未开始，请稍后");
        return;
    }
}

function bid_message_reply(json_message) {
    if (Bid.start_bid()) {
        judge_sign_or_no(json_message);
    } else {
        error_bid_reply();
    }
}

function judge_sign_or_no(json_message) {
    if (BidMessage.judge_sign_up_activity(json_message)) {
        success_or_repeat(json_message);
    } else {
        console.log("对不起，您没有报名此次活动！");
    }
}

function error_bid_reply() {
    if (Bid.current_bid().status == "un_start") {
        console.log("对不起，竞价尚未开始！");
    }
    if (Bid.current_bid().status == "end") {
        console.log("对不起，竞价已结束！");
    }
}

function success_or_repeat(json_message) {
    if (!BidMessage.judge_repeat(json_message)) {
        BidMessage.save(json_message);
        BidMessage.refresh_bid_sign();
        console.log("恭喜！您已出价成功");
    } else {
        console.log("您已成功出价，请勿重复出价!");
    }
}


function notify_message_received(message_json) {
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}