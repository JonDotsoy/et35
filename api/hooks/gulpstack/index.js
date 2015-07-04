/**
 * gulpstack hook
 */
'use strict'

var gulp  = require("gulp")
var stack = require("gulpstack")

module.exports = function (sails) {


  return {

    initialize: function (next) {
      // sails.log.info("Star de compilation of Gulpstack")

      // sails.log.info("the pash base PWD is ", process.cwd())

      var config = sails.config.gulpstack || {}

      stack(gulp, {

        dest : config.pathPublic || ".tmp/public/",
        src  : config.pathAssets || "assets/",

        // Disable the task JADE and CONNECT.
        tasks: {
          jade    : false,
          connect : false,
        },

        scripts : config.concatScript || [],
        styles  : config.concatstyles || [],

        externals : config.externals || {},

      })


      try {
        gulp.task("runNext", function () {
          next()
        })

        var tasksToRun = []

        if (sails.config.environment === "development") {
          tasksToRun = [
            "init",
            "debug",
            "watch",
          ]
        } else {
          tasksToRun = [
            "init",
            "debug",
          ]
        }

        gulp.start(tasksToRun)
      } catch (err) {
        sails.log.error("Error to run GULP:", err)
      }

      return next()
    }
  }
}
