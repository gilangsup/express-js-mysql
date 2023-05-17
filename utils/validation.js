const validate = require('validate.js')

exports.validateBootcamp = (data) => {
    //user scema
    var constraint = {
        name: {
            presence: {
                allowEmpty: false
            }
        },
        description: {
            presence: {
                allowEmpty: false
            }
        },
        website: {
            presence: {
                allowEmpty: false
            },
            url: true
        },
        phone: {
            presence: {
                allowEmpty: false
            }
        },
        email: {
            presence: {
                allowEmpty: false
            }
        },
        address: {
            presence: {
                allowEmpty: false
            }
        }
    }
    return validate(data, constraint, { format: 'flat'})
}