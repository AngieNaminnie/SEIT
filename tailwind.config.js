module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {
            backgroundImage: () => ({
                'login-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1280.jpg')",
                'landing-background':
                    'linear-gradient(rgba(0,0,0, 0.41), rgba(0,0,0, 0.75)), url(/src/assets/img/portada-2.jpg)',
                'profile-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1080.jpg')",
                'soporte-background':
                    'linear-gradient(rgba(245, 4, 4, 0.4), rgba(245, 4, 4, 0.4)), url(/src/assets/img/soporte.jpg)',
                'redes-background':
                    'linear-gradient(rgba(245, 4, 4, 0.4), rgba(245, 4, 4, 0.4)), url(/src/assets/img/redes.jpg)',
                'venta-background':
                    'linear-gradient(rgba(245, 4, 4, 0.4), rgba(245, 4, 4, 0.4)), url(/src/assets/img/venta.jpg)',
                'publicidad-background':
                    'linear-gradient(rgba(245, 4, 4, 0.4), rgba(245, 4, 4, 0.4)), url(/src/assets/img/publicidad2.jpg)',
                'seguridad-background':
                    'linear-gradient(rgba(6, 14, 234, 0.4), rgba(6, 14, 234, 0.4)), url(/src/assets/img/seguridad.jpg)',
                'licencia-background':
                    'linear-gradient(rgba(6, 14, 234, 0.4), rgba(6, 14, 234, 0.4)), url(/src/assets/img/licencias.jpg)',
                'diseño-background':
                    'linear-gradient(rgba(6, 14, 234, 0.4), rgba(6, 14, 234, 0.4)), url(/src/assets/img/diseño.jpg)',
                'portada2-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/SistemaSeguridad.jpeg')",
                'portada3-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/VentaEquipo.jpeg')",
                'portada4-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/SoporteTecnico.jpeg')",
                'portada5-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/DiseñoDesarrollo.jpeg')",
                    
                

            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};