import {MOSTRAR_PELICULAS,LOADINGDESCARGAS,DESCARGAR_IMAGEN,ACTUALIZAR_PERSONA, AGREGAR_FAVORITOS, ELIMINAR_FAVORITOS, LOADINGUSER, LOADINGFAVS} from './types'

export const mostrarPeliculas = () => async dispatch=> {
    try {
       const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=d2f75c50a366b48f468d9a270511e992&sort_by=popularity.desc'
      );
      const json = await response.json();
      dispatch({
        type: MOSTRAR_PELICULAS,
        payload: json.results
    })
    } catch (error) {
        console.log(error)
    }
  }

  export const favoritos = (item) =>  async dispatch=> {

      dispatch({
        type: AGREGAR_FAVORITOS,
        payload: item
      })
    } 

    export const eliminarfav = (id) =>  async dispatch=> {
      dispatch({
        type: LOADINGFAVS
    });
      dispatch({
        type: ELIMINAR_FAVORITOS,
        payload: id
      })
    } 


    export const descargarImagen = (url,id) =>  async dispatch=> {
      dispatch({
        type:LOADINGDESCARGAS
      })
      dispatch({
        type: DESCARGAR_IMAGEN,
        payload: {url:url,id:id}
      })
    } 

 
export const actualizarPersona = (persona)=> async dispatch => {
  dispatch({
    type: LOADINGUSER
});
  dispatch({
      type: ACTUALIZAR_PERSONA,
      payload:persona
  });
}

  
