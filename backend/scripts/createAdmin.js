const User=require("../src/models/User.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");

async function bc(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}
dotenv.config();

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function ask(question) {
    return new Promise((resolve) => rl.question(question, (ans) => resolve(ans.trim())));
}

(async () => {
    try {
        const uri = process.env.MONGO_URI || "mongodb://root:example@localhost:27017";
        await mongoose.connect(uri);
        console.log("Create admin user");
        const name = await ask("Name: ");
        const email = await ask("Email: ");
        const password = await ask("Password: ");

        if (!name || !email || !password) {
            throw new Error("All fields are required.");
        }

        const existing = await User.findOne({ email });
        if (existing) {
            console.error("User with this email already exists.");
            process.exitCode = 1;
            return;
        }

        const user = new User({
            name,
            email,
            password: await bc(password),
        });

        await user.save();
        console.log(`Admin user created: ${email}`);
    } catch (err) {
        console.error("Failed to create admin:", err.message);
        process.exitCode = 1;
    } finally {
        rl.close();
        try {
            await mongoose.disconnect();
        } catch {}
    }
    process.exit();
})();