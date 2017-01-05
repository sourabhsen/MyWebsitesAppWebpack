'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoosePaginate = require('mongoose-paginate');

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var Schema = _mongoose2.default.Schema;

var LinkedInschema = new Schema({
    firstName: String,
    headline: String,
    id: String,
    industry: String,
    interests: String,
    lastName: String,
    numRecommenders: { type: Number },
    pictureUrl: String,
    summary: String,
    certifications: {
        _total: { type: Number },
        values: [{
            authority: {
                name: String
            },
            id: { type: Number },
            name: { type: String },
            startDate: {
                month: { type: Number },
                year: { type: Number }
            }

        }]
    },
    courses: {
        _total: { type: Number },
        values: [{
            id: { type: Number },
            name: String
        }]
    },
    dateOfBirth: {
        day: { type: Number },
        month: { type: Number },
        year: { type: Number }
    },
    educations: {
        _total: { type: Number },
        values: [{
            degree: String,
            fieldOfStudy: String,
            id: { type: Number },
            schoolName: String,
            endDate: {
                year: { type: Number }
            },
            startDate: {
                year: { type: Number }
            }
        }]
    },
    languages: {
        _total: { type: Number },
        values: [{
            id: { type: Number },
            language: {
                name: String
            },
            proficiency: {
                level: String,
                name: String
            }
        }]
    },
    positions: {
        _total: { type: Number },
        values: [{
            company: {
                id: { type: Number },
                industry: { type: String },
                name: { type: String },
                size: { type: String },
                ticker: { type: String },
                type: { type: String }
            },
            endDate: {
                month: { type: Number },
                year: { type: Number }
            },
            id: { type: Number },
            isCurrent: Boolean,
            startDate: {
                month: { type: Number },
                year: { type: Number }
            },
            title: { type: String }

        }]
    },
    publications: {
        _total: { type: Number },
        values: [{
            id: { type: Number },
            summary: String,
            title: String,
            authors: {
                _total: { type: Number },
                values: [{
                    id: { type: Number },
                    name: { String: String }
                }]
            },
            date: {
                day: { type: Number },
                month: { type: Number },
                year: { type: Number }
            },
            publisher: {
                name: String
            }
        }]
    },
    recommendationsReceived: {
        _total: { type: Number },
        values: [{
            id: { type: Number },
            recommendationText: String,
            recommendationType: {
                code: String
            },
            recommender: {
                firstName: String,
                id: String,
                lastName: String,
                headline: String,
                pictureUrl: String
            }

        }]
    },
    skills: {
        _total: { type: Number },
        values: [{
            id: { type: Number },
            skill: {
                name: String
            }
        }]
    },
    threeCurrentPositions: {
        _total: { type: Number },
        values: [{
            company: {
                id: { type: Number },
                industry: { type: String },
                name: { type: String },
                size: { type: String },
                type: { type: String }
            },
            id: { type: Number },
            isCurrent: Boolean,
            location: {
                country: {
                    code: { type: String },
                    name: { type: String }
                },
                name: { type: String }
            },
            startDate: {
                month: { type: Number },
                year: { type: Number }
            },
            title: { type: String }
        }]
    },
    threePastPositions: {
        _total: { type: Number },
        values: [{
            company: {
                id: { type: Number },
                industry: { type: String },
                name: { type: String },
                size: { type: String },
                ticker: { type: String },
                type: { type: String }
            },
            endDate: {
                month: { type: Number },
                year: { type: Number }
            },
            id: { type: Number },
            isCurrent: Boolean,
            location: {
                name: { type: String }
            },
            startDate: {
                month: { type: Number },
                year: { type: Number }
            },
            title: { type: String }
        }]
    },
    volunteer: {
        causes: {
            _total: { type: Number },
            values: [{
                name: String
            }]
        },
        opportunities: {
            boardMember: Boolean,
            proBono: Boolean
        }
    }

});

var LinkedIn = _mongoose2.default.model('linkedIn', LinkedInschema);
module.exports = LinkedIn;
//# sourceMappingURL=linkedin.model.js.map