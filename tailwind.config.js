/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'primary': '#F97316',
                'secondary': '#4B5563',
                'dark': '#111111',
                'surface': '#F9FAFB',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
            // --- TAMBAHAN ANIMASI KEREN DI SINI ---
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' }, // Naik 20 pixel
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite', // Durasi 6 detik (sangat halus)
            }
        },
    },
    plugins: [],
}