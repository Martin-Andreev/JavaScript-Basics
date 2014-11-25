function change() {
    this.innerHTML = this.innerHTML === 'Like' ? 'Unlike' : 'Like';
}

document.getElementById('like-button').addEventListener('click', change);