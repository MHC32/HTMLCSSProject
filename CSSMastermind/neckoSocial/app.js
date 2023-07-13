// Sidebar 

const menuItems = document.querySelectorAll('.menu-item');


// Messages 
const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");



// Remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
};

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id !== 'notifications') {
            document.querySelectorAll('.notification-popup').forEach(popup => {
                popup.style.display = "none";
            });
        } else {
            document.querySelectorAll('.notification-popup').forEach(popup => {
                popup.style.display = "block";
            });
            document.querySelectorAll('#notifications .notification-count').forEach(count => {
                count.style.display = 'none';
            });
        }
    });
});



// Messages 

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelectorAll('.notification-count').forEach(count => {
        count.style.display = 'none';
    });
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});
