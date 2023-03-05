export const getFullAddress = (user) => {
    return `${user.street}, ${user.city}, ${user.state}, ${user.zip}`
};

export const getFormattedDateTime = (unformattedDate) => {
    const date = new Date(unformattedDate);
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'short'}).format(date);
}