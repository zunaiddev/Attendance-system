function capitalise(val: string): string {
    return val.charAt(0).toUpperCase() + val.substring(1).toLowerCase();
}

export default capitalise;