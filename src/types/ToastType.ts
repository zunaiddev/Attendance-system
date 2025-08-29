interface ToastType {
    success: (msg: string) => void;
    error: (msg: string) => void;
    info: (msg: string) => void;
    custom: (callback: () => void) => void;
}