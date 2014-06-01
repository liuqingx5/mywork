function Activity(name) {
    this.activity = name;
    this.status = "un_start";
}

Activity.prototype.save_activity = function (activity) {
    var activities = JSON.parse(localStorage.getItem('activities')) || [];
    activities.unshift(activity);
    localStorage.setItem('activities', JSON.stringify(activities));
}

Activity.activities = function () {
    return JSON.parse(localStorage.getItem('activities')) || [];
}

Activity.save_current_activity = function (activity) {
    localStorage.current_activity = activity;
}

Activity.judge_repeat_activity = function (input_activity) {
    return  _.find(Activity.activities(), function (activity) {
        return activity.activity == input_activity;
    })

}

Activity.save_start_activity = function (name) {
    localStorage.startint_activity = name
}

Activity.change_status = function (status) {
    var activities = JSON.parse(localStorage.getItem('activities')) || [];
    var start_activity = _.find(activities, function (activity) {
        activity.activity = localStorage.current_activity;
    })
    start_activity.status=status;
    localStorage.setItem('activities', JSON.stringify(activities));
}

