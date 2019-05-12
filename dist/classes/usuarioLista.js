"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioLista {
    constructor() {
        this.lista = [];
    }
    agregar(usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }
    actualizarNombre(id, nombre) {
        for (let usuario of this.lista) {
            if (usuario.id === id) {
                usuario.nombre = nombre;
                break;
            }
        }
        console.log('======== Actualizando usuario ============');
        console.log(this.lista);
    }
    // todos los usuarios
    getLista() {
        return this.lista;
    }
    // un suuario
    getUsuario(id) {
        return this.lista.find(user => {
            return user.id === id;
        });
    }
    //obtener usuarios en una sala 
    getUsuarioSala(sala) {
        return this.lista.filter(usuario => {
            return usuario.sala === sala;
        });
    }
    // borrar usuario 
    borrarUsuario(id) {
        // regresa el objeto del usuario
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(user => {
            return user.id !== id;
        });
        return tempUsuario;
    }
}
exports.UsuarioLista = UsuarioLista;
