function getInitials(name) {
    return name ? name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2) : undefined;
}

export default getInitials;