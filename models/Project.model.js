const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
    {
        projectName: {
            type: String,
        },

        description: {
            type: String,
        },

        stackUsed: {
            type: String
        },

        owner: {
            type: Schema.Types.ObjectId,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Project", projectSchema)
