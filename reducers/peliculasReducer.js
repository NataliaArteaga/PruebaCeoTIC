import {MOSTRAR_PELICULAS, LOADINGDESCARGAS, DESCARGAR_IMAGEN, AGREGAR_FAVORITOS, ELIMINAR_FAVORITOS, ACTUALIZAR_PERSONA,LOADING,LOADINGUSER, LOADINGFAVS} from '../actions/types'

const estadoInicialPeliculas={
peliculas:[], peliculasfav:{}, user: {
    username:'Natalia Arteaga',
    email:'nal961512@gmail.com',
    celular:'3001112222'
}, loading:true, count:0,loadinguser:false,descargas:{},loadingdescargas:false,loadingfavs:false
}

export default function(state=estadoInicialPeliculas, action){ //lo que se manda de peliculasAction en el dispatch es el action
    switch(action.type){                                       //que me llega la cadena type para el switch y el payload en este caso 
        
        case LOADING:                                          // lo configuramos como la respuesta del servidor, es decir la res desde
            return {...state,loading:true}   
       
        case LOADINGUSER:                                          // lo configuramos como la respuesta del servidor, es decir la res desde
        return {...state,loadinguser:true}                    //peliculas controller

        case LOADINGFAVS:                                          // lo configuramos como la respuesta del servidor, es decir la res desde
        return {...state,loadingfavs:true}    

        case LOADINGDESCARGAS:
            return {...state,loadingdescargas:true}      
    
        case MOSTRAR_PELICULAS:
        return{...state, peliculas:action.payload,loading:false};        
        break;
       
        case AGREGAR_FAVORITOS:
            state.peliculasfav[action.payload.id]=action.payload
            alert('Agregado a favoritos')
        return{...state, peliculasfav:state.peliculasfav,loadingfavs:false};        
        break;

        case DESCARGAR_IMAGEN:
            
            state.descargas[action.payload.id]=action.payload.url
            alert('Agregado a descargas')
            return{...state, descargas:state.descargas,loading:false, loadingdescargas:false};        
            break;

        case ACTUALIZAR_PERSONA: //Si exite valor para esa clave, lo modifica con el action.payload. 
            return{...state, user:action.payload, loadinguser:false}; 
            break;

        case ELIMINAR_FAVORITOS:
            ("estoy en eliminar", action.payload) //Si exite valor para esa clave, lo modifica con el action.payload. 
        delete state.peliculasfav[action.payload]
        return{...state, peliculasfav:state.peliculasfav,loading:false, loadingfavs:false};       
            break;
            
        default:
            return state
            break;
    }
}