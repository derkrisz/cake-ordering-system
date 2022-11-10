"use strict";

const Buffer = require("buffer").Buffer;

function parsePayload(record) {
    const json = Buffer.from(record.kinesis.data, "base64").toString("utf-8");
    return JSON.parse(json);
}

module.exports.getRecords = event => {
    return event.Records.map(parsePayload);
};