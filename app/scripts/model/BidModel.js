function Bid(activity,bid){
    this.activity=activity;
    this.name=bid;
    this.status="un_start"
}

Bid.save_bid = function () {
    var bid_lists = JSON.parse(localStorage.getItem('bid_lists')) || [];
    var bid_name = "竞价" + (Bid.current_bid_lists().length + 1);
    var bid_list = new Bid(localStorage.current_activity, bid_name);
    bid_lists.unshift(bid_list);
    localStorage.setItem('bid_lists', JSON.stringify(bid_lists));
    Bid.save_current_bid(bid_list.name);
}

Bid.get_bid = function () {
    return JSON.parse(localStorage.getItem('bid_lists')) || [];
}

Bid.current_bid_lists = function () {
    return _.filter(Bid.get_bid(), function (bid_list) {
        return bid_list.activity == localStorage.current_activity;
    })
}

Bid.save_current_bid = function (current_bid) {
    localStorage.setItem(('current_bid'), current_bid);
}