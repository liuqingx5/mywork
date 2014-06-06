function BidMessage(activity, bid, name, phone, price) {
    this.activity = activity;
    this.bid = bid;
    this.people = name;
    this.phone = phone;
    this.price = price;
}

BidMessage.save = function (json_message) {
    var activity = localStorage.starting_bid_activity;
    var bid = localStorage.starting_bid;
    var people = Message.search_people_name().name;
    var phone = Message.received_phone(json_message);
    var price = Message.received_price(json_message)
    var bid_messages = JSON.parse(localStorage.getItem('bid_messages')) || [];
    var bid_message = new BidMessage(activity, bid, people, phone, price);
    bid_messages.push(bid_message);
    localStorage.setItem('bid_messages', JSON.stringify(bid_messages));
}

BidMessage.get = function () {
    return JSON.parse(localStorage.getItem('bid_messages')) || [];
}

BidMessage.judge_repeat = function (json_message) {
    return _.chain(BidMessage.get())
        .filter(function (bid_message) {
            return bid_message.activity == localStorage.starting_bid_activity && bid_message.bid == localStorage.starting_bid;
        })
        .find(function (bid_message) {
            return  bid_message.phone == Message.received_phone(json_message);
        })
        .value()
}

BidMessage.judge_sign_up_activity = function (json_message) {
    return _.find(Message.get_messages(), function (message) {
        return message.activity == localStorage.starting_bid_activity && message.phone == Message.received_phone(json_message);
    })
}

BidMessage.search_current = function () {
    return _.filter(BidMessage.get(), function (bid_message) {
        return bid_message.activity == localStorage.current_activity && bid_message.bid == localStorage.current_bid;
    })
}

BidMessage.judge_number=function (json_message){
    var prices = json_message.messages[0].message.substr(2).replace(/\s/g, '');
    return _.find(prices,function(price){
        return price.charAt(price);
    })
}

BidMessage.results = function () {
    return _.chain(BidMessage.search_current())
        .sortBy(function (bid_message) {
            return bid_message.price;
        })
        .value();
}

BidMessage.counts = function () {
    return _.chain(BidMessage.results())
        .groupBy(function (result) {
            return result.price;
        })
        .map(function (value, key) {
            return {"price": key, "count": value.length}
        })
        .value();
}

BidMessage.success_or_no = function () {
    return _.find(BidMessage.counts(), function (count) {
        return count.count == '1';
    })
}

BidMessage.success_bid = function () {
    if (BidMessage.success_or_no()) {
        return _.find(BidMessage.results(), function (result) {
            return result.price == BidMessage.success_or_no().price;
        })
    }
}

BidMessage.refresh_bid_sign = function () {
    var id_exist = document.getElementById("refresh_bid_sign")
    if (id_exist) {
        var scope = angular.element(id_exist).scope();
        scope.$apply(function () {
            scope.refresh();
        })
    }
}



