module.exports = {
    future: {
      // removeDeprecatedGapUtilities: true,
      // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
      extend: {
        colors: {
          purple: {
            default: "#5c6eb4",
            dark: "#27315f",
          },
          yellow: {
            default: "#eec37c",
            dark: "#eca838"
          },
          gray: {
            light:"#f8f8f8",
            default: "#70706f",
          },
          pink:{
            default: "#f08580",
            dark:"#d86a64"
          },
          red:{
            default:"#e24c3d"
          }
        },
        fontFamily: {
          'Catamaran':['Catamaran'],
          'lato':['Lato'],
          display: [],
          body: [],
        },
      },
  
      
    },
    variants: {
      extend:{
       backgroundColor:['group-hover'],
       textColor:['group-hover'],
       scale:['active']
      }
    },
    plugins: [],
  };
  