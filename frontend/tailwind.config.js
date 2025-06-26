// frontend/tailwind.config.js
module.exports = {
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            colors: {
                auroraBlue: "#4A6FA5",
                softGold: "#E8C36B",
                mineralGray: "#7D8C9C",
                sereneWhite: "#FAFAFA"
            },
            fontFamily: {
                title: ["Poppins", "sans-serif"],
                body: ["Open Sans", "Inter", "sans-serif"]
            }
        }
    },
    plugins: []
};
