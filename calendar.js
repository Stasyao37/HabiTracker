var Cal = function(divID){
    this.divID = divID;

    this.daysOfWeek = 
    [
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб',
        'Вс',
    ]
    this.monts = 
    [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябоь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ]

    var d = new Date();
    this.currMonth = d.getMonth;
    this.currYear = d.getFullYear;
    this.currDay - d.getDate;
}

Cal.prototype.nextMonth = function(){
    if (this.currMonth == 11){
        this.currMonth = 0;
        this.currYear += 1;
    }
    else{
        this.currMonth +=1;
    }
}

Cal.prototype.prevMonth = function(){
    if (this.currMonth == 0){
        this.currMonth = 11;
        this.currYear -= 1;
    }
    else{
        this.currMonth -= 1;
    }
}

Cal.prototype.showCurr = function(){
    this.showMonth(this.currYear, this.currMonth);
}
Cal.prorotype.showMonth = function(y, m){
    var d = new Date()
}