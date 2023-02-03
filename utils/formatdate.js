const moment = require('moment');

const formatDate = date => {
    return moment(date).format('MM/DD/YYYY, hh:mm a');

}
module.exports = formatDate;