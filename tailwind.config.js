/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        myBg: 'radial-gradient(86.71% 86.73% at 50% 45.52%, #FFF 39.72%, #DCD1FF 100%)',
        myImage: 'url("/public/Images/circle2.png"), url("/public/Images/bg.png"), url("/public/Images/shape1.png")',
        myImageii: 'url("/public/Images/shape1desktop.png"), url("/public/Images/circle2.png"), url("/public/Images/bg.png")',
        resetBg: 'none'
      },
      backgroundPosition: {
        myPosition: '2% 2%, 70% -10%, 100% 85%',
        myPositionii: '96% 100%, 29% -23%, 95% -20%'
      },
      backgroundSize: {
        mySize: 'auto, 370px, auto',
        mySizeii: 'auto, 80px, 890px'
      },
      backgroundColor: {
        sideTextBg: 'rgba(255, 255, 255, 0.30)'
      },
      backdropBlur: {
        myBlur: '10px'
      },
      fontFamily: {
        morangaSubsitute: ['DM Serif Display', 'serif'],
        raleway: ['Raleway', 'sans-serif']
      },
      boxShadow: {
        myShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.07)'
      },
      gridTemplateColumns: {
        myGrid: '6%, 94%'
      },
      gridTemplateRows: {
        myRows: 'auto, auto'
      }
    },
  },
  plugins: [],
}

