export default class Patient {
    // name, num_past_reports, last_report_date, public_key
    constructor() {
        this.names = ["McLovin", "John Smith", "Peter Li", "Trevor Keith"]
        this.num_past_reports = [1, 2, 3, 4, 5, 6]
        this.last_report_dates = ["1/23/95", "8/7/20", "5/16/06", "6/4/04"]
        this.public_key = [""]
    }

    get name() {
        return this.names[Math.floor(Math.random() * this.names.length)];
    }

    get num_past_reports() {
        
    }
}