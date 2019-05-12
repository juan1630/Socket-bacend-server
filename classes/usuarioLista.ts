import { Usuario } from './usuario';



export class UsuarioLista {

    public lista: Usuario[] = [];

    constructor(){}

    public agregar( usuario: Usuario ) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }

    public actualizarNombre( id: string, nombre: string ) {
        
        for( let usuario of this.lista){
            if( usuario.id === id ){
                usuario.nombre = nombre;
                break;
            }
        }
        console.log('======== Actualizando usuario ============');
        console.log(this.lista);
    }


// todos los usuarios
    public getLista(){
        return this.lista;
    }

    // un suuario
    public getUsuario( id: string ){
        return this.lista.find( user => { 
            return user.id === id;
         } )
    }


//obtener usuarios en una sala 
    public getUsuarioSala( sala: string ){
        return this.lista.filter( usuario => { 
            return usuario.sala === sala;
         } )
    }

    // borrar usuario 
    public borrarUsuario ( id: string ){ 
        // regresa el objeto del usuario

        const tempUsuario = this.getUsuario( id );
        this.lista = this.lista.filter( user =>  {  
            return user.id !== id;
         });
         return tempUsuario;
     }

}