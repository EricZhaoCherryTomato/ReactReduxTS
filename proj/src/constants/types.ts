
export interface AppState {
    counter: number;
    error?: string;
    loading: boolean;
    rightSidebarVisible: boolean;
}

export type AppStateType = AppState;

interface Action<T> {
    type: string;
    payload?: T;
}

export type ActionType<T> = Action<T>;