module.exports = app => {


    const authRoutes = require("./auth.routes")
    app.use("/auth", authRoutes);

    //Add your new routes here 

    const projectsRoutes = require("./projects.routes")
    app.use("/projects", projectsRoutes);

}