module.exports = app => {


    const authRoutes = require("./routes/auth.routes");
    app.use("/auth", authRoutes);

    //Add your routes here 

    // const projectsRoutes = require("./routes/items.routes");
    // app.use("/items", authRoutes);

}