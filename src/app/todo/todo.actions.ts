import { Action } from "@ngrx/store";


export const AGREGAR_TODO = '[TODO] Agrgear todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle all todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const LIMPIAR_COMPLETADOS_TODO = '[TODO] Limpiar completados todo';

export class AgregarTodoAction implements Action{
    readonly type = AGREGAR_TODO;
    constructor(public text: string) {}
}

export class ToggleTodoAction implements Action{
    readonly type = TOGGLE_TODO;
    constructor(public id: number) {}
}

export class ToggleAllAction implements Action{
    readonly type = TOGGLE_ALL_TODO;
    constructor(public completado: boolean) {}
}

export class EditarTodoAction implements Action{
    readonly type = EDITAR_TODO;
    constructor(public id: number,
                public texto: string) {}
}

export class BorrarTodoAction implements Action{
    readonly type = BORRAR_TODO;
    constructor(public id: number) {}
}

export class LimpiarCompletadosTodoAction implements Action{
    readonly type = LIMPIAR_COMPLETADOS_TODO;
}

export type Acciones = AgregarTodoAction | 
                       ToggleTodoAction | 
                       ToggleAllAction | 
                       EditarTodoAction | 
                       BorrarTodoAction | 
                       LimpiarCompletadosTodoAction;