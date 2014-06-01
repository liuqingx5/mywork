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

Activity.save_current_activity = function (current_activity) {
    localStorage.current_activity = current_activity;
}

Activity.judge_repeat_activity = function (input_activity) {
    return  _.find(Activity.activities(), function (activity) {
        return activity.activity == input_activity;
    })

}

Activity.save_start_activity=function(name){
    localStorage.startint_activity=name
}



