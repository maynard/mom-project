var express = require("express");
var app = express();



app.get("/api/employer_schedules", (req, res, next) => {
    res.json([
                { "id": 2, "start_time": "2019-02-28T16:00:00.000Z" },
                { "id": 6, "start_time": "2019-02-28T21:00:00.000Z" },
                { "id": 9, "start_time": "2019-02-28T14:00:00.000Z" }
            ]);
});



app.listen(3000, () => {
 console.log("Server running on port 3000");
});